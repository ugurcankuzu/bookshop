import Image from "next/image";
import mockCover from "../../../public/bookCover.svg";
import TProduct from "@/types/product";
import ProductInfo from "./productInfo";
export default function ProductDisplay({
  productInfo,
}: {
  productInfo: TProduct;
}) {
  return (
    <section className={productDisplayStyles.productDisplayFrame}>
      <div className={productDisplayStyles.productDisplayWrapper}>
        <div className={productDisplayStyles.imageWrapper}>
          <Image
            src={mockCover}
            alt="Book cover."
            className={productDisplayStyles.image}
            priority={true}
          />
        </div>
        <ProductInfo productInfo={productInfo} />
      </div>
    </section>
  );
}

const productDisplayStyles = {
  productDisplayFrame: "w-full h-full flex justify-center items-start px-2",
  productDisplayWrapper:
    "w-full h-full flex flex-col items-center gap-4 p-2 sm:flex-row xl:w-4/5 2xl:w-3/5",
  imageWrapper:
    "w-full h-full bg-coal/90 flex justify-center items-center",
  image: "w-3/4 md:w-2/3 lg:w-1/2 drop-shadow-xl",
};
