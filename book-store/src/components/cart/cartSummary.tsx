import TCartItem from "@/types/cartItem";
import { useRouter } from "next/navigation";
import { useEffect, useState, MouseEvent } from "react";

export default function CartSummary({ cart }: { cart: TCartItem[] }) {
  const [price, setPrice] = useState<number>(0);
  const router = useRouter();
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    router.push("/order");
  };
  useEffect(() => {
    if (cart.length > 0) {
      let total = 0;
      cart.forEach((item) => (total += item.price * item.amount));
      setPrice(total);
    } else {
      setPrice(0);
    }
  }, [cart]);
  return (
    <aside className={CartSummaryStyles.summaryFrame}>
      <div className={CartSummaryStyles.summaryWrapper}>
        <p className={CartSummaryStyles.summaryTitle}>Summary</p>
        <div className={CartSummaryStyles.cartTotalInfo}>
          <div className={CartSummaryStyles.priceTotal}>
            <p>Total Price:</p>
            <p>{price} TL</p>
          </div>
          <button
            onClick={handleClick}
            className={CartSummaryStyles.orderNow}
            disabled={cart.length === 0}
          >
            Order Now
          </button>
        </div>
      </div>
    </aside>
  );
}

const CartSummaryStyles = {
  summaryFrame: "w-full h-fit bg-smoke/10 p-2 rounded shadow flex md:w-1/4",
  summaryWrapper: "flex-1 flex flex-col",
  cartTotalInfo: "flex flex-col gap-2",
  summaryTitle:
    "font-bold text-3xl relative after:content-[''] after:w-full after:h-[1px] after:bg-black after:bottom-0 after:left-0 after:mt-2 after:block",
  priceTotal: "font-bold w-full flex justify-between py-2",
  orderNow:
    "w-full p-2 bg-coal/90 text-pearl rounded disabled:bg-coal/40 transition-bg duration-[.5s]",
};
