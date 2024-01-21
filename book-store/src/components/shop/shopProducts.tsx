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
    "w-full h-full flex flex-col gap-2 sm:grid sm:grid-cols-2 sm:auto-rows-max  sm:place-items-center lg:grid-cols-3 xl:grid-cols-auto xl:auto-cols-fr 2xl:grid-cols-5 xl:w-4/5 2xl:w-3/5",
};
