import Categories from "../home/categories";
import ShopViewContent from "./shopViewContent";

export default function ShopView() {
  return (
    <section className={ShopViewStyles.shopViewWrapper}>
      {/**Category horizontal showcase'll be here */}
      <Categories horizontalLayout={true} />
      <ShopViewContent />
      {/**Main Content */}
    </section>
  );
}

const ShopViewStyles = {
  shopViewWrapper: "flex-1 flex flex-col w-full gap-2",
  shopViewContentWrapper: "",
};
