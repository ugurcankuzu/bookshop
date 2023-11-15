import TCategory from "@/types/category";
import Link from "next/link";
import bgVertical from "../../public/lib-portrait.jpeg";
import bgHorizontal from "../../public/lib-landscape.jpeg";
interface ICategoryCard {
  category: TCategory;
  indexNumber: number;
}
export default function CategoryCard({ category, indexNumber }: ICategoryCard) {
  return (
    <Link
      href={""}
      style={{
        backgroundImage: `url(${bgVertical.src})`,
      }}
      className={
        categoryCardStyle.categoryCard +
        (indexNumber == 2 ? categoryCardStyle.bigPicture : null)
      }
    >
      <span className={categoryCardStyle.categoryName}>{category.categoryName}</span>
    </Link>
  );
}

const categoryCardStyle = {
  categoryCard:
    "w-full border border-black bg-center bg-fixed bg-auto backdrop-opacity-10 shadow-xl",
  bigPicture: " col-span-2 row-span-2 sm:order-first",
  categoryName: "w-full h-full flex justify-center items-center bg-coal/90 text-3xl text-pearl font-bold"
};

/*
categoryCard:
    "w-full h-full bg-main-orange text-pearl flex justify-center items-center font-bold tracking-wider rounded-md shadow-xl",
*/
