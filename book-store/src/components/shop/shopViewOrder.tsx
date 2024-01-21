"use client";

import EOrderBy from "@/enums/orderByEnum";
import { ChangeEvent, Dispatch, SetStateAction } from "react";

interface IShopViewOrder {
  orderBy: EOrderBy;
  setOrderBy: Dispatch<SetStateAction<EOrderBy>>;
}
export default function ShopViewOrder({ orderBy, setOrderBy }: IShopViewOrder) {
  const handleSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    setOrderBy(event.target.value as EOrderBy);
  };
  return (
    <section className={ShopViewOrderStyles.shopViewOrderFrame}>
      <div className={ShopViewOrderStyles.shopViewOrderWrapper}>
        <p>Order By:</p>

        <select
          defaultValue={orderBy}
          onChange={handleSelect}
          className={ShopViewOrderStyles.select}
        >
          <option value={EOrderBy.priceHighToLow}>Price High-Low</option>
          <option value={EOrderBy.priceLowToHigh}>Price Low-High</option>
          <option value={EOrderBy.sellCountDescended}>Sales High-Low</option>
          <option value={EOrderBy.sellCountAscended}>Sales Low-High</option>
        </select>
      </div>
    </section>
  );
}

const ShopViewOrderStyles = {
  shopViewOrderFrame: "w-full flex justify-center items-center",
  shopViewOrderWrapper:
    "w-full flex justify-between items-center bg-smoke/10 p-2 xl:w-4/5 2xl:w-3/5",
  select: "selectArrowDown rounded bg-coal/90 text-pearl px-2 py-1",
};
