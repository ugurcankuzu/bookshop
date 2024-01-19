"use client";
import EActionTypes from "@/enums/cartContextActionEnum";
import TCartItem from "@/types/cartItem";
import TReducerAction from "@/types/ReducerAction";
import {
  Dispatch,
  createContext,
  useContext,
  useEffect,
  useReducer,
} from "react";
import TCartContext from "@/types/cartContext";
import searchCartByItemName from "@/util/searchCartByItemName";
import addToCart from "@/util/addToCart";
import removeFromCart from "@/util/removeFromCart";
import clearCart from "@/util/clearCart";
import saveCartToDB from "@/util/saveCartToDB";
import { UserContext } from "./userContext";
import getCart from "@/util/getCart";
import removeCompletelyFromCart from "@/util/removeCompletelyFromCart";
import {
  NotificationContext,
  useGlobalNotification,
} from "./notificationContext";
import ENotificationAction from "@/enums/notificationContextAction";

export const CartContext = createContext<TCartContext>({
  cartState: [] as TCartItem[],
  cartDispatch: {} as Dispatch<TReducerAction>,
});

function useReducerFunc(state: TCartItem[], action: TReducerAction): TCartItem[] {
  const { notificationDispatch } = useGlobalNotification();
  switch (action.type) {
    case EActionTypes.setCart: {
      return action.payload as TCartItem[];
    }
    case EActionTypes.addToCart: {
      const itemIndex: number = searchCartByItemName(state, action);
      const updatedCart: TCartItem[] = addToCart(itemIndex, state, action);
      saveCartToDB(updatedCart).then((result) =>
        result
          ? notificationDispatch({
              type: ENotificationAction.savedSuccess,
            })
          : notificationDispatch({
              type: ENotificationAction.savedNotSuccess,
            })
      );
      return updatedCart;
    }
    case EActionTypes.removeFromCart: {
      const itemIndex: number = searchCartByItemName(state, action);
      const updatedCart: TCartItem[] = removeFromCart(itemIndex, state);
      saveCartToDB(updatedCart).then((result) =>
        result
          ? notificationDispatch({
              type: ENotificationAction.savedSuccess,
            })
          : notificationDispatch({
              type: ENotificationAction.savedNotSuccess,
            })
      );
      return updatedCart;
    }
    case EActionTypes.removeCompletely: {
      const item: TCartItem = action.payload as TCartItem;
      const updatedCart: TCartItem[] = removeCompletelyFromCart(item, state);
      saveCartToDB(updatedCart).then((result) =>
        result
          ? notificationDispatch({
              type: ENotificationAction.savedSuccess,
            })
          : notificationDispatch({
              type: ENotificationAction.savedNotSuccess,
            })
      );
      return updatedCart;
    }
    case EActionTypes.clearCart: {
      const updatedCart: TCartItem[] = clearCart(state);
      saveCartToDB(updatedCart).then((result) =>
        result
          ? notificationDispatch({
              type: ENotificationAction.savedSuccess,
            })
          : notificationDispatch({
              type: ENotificationAction.savedNotSuccess,
            })
      );
      return updatedCart;
    }
    default: {
      return state;
    }
  }
}
export function CartContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const initialValue: TCartItem[] = [];
  const [cart, cartDispatch] = useReducer(useReducerFunc, initialValue);
  const userctx = useContext(UserContext);
  useEffect(() => {
    if (userctx.userState) {
      getCart().then((cart) =>
        cartDispatch({ type: EActionTypes.setCart, payload: cart })
      );
    }
  }, [userctx.userState]);

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
