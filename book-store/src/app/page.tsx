import HomePageProducts from "@/components/home/homePageProducts";
import CampaignSlider from "@/components/home/slider";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <main className={homePageStyles.homePageMainFrame}>
      <Navbar />
      <CampaignSlider />
      <HomePageProducts>
        
      </HomePageProducts>
    </main>
  );
}

const homePageStyles = {
  homePageMainFrame: "w-full h-full",
};
