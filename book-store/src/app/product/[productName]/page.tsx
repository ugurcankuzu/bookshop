import ProductDisplay from "@/components/ProductPage/productDisplay";

export default function ProductPage({
  params,
}: {
  params: { productName: string };
}) {
  return (
    <main className={productPageStyles.mainFrame}>
      <ProductDisplay />
    </main>
  );
}

const productPageStyles = {
  mainFrame: "w-full h-full",
};
