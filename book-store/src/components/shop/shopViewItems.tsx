"use client";
import EOrderBy from "@/enums/orderByEnum";
import { useEffect, useState } from "react";
import Paginator from "./paginator";
import { useRouter, useSearchParams } from "next/navigation";
import replacePageWith from "@/util/replacePageWith";
import ShopProducts from "./shopProducts";
import getPaginatedProducts from "@/util/getPaginatedProducts";
import TProduct from "@/types/product";
import sortProducts from "@/util/sortProducts";

export default function ShopViewItems({ orderBy }: { orderBy: EOrderBy }) {
  const [currentPage, setCurrentPage] = useState<string>("1");
  const [products, setProducts] = useState<TProduct[]>([]);
  const searchParams = useSearchParams();
  const page = searchParams.get("page");
  const category = searchParams.get("category");
  let currentUrl: string;

  const router = useRouter();
  useEffect(() => {
    currentUrl = window.location.href;
    const replacedUrl = replacePageWith(parseInt(currentPage), currentUrl);
    router.push(replacedUrl);
    getPaginatedProducts(replacedUrl).then((paginatedProducts: TProduct[]) =>
      setProducts(paginatedProducts)
    );
  }, [page, category, currentPage]);
  useEffect(() => {
    if (products.length > 0) {
      sortProducts(products, orderBy, setProducts);
    }
  }, [orderBy, products.length]);
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
