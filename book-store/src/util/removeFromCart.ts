import TReducerAction from "@/types/ReducerAction";
import TCartItem from "@/types/cartItem";

export default function removeFromCart(itemIndex: number, state: TCartItem[]) {
  if (itemIndex < 0) {
    return state;
  } else {
    const item = state[itemIndex];
    if (item.amount > 1) {
      item.amount--;
      return state;
    } else {
      const newCart = state.filter((cartItem) => cartItem !== item);
      return newCart;
    }
  }
}
