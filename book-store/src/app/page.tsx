import Footer from "@/components/footer";
import Categories from "@/components/home/categories";
import HomePageProducts from "@/components/home/homePageProducts";
import ProductsBestSeller from "@/components/home/productsBestSeller";
import CampaignSlider from "@/components/home/slider";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <main className={homePageStyles.homePageMainFrame}>
      <CampaignSlider />
      <Categories />
      <HomePageProducts>
        <ProductsBestSeller />
      </HomePageProducts>
    </main>
  );
}

const homePageStyles = {
  homePageMainFrame: "flex-1 bg-pearl",
};
