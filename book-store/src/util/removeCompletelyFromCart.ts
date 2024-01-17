import TCartItem from "@/types/cartItem";

export default function removeCompletelyFromCart(
  item: TCartItem,
  cart: TCartItem[]
) {
  const newCart = cart.filter((cartMember) => cartMember.id !== item.id);
  return newCart;
}
