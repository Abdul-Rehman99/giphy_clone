import {RouterProvider, createBrowserRouter} from "react-router-dom";
import "./App.css";
import AppLayout from "./layouts/AppLayouts";
import Home from "./pages/Home";
import GifProvider from "./context/GifContext";
import SearchPage from "./pages/SearchPage";
import Category from "./pages/Category";
import GifPage from "./pages/GifPage";
import Favorites from "./pages/Favorites";

const router = createBrowserRouter([
  {
    element: <AppLayout />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/:type/:slug",
        element: <GifPage />,
      },
      {
        path: "/:category",
        element: <Category />,
      },
      {
        path: "/search/:query",
        element: <SearchPage />,
      },
      {
        path: "/favorites",
        element: <Favorites />,
      },
    ],
  },
]);

const App = () => {
  return (
    <GifProvider>
      <RouterProvider router={router} />
    </GifProvider>
  );
};

export default App;