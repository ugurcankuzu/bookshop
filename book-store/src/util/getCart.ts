export default async function getCart() {
  const usertkn = sessionStorage.getItem("usertkn");
  if (usertkn) {
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL + "/getCart", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${usertkn}`,
      },
    });
    if (response.status === 200) {
      const result = await response.json();
      return result;
    } else {
      return [];
    }
  }
}
