"use client";

import EOrderBy from "@/enums/orderByEnum";
import { useEffect, useState } from "react";
import ShopViewItems from "./shopViewItems";
import ShopViewOrder from "./shopViewOrder";

export default function ShopViewContent() {
  const [orderBy, setOrderBy] = useState<EOrderBy>(EOrderBy.sellCountDescended);
  useEffect(() => {}, []);
  return (
    <div className={ShopViewContentStyles.shopViewContentWrapper}>
      {/**Filtering Component */}
      <ShopViewOrder orderBy={orderBy} setOrderBy={setOrderBy} />
      {/**Results */}
      <ShopViewItems orderBy={orderBy} />
    </div>
  );
}

const ShopViewContentStyles = {
  shopViewContentWrapper: "w-full flex-1 flex flex-col gap-2",
};
