export default async function getTotalPages() {
  const response = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/getTotalPages",
    { method: "GET" }
  );
  if (response.status === 200) {
    const result = await response.json();
    return result.totalPages;
  }
}
