"use client";
import EOrderBy from "@/enums/orderByEnum";
import { useEffect, useState } from "react";
import Paginator from "./paginator";
import { useRouter, useSearchParams } from "next/navigation";
import replacePageWith from "@/util/replacePageWith";
import ShopProducts from "./shopProducts";
import getPaginatedProducts from "@/util/getPaginatedProducts";
import TProduct from "@/types/product";

export default function ShopViewItems({ orderBy }: { orderBy: EOrderBy }) {
  const [currentPage, setCurrentPage] = useState<string>("1");
  const [products, setProducts] = useState<TProduct[]>([]);
  const searchParams = useSearchParams();
  const page = searchParams.get("page");
  const category = searchParams.get("category");
  let currentUrl: string;
  useEffect(() => {}, []);
  const router = useRouter();
  useEffect(() => {
    currentUrl = window.location.href;

    router.push(replacePageWith(parseInt(currentPage), currentUrl));
    getPaginatedProducts(currentUrl).then((paginatedProducts: TProduct[]) =>
      setProducts(paginatedProducts)
    );
  }, [page, category]);
  return (
    <div className={ShopViewItemsStyles.itemsWrapper}>
      <ShopProducts products={products} />
      <Paginator currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  );
}

const ShopViewItemsStyles = {
  itemsWrapper: "flex-1 flex flex-col items-center",
};
