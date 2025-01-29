import { HomePage } from "./components/Homepage";
import { Shop } from "./components/Shop";

export const routes = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/shop",
    element: <Shop />,
  },
];
