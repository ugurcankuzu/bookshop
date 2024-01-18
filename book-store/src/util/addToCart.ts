import TReducerAction from "@/types/ReducerAction";
import TCartItem from "@/types/cartItem";

export default function addToCart(
  itemIndex: number,
  state: TCartItem[],
  action: TReducerAction
) {
  if (itemIndex >= 0) {
    const payloadItem = action.payload as TCartItem;
    state[itemIndex].amount = payloadItem.amount;
    return [...state];
  } else {
    const newItem: TCartItem = action.payload as TCartItem;
    newItem.amount = newItem.amount;
    return [...state, newItem];
  }
}
