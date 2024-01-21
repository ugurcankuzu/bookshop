"use client";

import TCategory from "@/types/category";
import { useEffect, useState } from "react";
import getAllCategories from "@/util/getAllCategories";
import CategoryCard from "../categoryCard";

export default function Categories({
  horizontalLayout,
}: {
  horizontalLayout?: boolean;
}) {
  const [categories, setCategories] = useState<Array<TCategory>>([]);
  const styleObj = horizontalLayout
    ? categoriesStyle.horizontalLayout
    : categoriesStyle.gridLayout;
  useEffect(() => {
    getAllCategories().then((categories) => setCategories(categories));
  }, []);
  return (
    <section className={styleObj.categoriesFrame}>
      <div className={styleObj.categoriesWrapper}>
        <div className={styleObj.categoriesTitleWrapper}>
          <p className={styleObj.categoriesTitle}>Categories</p>
        </div>
        <div className={styleObj.categoriesLayoutWrapper}>
          {categories.map((category, index) => (
            <CategoryCard
              key={index}
              category={category}
              indexNumber={index}
              horizontalLayout={horizontalLayout}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const categoriesStyle = {
  gridLayout: {
    categoriesFrame: "w-full flex flex-col justify-center items-center p-2",
    categoriesWrapper: "w-full flex flex-col gap-4 xl:w-4/5 2xl:w-3/5",
    categoriesTitleWrapper: "w-full h-1/4",
    categoriesTitle: "text-3xl font-extrabold text-coal/90",
    categoriesLayoutWrapper:
      "w-full h-[450px] grid grid-rows-3 grid-cols-2 sm:grid-cols-3 sm:grid-rows-2 gap-2 justify-items-center align-center",
  },
  horizontalLayout: {
    categoriesFrame: "w-full flex justify-center items-center p-2",
    categoriesWrapper: "w-full flex flex-col gap-2 xl:w-4/5 2xl:w-3/5",
    categoriesTitleWrapper: "w-full h-1/4",
    categoriesTitle: "text-3xl font-bold text-coal/90",
    categoriesLayoutWrapper: "w-full flex overflow-auto gap-2 snap-x",
  },
};

/**
 * 
 <section className={styleObj.categoriesSection}>
      <div className={styleObj.categoryContentWrapper}>
        <div className={styleObj.categoryContent}>
          <p className={styleObj.categoryTitle}>
            Delve into Diverse Genres and Discover New Favorites
          </p>
        </div>
        <div
          className={
            styleObj.categoryCardContent +
            styleObj.smoothTransition
          }
        >
          {categories.map((category, index) => (
            <CategoryCard category={category} key={index} />
          ))}
        </div>
      </div>
    </section>
 */
