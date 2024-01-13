import Route from "@/types/route";
import getLinkByLabel from "@/util/getLinkByLabel";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useClearRefinements } from "react-instantsearch";
import { MouseEvent } from "react";

export default function HitComponent({
  hit,
}: {
  hit: { productName: string; author: string; path: string };
}) {
  const productUrl: Route = getLinkByLabel(
    "Product",
    undefined,
    false
  ) as Route;
  const clearRefinements = useClearRefinements({
    includedAttributes: ["query"],
  });
  const router = useRouter();
  const handleNavigation = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    clearRefinements.refine();
    router.push(event.currentTarget.href);
  };
  return (
    <Link
      href={productUrl.path + `/${encodeURI(hit.productName)}`}
      onClick={handleNavigation}
      className="block"
    >
      {hit.productName} <span className="text-slate-500 text-sm italic">{hit.author}</span>
    </Link>
  );
}
