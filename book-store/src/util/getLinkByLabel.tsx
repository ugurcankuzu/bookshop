import routes from "@/route";
import Route from "@/types/route";
import Link from "next/link";

export default function getLinkByLabel(
  routeLabel: string,
  className: string | undefined = undefined,
  linkComponent: boolean = true
) {
  const route: Route | undefined = routes?.find(
    (route) => route.label === routeLabel
  );
  if (route && linkComponent) {
    return (
      <Link href={route.path} className={className || ""}>
        {route.label}
      </Link>
    );
  } else if (route && !linkComponent) {
    return route;
  } else {
    return undefined;
  }
}
