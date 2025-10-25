import { createBrowserRouter } from "react-router-dom";


import App from "./App";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import RecipeDetail from "./pages/RecipeDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/recipe/:id", element: <RecipeDetail /> },
      { path: "/favorites", element: <Favorites /> },
    ],
  },
]);
