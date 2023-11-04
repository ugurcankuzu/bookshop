"use client";
import Route from "@/types/route";
import getLinkByLabel from "@/util/getLinkByLabel";
import getLinksByLabels from "@/util/getLinksByLabels";
import getLinksByLabel from "@/util/getLinksByLabels";
import Link from "next/link";
import { useEffect, useState } from "react";

{
  /**SAĞLIKLI KAFAYLA YARIN LİNK ROUTE İŞİNE BİR DAHA BAK. BU METHODLARA GEREK OLMAYABİLİR. */
}
export default function Navbar() {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
  const handleResize = function (event: Event) {
    setWindowWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);

  }, []);
  return (
    <section className={navbarComponentStyle.navbarSectionFrame}>
      <div className={navbarComponentStyle.navbarMain}>
        <Link href={""}>
          <h1 className={navbarComponentStyle.logo}>
            {windowWidth <= 425 ? "BS" : "BookShop"}
          </h1>
        </Link>
        {/* TODO: Searchbar Component */}
        {getLinkByLabel("Signup", navbarComponentStyle.signup)}
      </div>
      <nav className={navbarComponentStyle.navbarRoutes}>
        {getLinksByLabels(["Home", "Shop"], navbarComponentStyle.navItem)}
      </nav>
    </section>
  );
}

const navbarComponentStyle = {
  navbarSectionFrame: "w-full flex flex-col items-center justify-start gap-4 ",
  navbarMain: "w-full flex justify-between items-center px-8 md:w-4/5",
  navbarRoutes: "w-full flex justify-center items-center gap-8 ",
  logo: "text-[36px] text-main-orange font-bold",
  navItem: "text-[18px] text-main-orange font-semibold",
  signup: "bg-main-orange rounded-md px-2 py-1 text-white",
};
