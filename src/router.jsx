import { createBrowserRouter } from "react-router-dom";
import WithHeroLayout from "./layout/WithHeroLayout";
import WithoutHeroLAyout from "./layout/WthoutHeroLayout";
import CategoryFood from "./pages/CategoryFood";
import CategoryFoodDetail from "./pages/CategoryFoodDetail";
import FoodDetail from "./pages/FoodDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <WithHeroLayout />, // Layout Home
  },
  {
    element: <WithoutHeroLAyout />,
    children: [
      {
        path: "/category",
        element: <CategoryFood />, // Route to Category Food page
      },
      {
        path: "/category/:categoryName",
        element: <CategoryFoodDetail />, // Route to Category Food Detail page
      },
      {
        path: "/meal/:mealId",
        element: <FoodDetail />,
      },
    ],
  },
]);

export default router;
