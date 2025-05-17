import {createBrowserRouter} from "react-router-dom";
import Shop from "./Shop.jsx";
import ProductListPage from "./pages/ProductListPage/ProductListPage.jsx";
import ShopApplicationWrapper from "./pages/ShopApplicationWrapper";
import ProductDetailPage from "./pages/ProductDetailPage/ProductDetailPage";
import {loadProductById} from "./routes/products";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <ShopApplicationWrapper/>,
        children: [
            {
                path: "/",
                element: <Shop/>,
            },
            {
                path: "/women",
                element: <ProductListPage categoryType={"WOMEN"}/>,
            },
            {
                path: "/men",
                element: <ProductListPage categoryType={"MEN"}/>,
            },
            {
                path: "/product/:productId",
                loader: loadProductById,
                element: <ProductDetailPage/>,
            }
        ],
    },
]);
