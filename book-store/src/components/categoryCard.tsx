import TCategory from "@/types/category";
import Route from "@/types/route";
import getLinkByLabel from "@/util/getLinkByLabel";
import Link from "next/link";
import { motion } from "framer-motion";
import bgVertical from "../../public/lib-portrait.jpeg";
interface ICategoryCard {
  category: TCategory;
  indexNumber: number;
  horizontalLayout?: boolean;
}
export default function CategoryCard({
  category,
  indexNumber,
  horizontalLayout,
}: ICategoryCard) {
  const ShopRoute: Route = getLinkByLabel("Shop", undefined, false) as Route;
  return (
    <>
      {!horizontalLayout && (
        <Link
          href={
            ShopRoute.path + "?category=" + encodeURI(category.categoryName)
          }
          style={{
            backgroundImage: `url(${bgVertical.src})`,
          }}
          className={
            categoryCardStyle.gridLayout.categoryCard +
            (indexNumber == 2 ? categoryCardStyle.gridLayout.bigPicture : null)
          }
        >
          <span className={categoryCardStyle.gridLayout.categoryName}>
            {category.categoryName}
          </span>
        </Link>
      )}
      {horizontalLayout && (
        <Link
          href={
            ShopRoute.path + "?category=" + encodeURI(category.categoryName)
          }
          className={categoryCardStyle.horizontalLayout.categoryCard}
        >
          {category.categoryName}
        </Link>
      )}
    </>
  );
}

const categoryCardStyle = {
  gridLayout: {
    categoryCard:
      "w-full border border-black bg-center bg-fixed bg-auto backdrop-opacity-10 shadow-xl relative after:content-[''] after:w-0 after:h-1/2 hover:after:bg-pearl after:absolute after:left-0 after:top-0 before:content-[''] before:w-0 before:h-1/2 before:absolute before:bottom-0 before:right-0 hover:before:bg-pearl before:transition-all after:transition-all after:duration-[1s] before:duration-[1s] before:ease-in-out hover:after:w-full hover:before:w-full ",
    bigPicture: " col-span-2 row-span-2 sm:order-first",
    categoryName:
      "w-full h-full flex justify-center items-center bg-coal/90 text-3xl text-pearl font-bold absolute z-[100]",
  },
  horizontalLayout: {
    categoryCard: "bg-coal/90 text-pearl px-2 py-1 rounded shadow snap-center",
  },
};

/*
categoryCard:
    "w-full h-full bg-main-orange text-pearl flex justify-center items-center font-bold tracking-wider rounded-md shadow-xl",
*/
