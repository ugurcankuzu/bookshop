import routes from "@/route";
import Route from "@/types/route";
import Link from "next/link";

export default function getLinksByLabels(
  routeLabels: string[],
  commonClassName: string | undefined = undefined
) {
  const selectedRoutes: Route[] = routes.filter((route) =>
    routeLabels.includes(route.label)
  );

  if (selectedRoutes.length > 0) {
    return selectedRoutes.map((route, index) => {
      return (
        <Link key={index} href={route.path} className={commonClassName || ""}>
          {route.label}
        </Link>
      );
    });
  } else {
    return undefined;
  }
}
