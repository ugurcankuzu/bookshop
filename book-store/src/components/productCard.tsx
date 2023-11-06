import TProduct from "@/types/product";
import Image from "next/image";
import mockCover from "../../public/bookCover.svg";

interface IProductCard {
  item: TProduct;
}
export default function ProductCard({ item }: IProductCard) {
  return (
    <div className={productCardStyle.cardFrame}>
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
  );
}

const productCardStyle = {
  cardFrame:
    "w-full h-[22rem] flex flex-col items-center justify-start shadow-md rounded-md box-border md:max-w-[15rem]",
  bookCover: "w-full h-48",
  infoSection: "w-full h-full flex flex-col justify-start items-center",
  itemInfo: "w-full h-full flex flex-col gap-2 justify-start items-center",
  productName: "w-full h-full text-lg font-bold text-center",
  authorName: "h-full font-normal text-black/60 text-center",
  price: "w-full h-full text-main-orange text-center",
  addToCart: "bg-main-orange text-white w-full py-1",
};
