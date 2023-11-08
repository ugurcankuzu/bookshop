"use client";

import TCategory from "@/types/category";
import { useEffect, useState } from "react";
import getAllCategories from "@/util/getAllCategories";
import CategoryCard from "../categoryCard";

export default function Categories() {
  const [categories, setCategories] = useState<Array<TCategory>>([]);
  useEffect(() => {
    getAllCategories().then((categories) => setCategories(categories));
  }, []);
  return (
    <section className={categoriesStyle.categoriesSection}>
      <div className={categoriesStyle.categoryContentWrapper}>
        <div className={categoriesStyle.categoryContent}>
          <p className={categoriesStyle.categoryTitle}>
            Delve into Diverse Genres and Discover New Favorites
          </p>
        </div>
        <div
          className={
            categoriesStyle.categoryCardContent +
            categoriesStyle.smoothTransition
          }
        >
          {categories.map((category, index) => (
            <CategoryCard category={category} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

const categoriesStyle = {
  categoriesSection: "w-full flex flex-col justify-start items-center p-2 my-4",
  categoryContentWrapper:
    "w-full flex flex-col gap-8 lg:w-4/5 md:flex-row md:p-4",
  categoryTitle:
    "text-coal/90 font-extrabold tracking-wider text-start text-2xl md:text-start md:text-3xl md:leading-relaxed",
  categoryContent: "flex justify-start items-center",
  categoryCardContent:
    "w-full h-60 relative grid grid-cols-2 grid-rows-2 justify-items-center align-center gap-4 md:h-72 lg:h-96",
  smoothTransition:
    " before:absolute before:content[''] before:z-100 before:bg-gradient-to-b from-pearl to-transparent before:top-0 before:w-full before:h-[50px] md:before:-left-[10px] md:before:h-full md:before:w-[100px] md:before:bg-gradient-to-r before:pointer-events-none",
};
