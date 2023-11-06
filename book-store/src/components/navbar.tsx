"use client";
import getLinkByLabel from "@/util/getLinkByLabel";
import getLinksByLabels from "@/util/getLinksByLabels";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
export default function Navbar() {
  const [windowWidth, setWindowWidth] = useState<number>(0);

  const handleResize = function (event: Event) {
    setWindowWidth(window.innerWidth);
  };

  const cleanupEffect = () => {
    window.removeEventListener("resize", handleResize);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return cleanupEffect;
  }, []);

  return (
    <motion.section
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={navbarComponentStyle.navbarSectionFrame}
    >
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
    </motion.section>
  );
}

const navbarComponentStyle = {
  navbarSectionFrame: "w-full flex flex-col items-center justify-start gap-4 ",
  navbarMain: "w-full flex justify-between items-center px-8 xl:w-4/5",
  navbarRoutes: "w-full flex justify-center items-center gap-8 ",
  logo: "text-[36px] text-main-orange font-bold",
  navItem: "text-[18px] text-main-orange font-semibold",
  signup: "bg-main-orange rounded-md px-2 py-1 text-white",
};
