"use client";

import TProduct from "@/types/product";
import getBestSeller from "@/util/getBestSeller";
import { useEffect, useState } from "react";
import ProductCard from "../productCard";

export default function ProductsBestSeller() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getBestSeller("desc").then((productList) => setProducts(productList));
  }, []);
  return (
    <div className={productsBestSellerStyle.productsBestSellerWraper}>
      <p className={productsBestSellerStyle.productsBestSellerTitle}>
        Best Seller
      </p>
      <div className={productsBestSellerStyle.productsLine}>
        {products.length > 0 &&
          products.map((item: TProduct, index: number) => (
            <ProductCard key={index} item={item} />
          ))}
      </div>
    </div>
  );
}

const productsBestSellerStyle = {
  productsBestSellerWraper:
    "w-full flex flex-col items-start justify-center gap-4 lg:w-4/5 ",
  productsBestSellerTitle: "text-[36px] font-bold",
  productsLine:
    "w-full flex gap-4 justify-center items-center md:justify-start ",
};
