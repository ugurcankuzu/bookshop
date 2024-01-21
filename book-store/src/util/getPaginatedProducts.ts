export default async function getPaginatedProducts(page: string) {
  const response = await fetch(
    process.env.NEXT_PUBLIC_API_URL+"/getPaginatedProducts?page=" + page,
    { method: "GET" }
  );
  if (response.status === 200) {
    const result = await response.json();
    return result;
  }
}
