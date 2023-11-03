import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <main className={homePageStyles.homePageMainFrame}>
      <Navbar />
    </main>
  );
}

const homePageStyles = {
  homePageMainFrame: "w-full h-full",
};
