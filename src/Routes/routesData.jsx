import MainPage from "Components/Pages/MainPage/MainPage";
import ProductPage from "Components/Pages/ProductPage/ProductPage";

const routes = [
  {
    path: "/",
    exact: true,
    component: MainPage,
  },
  {
    path: "/product",
    exact: true,
    component: ProductPage,
  },
];

export default routes;
