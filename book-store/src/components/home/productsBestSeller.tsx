"use client";

import TProduct from "@/types/product";
import getBestSeller from "@/util/getBestSeller";
import { useEffect, useState } from "react";
import ProductCard from "../productCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
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
    "relative w-full flex flex-col items-start justify-center gap-4 xl:w-4/5 2xl:w-3/5 p-2 sm:after:content-[''] sm:after:absolute sm:after:w-[100px] sm:after:h-full sm:after:z-100 sm:after:right-0 sm:after:bg-gradient-to-l from-pearl to-transparent",
  productsBestSellerTitle: "text-3xl font-extrabold text-coal/90",
  productsLine:
    " w-full h-fit flex flex-col gap-4 sm:flex-row sm:snap-x sm:overflow-scroll",
};
