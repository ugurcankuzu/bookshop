"use client";
import ProductDisplay from "@/components/ProductPage/productDisplay";
import HomePageProducts from "@/components/home/homePageProducts";
import ProductsBestSeller from "@/components/home/productsBestSeller";
import TProduct from "@/types/product";
import getProductByName from "@/util/getProductByName";
import { useEffect, useState } from "react";

export default function ProductPage({
  params,
}: {
  params: { productName: string };
}) {
  const [productInfo, setProductInfo] = useState<TProduct | null>(null);
  useEffect(() => {
    getProductByName(params.productName).then((productInfo) =>
      setProductInfo(productInfo)
    );
  }, []);
  return (
    <main className={productPageStyles.mainFrame}>
      {productInfo && (
        <>
          <ProductDisplay productInfo={productInfo} />
          <HomePageProducts>
            <ProductsBestSeller />
          </HomePageProducts>
        </>
      )}
    </main>
  );
}

const productPageStyles = {
  mainFrame: "w-full h-full",
};
