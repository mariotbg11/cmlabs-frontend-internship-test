import { RouterProvider } from "react-router-dom";
import router from "./router";

function App() {
  return (
    <div className="font-fredoka max-w-screen-xl mx-auto px-2">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
