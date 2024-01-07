"use client";
import TProduct from "@/types/product";
import { ChangeEvent, useState, MouseEvent, useContext } from "react";
import { CartContext } from "../context/cartContext";
import EActionTypes from "@/enums/cartContextActionEnum";
import TCartItem from "@/types/cartItem";

export default function ProductAction({ product }: { product: TProduct }) {
  const [amount, setAmount] = useState(1);
  const cartctx = useContext(CartContext);
  const handleChange = function (event: ChangeEvent<HTMLInputElement>) {
    setAmount(Number.parseInt(event.target.value));
  };
  const handleAdd = function (event: MouseEvent<HTMLButtonElement>) {
    event.currentTarget.disabled = true;
    cartctx.cartDispatch({
      type: EActionTypes.addToCart,
      payload: { ...product, amount: amount } as TCartItem,
    });
    event.currentTarget.disabled = false;
  };
  return (
    <div className={productActionStyles.actionWrapper}>
      <button onClick={handleAdd} className={productActionStyles.addButton}>
        Add to Cart
      </button>
      <input
        className={productActionStyles.input}
        type="number"
        name=""
        id=""
        defaultValue={1}
        max={99}
        min={0}
        onChange={handleChange}
      />
    </div>
  );
}

const productActionStyles = {
  actionWrapper: "w-2/3 h-[30px] flex shadow-md absolute -bottom-[15px]",
  addButton: "w-full bg-coal/90 text-pearl rounded-l",
  input: "flex-1 text-center border border-coal/90 rounded-r",
};
