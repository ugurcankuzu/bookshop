import CampaignSlider from "@/components/home/slider";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <main className={homePageStyles.homePageMainFrame}>
      <Navbar />
      <CampaignSlider />
    </main>
  );
}

const homePageStyles = {
  homePageMainFrame: "w-full h-full",
};
