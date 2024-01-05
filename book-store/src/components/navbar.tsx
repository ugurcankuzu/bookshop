"use client";
import getLinkByLabel from "@/util/getLinkByLabel";
import { motion } from "framer-motion";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import SearchBar from "./searchBar";
import searchProduct from "@/util/searchProduct";
import { UserContext } from "./context/userContext";
export default function Navbar() {
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const [searchText, setSearchText] = useState<string>("");

  const handleResize = function (event: Event) {
    setWindowWidth(window.innerWidth);
  };
  const userctx = useContext(UserContext);
  useEffect(() => {
    setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      searchProduct(searchText);
    }, 1000);

    return () => clearTimeout(timer);
  }, [searchText]);
  useEffect(()=>{
    if(userctx.userState){
      console.log("logged in")
    }else{
      console.log("Not logged in")
    }
  },[userctx.userState])
  return (
    <motion.section
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={navbarComponentStyle.navbarSectionFrame}
    >
      <div className={navbarComponentStyle.navbarMain}>
        <Link href={""}>
          <h1 className={navbarComponentStyle.logo}>BS</h1>
        </Link>
        {windowWidth >= 640 ? (
          <SearchBar
            initialSearchText={searchText}
            setSearchText={setSearchText}
          />
        ) : null}

        <nav className={navbarComponentStyle.navbarRoutes}>
          {getLinkByLabel("Shop", navbarComponentStyle.navItem)}
          {getLinkByLabel("Signup", navbarComponentStyle.signup)}
        </nav>
      </div>
      {windowWidth < 640 ? (
        <SearchBar
          initialSearchText={searchText}
          setSearchText={setSearchText}
        />
      ) : null}
    </motion.section>
  );
}

const navbarComponentStyle = {
  navbarSectionFrame:
    "w-full flex flex-col justify-start items-center gap-4 bg-smoke/10 p-3 ",
  navbarMain: "w-full flex justify-between items-center xl:w-4/5 2xl:w-3/5",
  navbarRoutes: "w-full flex justify-center items-center sm:w-2/5 md:w-1/4",
  logo: "w-[36px] h-[36px] flex justify-center items-center bg-coal/90 text-pearl rounded-full tracking-widest",
  navItem: "w-full flex justify-center items-center tracking-wider ",
  signup:
    "w-full flex justify-center items-center bg-coal/90 text-pearl rounded tracking-wider py-1",
};
