import CartView from "@/components/cart/cartView";
import { CartContext } from "@/components/context/cartContext";
import { useContext } from "react";

export default function CartPage() {
  return (
    <main className={CartPageStyles.mainFrame}>
      <CartView/>
    </main>
  );
}

const CartPageStyles = {
  mainFrame: "flex-1 flex",
};
