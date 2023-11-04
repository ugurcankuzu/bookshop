import routes from "@/route";

export default function getRouteByLabel(routeLabel: string) {
  return routes.find((route) => route.label === routeLabel);
}
