"use client";
import EActionTypes from "@/enums/cartContextActionEnum";
import TCartItem from "@/types/cartItem";
import TReducerAction from "@/types/cartContextReducerAction";
import { Dispatch, createContext, useEffect, useReducer } from "react";
import TCartContext from "@/types/cartContext";
import searchCartByItemName from "@/util/searchCartByItemName";
import addToCart from "@/util/addToCart";
import removeFromCart from "@/util/removeFromCart";
import clearCart from "@/util/clearCart";
import saveCartToDB from "@/util/saveCartToDB";

export const CartContext = createContext<TCartContext>({
  cartState: [] as TCartItem[],
  cartDispatch: {} as Dispatch<TReducerAction>,
});

function cartReducer(state: TCartItem[], action: TReducerAction): TCartItem[] {
  switch (action.type) {
    case EActionTypes.addToCart: {
      const itemIndex: number = searchCartByItemName(state, action);
      const updatedCart: TCartItem[] = addToCart(itemIndex, state, action);
      saveCartToDB(updatedCart).then((result) =>
        result ? null : alert("Your Cart Not Saved.")
      );
      return updatedCart;
    }
    case EActionTypes.removeFromCart: {
      const itemIndex: number = searchCartByItemName(state, action);
      const updatedCart: TCartItem[] = removeFromCart(itemIndex, state);
      saveCartToDB(updatedCart).then((result) =>
        result ? null : alert("Your Cart Not Saved.")
      );
      return updatedCart;
    }
    case EActionTypes.clearCart: {
      const updatedCart: TCartItem[] = clearCart(state);
      saveCartToDB(updatedCart).then((result) =>
        result ? null : alert("Your Cart Not Saved.")
      );
      return updatedCart;
    }
    default: {
      return [];
    }
  }
}
export function CartContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const initialValue: TCartItem[] = [];
  const [cart, cartDispatch] = useReducer(cartReducer, initialValue);

  useEffect(() => {
    console.log(cart);
  }, [cart]);
  return (
    <CartContext.Provider
      value={{
        cartState: cart,
        cartDispatch: cartDispatch,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
