import getLinksByLabels from "@/util/getLinksByLabels";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={footerStyles.footerFrame}>
      <div className={footerStyles.footerWrapper}>
        <div className={footerStyles.footerLogoWrapper}>
          <Link href={"/"}>
            <span className={footerStyles.logo}>BS</span>
          </Link>
        </div>
        <div className={footerStyles.footerSectionsWrapper}>
          {getLinksByLabels(["Home", "Shop"], footerStyles.pages)}
        </div>
      </div>
    </footer>
  );
}
const footerStyles = {
  footerFrame: "w-full bg-smoke/40 flex justify-center items-center",
  footerWrapper:
    "w-full flex flex-col sm:flex-row items-center justify-center gap-4 divide-y sm:divide-x sm:divide-y-0 divide-smoke p-2 xl:w-4/5 2xl:w-3/5",
  footerLogoWrapper: "w-full flex justify-center items-center",
  footerSectionsWrapper:
    "w-full flex flex-col justify-center items-center pt-4",
  logo: "w-[36px] h-[36px] flex justify-center items-center bg-coal/90 text-pearl rounded-full tracking-widest",
  pages: "text-xl tracking-wider text-coal/90",
};
