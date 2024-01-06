"use client";
import getLinkByLabel from "@/util/getLinkByLabel";
import searchProduct from "@/util/searchProduct";
import { faShoppingBasket, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import Link from "next/link";
import { ReactNode, useContext, useEffect, useState, MouseEvent } from "react";
import { UserContext } from "./context/userContext";
import SearchBar from "./searchBar";
import EUserActionTypes from "@/enums/userContextActionEnum";
export default function Navbar() {
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const [searchText, setSearchText] = useState<string>("");
  const [userMenuVisibility, setUserMenuVisibility] = useState(false);
  const handleUserMenuVisibility = function (event: MouseEvent) {
    setUserMenuVisibility((state) => !state);
  };
  const handleLogout = function (event: MouseEvent) {
    userctx.userDispatch({ type: EUserActionTypes.logout });
  };
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
  return (
    <motion.section
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={navbarComponentStyle.navbarSectionFrame}
    >
      <div className={navbarComponentStyle.navbarMain}>
        <Link href={"/"}>
          <h1 className={navbarComponentStyle.logo}>BS</h1>
        </Link>
        {windowWidth >= 640 ? (
          <SearchBar
            initialSearchText={searchText}
            setSearchText={setSearchText}
          />
        ) : null}

        {!userctx.userState && (
          <nav className={navbarComponentStyle.navbarRoutes}>
            {getLinkByLabel("Shop", navbarComponentStyle.navItem) as ReactNode}
            {getLinkByLabel("Signup", navbarComponentStyle.signup) as ReactNode}
          </nav>
        )}
        {userctx.userState && (
          <nav className={navbarComponentStyle.navbarRoutes}>
            {getLinkByLabel("Shop", navbarComponentStyle.navItem) as ReactNode}
            <div className={navbarComponentStyle.cart}>
              <FontAwesomeIcon icon={faShoppingBasket} />
            </div>
            <div
              onClick={handleUserMenuVisibility}
              className={navbarComponentStyle.profile}
            >
              <FontAwesomeIcon icon={faUser} />
              <div
                className={
                  navbarComponentStyle.userMenu +
                  `${
                    userMenuVisibility
                      ? navbarComponentStyle.userMenuVisibile
                      : navbarComponentStyle.userMenuNotVisible
                  }`
                }
              >
                <button onClick={handleLogout} className={navbarComponentStyle.userMenuButtons}>
                  Signout
                </button>
              </div>
            </div>
          </nav>
        )}
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
  profile:
    "w-1/3 bg-coal/90 text-pearl rounded flex justify-center items-center py-1 relative cursor-pointer",
  cart: "w-1/3 flex justify-center items-center",
  userMenu: "absolute px-2 py-1 mt-1 top-full bg-pearl shadow-md z-[100] ",
  userMenuVisibile: "flex flex-col items-center justify-start",
  userMenuNotVisible: "hidden",
  userMenuButtons: "text-coal",
};
