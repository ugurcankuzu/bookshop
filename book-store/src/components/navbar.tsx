import Link from "next/link";

export default function Navbar() {
  return (
    <section className={navbarComponentStyle.navbarSectionFrame}>
      <div className={navbarComponentStyle.navbarMain}>
        <Link href={""}>
          <h1>BookShop</h1>
        </Link>
        {/* TODO: Searchbar Component */}
        <Link href={""}>Signup</Link>
      </div>
      <div className={navbarComponentStyle.navbarRoutes}>
        <Link href={""}>Home</Link>
        <Link href={""}>Shop</Link>
      </div>
    </section>
  );
}

const navbarComponentStyle = {
  navbarSectionFrame:
    "w-full h-[80px] flex flex-col items-center justify-center border border-black",
  navbarMain:
    "w-full h-full flex justify-between items-center px-8 border border-black",
  navbarRoutes: "w-full h-full flex justify-center items-center gap-8",
};
