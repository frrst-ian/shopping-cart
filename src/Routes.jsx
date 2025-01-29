import {HomePage} from './components/Homepage'
import {Cart} from './components/Cart'

export const routes = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
];