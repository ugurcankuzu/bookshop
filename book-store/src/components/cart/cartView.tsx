"use client";

import { useContext } from "react";
import { CartContext } from "../context/cartContext";
import CartListItem from "./cartListItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import CartSummary from "./cartSummary";

export default function CartView() {
  const cartCtx = useContext(CartContext);
  return (
    <section className={CartViewStyles.cartFrame}>
      <div className={CartViewStyles.cartWrapper}>
        <div className={CartViewStyles.cartContent}>
          <h2 className={CartViewStyles.cartHeader}>Your Cart</h2>
          <div className={CartViewStyles.cart}>
            {cartCtx.cartState.length > 0 &&
              cartCtx.cartState.map((cartItem, index) => (
                <CartListItem key={index} product={cartItem} />
              ))}
            {cartCtx.cartState.length === 0 && (
              <div className={CartViewStyles.empty}>
                <FontAwesomeIcon
                  icon={faShoppingBasket}
                  className={CartViewStyles.emptyIcon}
                />
                <p className={CartViewStyles.emptyText}>
                  It looks like your cart is empty.
                </p>
              </div>
            )}
          </div>
        </div>
        <CartSummary cart={cartCtx.cartState} />
      </div>
    </section>
  );
}

const CartViewStyles = {
  cartFrame: "flex-1 p-2 flex justify-center",
  cartWrapper:
    "w-full h-full flex flex-col gap-4 lg:w-4/5 2xl:w-3/5 md:flex-row",
  cartContent: "flex flex-col flex-1",
  cartHeader:
    "font-bold text-3xl relative after:content-[''] after:h-[1px] after:bottom-0 after:left-0 after:bg-slate-500/10 after:block after:mt-2",
  cart: "flex flex-1  flex-col gap-2 overflow-y-scroll",
  empty: "flex-1 flex flex-col items-center justify-center gap-2",
  emptyIcon: "text-3xl text-coal/50",
  emptyText: "text-lg text-coal/50",
};
