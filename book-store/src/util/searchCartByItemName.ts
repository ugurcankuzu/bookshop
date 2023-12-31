import TReducerAction from "@/types/ReducerAction";
import TCartItem from "@/types/cartItem";

export default function searchCartByItemName(
  state: TCartItem[],
  action: TReducerAction
) {
  const itemIndex = state.findIndex(
    (item) => item.productName === action.payload?.productName
  );
  return itemIndex;
}
