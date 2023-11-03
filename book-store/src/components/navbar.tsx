import Link from "next/link";

export default function Navbar() {
  return (
    <section className={navbarComponentStyle.navbarSectionFrame}>
      <div className={navbarComponentStyle.navbarMain}>
        <Link href={""}>
          <h1 className={navbarComponentStyle.logo}>BookShop</h1>
        </Link>
        {/* TODO: Searchbar Component */}
        <Link href={""} className={navbarComponentStyle.signup}>
          Signup
        </Link>
      </div>
      <nav className={navbarComponentStyle.navbarRoutes}>
        <Link href={""} className={navbarComponentStyle.navItem}>
          Home
        </Link>
        <Link href={""} className={navbarComponentStyle.navItem}>
          Shop
        </Link>
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
