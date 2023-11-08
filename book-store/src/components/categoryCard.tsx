import TCategory from "@/types/category";
import Link from "next/link";

export default function CategoryCard({ category }: { category: TCategory }) {
  return (
    <Link href={""} className={categoryCardStyle.categoryCard}>
      {category.categoryName}
    </Link>
  );
}

const categoryCardStyle = {
  categoryCard: "w-full h-full bg-main-orange text-pearl flex justify-center items-center font-bold tracking-wider rounded-md shadow-xl",
};
