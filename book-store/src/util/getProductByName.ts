async function getProductByName(name: string) {
  const response = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "products/" + name,
    { method: "GET", next: { revalidate: 300 } }
  );
  const data = await response.json();
  return data;
}

export default getProductByName;
