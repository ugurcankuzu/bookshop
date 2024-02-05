import EOrderBy from "@/enums/orderByEnum";
import TProduct from "@/types/product";
import { Dispatch, SetStateAction } from "react";
function quickSort(
  products: TProduct[],
  orderProperty: "price" | "saleCount",
  order: "ASC" | "DESC"
): TProduct[] {
  if (products.length <= 1) {
    return products;
  }

  const lessEqual = [];
  const higher = [];
  const pivot = products.pop() as TProduct;
  const newProductArray: TProduct[] = [];

  for (let i = 0; i < products.length; i++) {
    if (products[i][orderProperty] <= pivot[orderProperty]) {
      lessEqual.push(products[i]);
    } else {
      higher.push(products[i]);
    }
  }

  if (order === "ASC") {
    return newProductArray.concat(
      quickSort(lessEqual, orderProperty, order),
      pivot,
      quickSort(higher, orderProperty, order)
    );
  } else {
    return newProductArray.concat(
      quickSort(higher, orderProperty, order),
      pivot,
      quickSort(lessEqual, orderProperty, order)
    );
  }
}

export default function sortProducts(
  products: TProduct[],
  orderBy: EOrderBy,
  setProduct: Dispatch<SetStateAction<TProduct[]>>
) {
  let productStateCopy = [...products]; //to avoid directly manipulating state
  switch (orderBy) {
    case EOrderBy.priceHighToLow: {
      productStateCopy = quickSort(productStateCopy, "price", "DESC");
      break;
    }
    case EOrderBy.priceLowToHigh: {
      productStateCopy = quickSort(productStateCopy, "price", "ASC");
      break;
    }
    case EOrderBy.sellCountAscended: {
      productStateCopy = quickSort(productStateCopy, "saleCount", "ASC");
      break;
    }
    case EOrderBy.sellCountDescended: {
      productStateCopy = quickSort(productStateCopy, "saleCount", "DESC");
      break;
    }
    default:
      break;
  }
  setProduct(productStateCopy);
}
