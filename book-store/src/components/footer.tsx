import getLinksByLabels from "@/util/getLinksByLabels";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={footerStyle.footerFrame}>
      <div className={footerStyle.footerContentWrapper}>
        <div className={footerStyle.footerContent}>
          <Link href={""}>
            <h1 className={footerStyle.footerLogoContent}>BookShop</h1>
          </Link>
        </div>
        <div className={footerStyle.footerContent}>
          {getLinksByLabels(["Home", "Shop"], footerStyle.footerContentRoutes)}
        </div>
      </div>
    </footer>
  );
}

const footerStyle = {
  footerFrame: "w-full p-4 bg-coal/90 flex justify-center items-center",
  footerContentWrapper:
    "w-full flex flex-col justify-center items-center divide-y-2 divide-main-orange md:flex-row md:divide-x-2 md:divide-y-0 md:w-4/5",
  footerLogoContent: "font-extrabold text-main-orange tracking-wider text-3xl",
  footerContent: "w-full flex flex-col gap-2 justify-center items-center p-4",
  footerContentRoutes: "text-main-orange tracking-wider",
};
