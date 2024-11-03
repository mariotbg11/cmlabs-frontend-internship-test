import { createBrowserRouter } from "react-router-dom";
import WithHeroLayout from "./layout/WithHeroLayout";
import WithoutHeroLAyout from "./layout/WthoutHeroLayout";
import CategoryFood from "./pages/CategoryFood";

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
    ],
  },
]);

export default router;
