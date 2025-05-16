import { createBrowserRouter } from "react-router-dom";
import Shop from "./Shop.jsx";
import ProductListPage from "./pages/ProductListPage/ProductListPage.jsx";
import ShopApplicationWrapper from "./pages/ShopApplicationWrapper";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <ShopApplicationWrapper />,
    children: [
      {
        path: "/",
        element: <Shop />,
      },
      {
        path: "/women",
        element: <ProductListPage categoryType={"WOMEN"} />,
      },
      {
        path: "/men",
        element: <ProductListPage categoryType={"MEN"} />,
      },
    ],
  },
]);
