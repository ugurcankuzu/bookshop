import routes from "@/route";
import Route from "@/types/route";
export default function getRouteByLabel(
  routeLabel: string,
  callback: Function | undefined = undefined
) {
    const route : Route | undefined = routes.find((route)=> route.label === routeLabel);
  if (typeof callback === "function" && route) {
    return callback(route);
  } 
  return route
}
