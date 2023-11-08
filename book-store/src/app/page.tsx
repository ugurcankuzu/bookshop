import Footer from "@/components/footer";
import Categories from "@/components/home/categories";
import HomePageProducts from "@/components/home/homePageProducts";
import ProductsBestSeller from "@/components/home/productsBestSeller";
import CampaignSlider from "@/components/home/slider";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <main className={homePageStyles.homePageMainFrame}>
      <Navbar />
      <CampaignSlider />
      <HomePageProducts>
        <ProductsBestSeller />
      </HomePageProducts>
      <Categories />
      <Footer />
    </main>
  );
}

const homePageStyles = {
  homePageMainFrame: "w-full h-full",
};
