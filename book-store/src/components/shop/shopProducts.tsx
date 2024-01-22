import TProduct from "@/types/product";
import ProductCard from "../productCard";

export default function ShopProducts({ products }: { products: TProduct[] }) {
  return (
    <section className={ShopProductsStyles.productsWrapper}>
      {products &&
        products.map((product, index) => (
          <ProductCard key={index} item={product} />
        ))}
    </section>
  );
}

const ShopProductsStyles = {
  productsWrapper:
    "w-full h-full flex flex-col gap-2 sm:grid sm:auto-cols-max sm:auto-rows-max  sm:grid-cols-[repeat(auto-fill,300px)] sm:justify-start sm:content-start xl:w-4/5 2xl:w-3/5",
};
