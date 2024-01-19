import TReducerAction from "@/types/ReducerAction";
import TCartItem from "@/types/cartItem";

export default function searchCartByItemName(
  state: TCartItem[],
  action: TReducerAction
) {
  const cartItem: TCartItem = action.payload as TCartItem;
  const itemIndex = state.findIndex((item) => {
    item.productName === cartItem.productName;
  });
  return itemIndex;
}
