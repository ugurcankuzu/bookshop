import TProduct from "@/types/product";
import Image from "next/image";
import mockCover from "../../public/bookCover.svg";
import Link from "next/link";

interface IProductCard {
  item: TProduct;
}
export default function ProductCard({ item }: IProductCard) {
  return (
    <Link href={""} className={productCardStyle.productWrapper}>
      <div className={productCardStyle.productImageWrapper}>
        <Image
          src={mockCover}
          alt="Book Cover"
          className={productCardStyle.productImage}
        />
      </div>
      <div className={productCardStyle.productInfoWrapper}>
        <div className={productCardStyle.productNameWrapper}>
          <p className={productCardStyle.productName}>{item.productName}</p>
        </div>
        <div className={productCardStyle.productSubWrapper}>
          <div className={productCardStyle.productSubItemWrapper}>
            <p className={productCardStyle.productSubTitle}>Author</p>
            <p className={productCardStyle.productSubInfo}>{item.author}</p>
          </div>
          <div className={productCardStyle.productSubItemWrapper}>
            <p
              className={
                productCardStyle.productSubTitle +
                productCardStyle.buyNowTextEnd
              }
            >
              Buy now
            </p>
            <p
              className={
                productCardStyle.productSubInfo + productCardStyle.buyNowTextEnd
              }
            >
              {item.price} {item.currency}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
const productCardStyle = {
  productWrapper:
    "w-full sm:min-w-[300px] sm:max-w-[300px] h-[320px] flex flex-col justify-start items-center gap-4 bg-smoke/10 p-2 shadow-md sm:snap-center",
  productImageWrapper: "w-full h-2/3",
  productInfoWrapper:
    "w-full h-full flex flex-col justify-between items-center divide-y-2 divide-smoke",
  productNameWrapper: "w-full h-full",
  productSubWrapper:
    "w-full h-full flex justify-between items-center py-1",
  productSubItemWrapper: "w-full h-full",
  productImage: "w-full h-full object-scale-down drop-shadow-md",
  productName: "text-2xl font-bold text-coal/90 line-clamp-1",
  productSubTitle: "text-sm text-coal/40",
  productSubInfo: "text-sm text-ellipsis overflow-hidden",
  buyNowTextEnd: " text-end",
};
/**
 * <div className={productCardStyle.cardFrame}>
      <Image
        src={mockCover}
        alt={`${item.productName} Cover`}
        className={productCardStyle.bookCover}
      />
      <div className={productCardStyle.infoSection}>
        <div className={productCardStyle.itemInfo}>
          <p className={productCardStyle.productName}>{item.productName}</p>
          <p className={productCardStyle.authorName}>{item.author}</p>
          <p
            className={productCardStyle.price}
          >{`${item.price} ${item.currency}`}</p>
        </div>
        <button className={productCardStyle.addToCart}>Add to Cart</button>
      </div>
    </div>
 */
