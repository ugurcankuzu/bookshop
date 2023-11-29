import TProduct from "@/types/product";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuoteLeft,
  faBook,
  faSignature,
  faTag,
} from "@fortawesome/free-solid-svg-icons";

export default function ProductInfo({
  productInfo,
}: {
  productInfo: TProduct;
}) {
  return (
    <div className={productInfoStyles.productInfoWrapper}>
      <div className={productInfoStyles.productMetaWrapper}>
        <p className={productInfoStyles.productName}>
          {productInfo.productName}
        </p>
        <p className={productInfoStyles.productAuthor}>{productInfo.author}</p>
        <p className={productInfoStyles.productDescription}>
          "{productInfo.productDescription}"
        </p>
      </div>
      <div className={productInfoStyles.productDetailsWrapper}>
        <div className={productInfoStyles.productDetail}>
          <p className={productInfoStyles.productDetailLables}>Category:</p>
          <p className={productInfoStyles.productDetailValues}>
            {productInfo.category.toString()}
          </p>
        </div>
        <div className={productInfoStyles.productDetail}>
          <p className={productInfoStyles.productDetailLables}>Price:</p>
          <p className={productInfoStyles.productDetailValues}>
            {productInfo.price} {productInfo.currency}
          </p>
        </div>
        <div className={productInfoStyles.productDetail}>
          <p className={productInfoStyles.productDetailLables}>in Stock:</p>
          <p className={productInfoStyles.productDetailValues}>
            {productInfo.stock}
          </p>
        </div>
      </div>
    </div>
  );
}

const productInfoStyles = {
  productInfoWrapper:
    "w-full max-w-1/2 self-stretch flex flex-col justify-start items-center gap-2 bg-smoke/10 sm:justify-center lg:w-1/2",
  productMetaWrapper: "w-full flex flex-col justify-center items-center",
  productDetail: "w-full flex items-center justify-between gap-2 py-2",
  productDetailsWrapper:
    "w-full p-4 flex flex-col justify-start items-center divide-y divide-smoke",
  productName: "w-full text-3xl font-bold truncate text-center",
  productAuthor: "w-full text-lg font-medium truncate text-center",
  productDescription:
    "w-full max-h-[200px] text-xl font-normal italic text-coal/40 mt-2 text-center",
  productDetailLables: "font-medium text-coal/40 text-sm",
  productDetailValues: "font-bold",
};

/**
 * {Object.entries(productInfo).map(([key, value]) => (
          <h1>
            {key} {value.toString()}
          </h1>
        ))}
 */
