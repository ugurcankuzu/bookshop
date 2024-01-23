export default async function getPaginatedProducts(currentUrl:string) {
  const URLSearch = new URLSearchParams(currentUrl);
  const page = URLSearch.get("page");
  const category = URLSearch.get("category");
  const query = `?page=${page || 1}${category ? "&category="+category:""}`
  const response = await fetch(
    "http://localhost:8080/api"+"/getPaginatedProducts"+query,
    { method: "GET" }
  );
  if (response.status === 200) {
    const result = await response.json();
    return result;
  }
}
