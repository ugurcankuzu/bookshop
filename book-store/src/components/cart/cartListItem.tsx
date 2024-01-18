import TCartItem from "@/types/cartItem";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ChangeEvent, useContext, MouseEvent } from "react";
import { CartContext } from "../context/cartContext";
import EActionTypes from "@/enums/cartContextActionEnum";

export default function CartListItem({ product }: { product: TCartItem }) {
  const cartCtx = useContext(CartContext);
  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    cartCtx.cartDispatch({
      type: EActionTypes.addToCart,
      payload: { ...product, amount: Number.parseInt(event.target.value, 10) || 1 },
    });
  };
  const handleRemove = (event: MouseEvent<HTMLButtonElement>) => {
    cartCtx.cartDispatch({
      type: EActionTypes.removeCompletely,
      payload: product,
    });
  };
  return (
    <div className={CartListItemStyles.wrapper}>
      <div className={CartListItemStyles.productMetaInfo}>
        <p className={CartListItemStyles.productName}>{product.productName}</p>
        <p className={CartListItemStyles.author}>{product.author}</p>
      </div>
      <div className={CartListItemStyles.cartItemController}>
        <p className={CartListItemStyles.price}>
          {product.price * product.amount} TL
        </p>
        <input
          className={CartListItemStyles.amountInput}
          type="number"
          name="amount"
          min={1}
          max={99}
          defaultValue={product.amount}
          onChange={handleInput}
        />
        <button
          onClick={handleRemove}
          className={CartListItemStyles.deleteButton}
        >
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </div>
  );
}

const CartListItemStyles = {
  wrapper:
    "w-full h-[50px] flex justify-between items-center bg-smoke/10 px-2 py-1 shadow rounded",
  productMetaInfo: "w-1/2 line-clamp-2",
  productName: "font-bold text-lg",
  author: "text-sm font-light italic text-coal/40",
  cartItemController: "w-1/2 flex justify-end items-center gap-2",
  amountInput: "border rounded text-center",
  deleteButton: "bg-coal/90 text-pearl rounded w-8 h-8",
  price: "font-bold",
};
