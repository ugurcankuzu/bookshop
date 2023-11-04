import routes from "@/route";

export default function getRoutesByLabel(
  routeLabels: string[],
  callback: Function | undefined = undefined
) {
  const selectedRoutes = routes.filter((route) =>
    routeLabels.includes(route.label)
  );
  if (selectedRoutes.length > 0 && typeof callback === "function") {
    return callback(selectedRoutes);
  }
  return selectedRoutes;
}
