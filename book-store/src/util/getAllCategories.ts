async function getAllCategories() {
  const response = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "allCategories",
    {
      next: {
        revalidate: 1800,
      },
      cache: "force-cache",
    }
  );
  const data = await response.json();
  return data;
}
