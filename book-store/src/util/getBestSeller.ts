import TOrderBy from "@/types/OrderBy";
export default async function getBestSeller(orderBy: TOrderBy) {
  const response = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "products?order=" + orderBy,
    {
      next: {
        revalidate: 300,
      },
    }
  );
  const data = await response.json();
  return data;
}
