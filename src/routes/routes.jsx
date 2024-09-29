import Catalog from "../pages/Catalog";
import Contacts from "../pages/Contacts";
import Events from "../pages/Events";
import Journal from "../pages/Journal";
import Salons from "../pages/Salons";
import Root from "../pages/Root";

export const routes = [
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/contacts",
    element: <Contacts />,
  },
  {
    path: "/events",
    element: <Events />,
  },
  {
    path: "/journal",
    element: <Journal />,
  },
  {
    path: "/salons",
    element: <Salons />,
  },
  {
    path: "/catalog",
    element: <Catalog />,
  },
];
