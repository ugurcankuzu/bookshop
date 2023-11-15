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
    <section className={categoriesStyle.categoriesFrame}>
      <div className={categoriesStyle.categoriesWrapper}>
        <div className={categoriesStyle.categoriesTitleWrapper}>
          <p className={categoriesStyle.categoriesTitle}>Categories</p>
        </div>
        <div className={categoriesStyle.categoriesLayoutWrapper}>
          {categories.map((category, index) => (
            <CategoryCard key={index} category={category} indexNumber={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

const categoriesStyle = {
  categoriesFrame: "w-full flex flex-col justify-center items-center p-2",
  categoriesWrapper: "w-full flex flex-col gap-4 xl:w-4/5 2xl:w-3/5",
  categoriesTitleWrapper: "w-full h-1/4",
  categoriesTitle: "text-3xl font-extrabold text-coal/90",
  categoriesLayoutWrapper:
    "w-full h-[450px] grid grid-rows-3 grid-cols-2 sm:grid-cols-3 sm:grid-rows-2 gap-2 justify-items-center align-center",
};

/**
 * 
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
 */
