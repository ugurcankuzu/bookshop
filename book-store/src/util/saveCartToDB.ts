import TCartItem from "@/types/cartItem";

export default async function saveCartToDB(state: TCartItem[]) {
  const usertkn = sessionStorage.getItem("usertkn");
  if (usertkn) {
    const filteredCart = state.map((item) => ({
      id: item.id,
      amount: item.amount,
    }));
    const response = await fetch(
      process.env.NEXT_PUBLIC_API_URL + "/saveCart",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${usertkn}`,
        },
        body: JSON.stringify({
          cart: filteredCart,
        }),
      }
    );
    if (response.status === 200) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}
