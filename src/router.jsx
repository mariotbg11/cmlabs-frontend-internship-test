import { createBrowserRouter } from "react-router-dom";
import WithHeroLayout from "./layout/WithHeroLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <WithHeroLayout />, // Layout Home
  },
]);

export default router;
