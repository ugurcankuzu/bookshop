import EOrderBy from "@/enums/orderByEnum";
import { useEffect, useState } from "react";
import Paginator from "./paginator";
import { useRouter } from "next/navigation";
import replacePageWith from "@/util/replacePageWith";
import ShopProducts from "./shopProducts";
import getPaginatedProducts from "@/util/getPaginatedProducts";
import TProduct from "@/types/product";

export default function ShopViewItems({ orderBy }: { orderBy: EOrderBy }) {
  const [currentPage, setCurrentPage] = useState<string>("1");
  const [products, setProducts] = useState<TProduct[]>([]);
  const currentUrl = window.location.href;
  const router = useRouter();
  useEffect(() => {
    //Fetch atılıp itemler alınacak
  }, [orderBy]);
  useEffect(() => {
    router.push(replacePageWith(parseInt(currentPage), currentUrl));
    getPaginatedProducts(currentPage).then((paginatedProducts: TProduct[]) =>
      setProducts(paginatedProducts)
    );
  }, [currentPage]);
  return (
    <div className={ShopViewItemsStyles.itemsWrapper}>
      <ShopProducts products={products}/>
      <Paginator currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  );
}

const ShopViewItemsStyles = {
  itemsWrapper: "flex-1 flex flex-col items-center",
};
