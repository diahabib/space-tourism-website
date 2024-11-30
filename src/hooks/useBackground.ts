import { useRoute } from "../context/RouteContext";

type RouteBackgroundMap = {
  [key: string]: string;
};

const routeBackgrounds: RouteBackgroundMap = {
  "/": "home-page",
  "/destination": "destination-page",
  "/technology": "technology-page",
  "/crew": "crew-page",
};

export const useBackground = () => {
  const { currentRoute } = useRoute();
  return routeBackgrounds[currentRoute] || "home-page";
};
