import routes from "@/route";
import Route from "@/types/route";
import Link from "next/link";

export default function getLinkByLabel(
  routeLabel: string,
  className: string | undefined = undefined
) {
  const route: Route | undefined = routes?.find(
    (route) => route.label === routeLabel
  );
  if (route) {
    return (
      <Link href={route.path} className={className || ""}>
        {route.label}
      </Link>
    );
  } else {
    return undefined;
  }
}
