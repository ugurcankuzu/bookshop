import ShopView from "@/components/shop/shopView";

export default function ShopPage() {
  return (
    <main className={ShopPageStyles.shopPageFrame}>
      <ShopView />
    </main>
  );
}

const ShopPageStyles = {
  shopPageFrame: "flex-1 flex",
};
