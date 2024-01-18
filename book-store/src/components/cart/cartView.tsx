"use client";

import { useContext } from "react";
import { CartContext } from "../context/cartContext";
import CartListItem from "./cartListItem";

export default function CartView() {
  const cartCtx = useContext(CartContext);
  return (
    <section className={CartViewStyles.cartFrame}>
      <div className={CartViewStyles.cartWrapper}>
        <h2 className={CartViewStyles.cartHeader}>Your Cart</h2>
        <div className={CartViewStyles.cart}>
          {cartCtx.cartState.length > 0 &&
            cartCtx.cartState.map((cartItem, index) => (
              <CartListItem key={index} product={cartItem} />
            ))}
        </div>
      </div>
      <div></div>
    </section>
  );
}

const CartViewStyles = {
  cartFrame: "flex-1",
  cartWrapper: "w-full h-full flex flex-col gap-2 p-2",
  cartHeader:
    "font-bold text-3xl relative after:content-[''] after:h-[1px] after:bottom-0 after:left-0 after:bg-slate-500/10 after:block after:mt-2",
  cart: "flex flex-col gap-2",
};
