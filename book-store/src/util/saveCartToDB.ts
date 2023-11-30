import TCartItem from "@/types/cartItem";

export default async function saveCartToDB(state: TCartItem[]) {
  /**BACKEND API ENDPOINTI YAZILACAK VE GÜNCELLENECEK */
  const response = await fetch("", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.status === 200) {
    return true;
  } else {
    return false;
  }
}
