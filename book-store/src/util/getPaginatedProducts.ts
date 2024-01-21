export default async function getPaginatedProducts(page: string) {
  const response = await fetch(
    "http://localhost:8080/api/getPaginatedProducts?page=" + page,
    { method: "GET" }
  );
  if (response.status === 200) {
    const result = await response.json();
    return result;
  }
}
