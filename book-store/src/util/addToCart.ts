import TReducerAction from "@/types/ReducerAction";
import TCartItem from "@/types/cartItem";

export default function addToCart(
  itemIndex: number,
  state: TCartItem[],
  action: TReducerAction
) {
  if (itemIndex >= 0) {
    state[itemIndex].amount++;
    return [...state];
  } else {
    const newItem: TCartItem = action.payload as TCartItem;
    newItem.amount = 1;
    return [...state, newItem];
  }
}
