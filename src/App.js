import React, { lazy, Suspense } from "react";
import ReactDom from "react-dom/client";
import { Header } from "./components/Header";
import { Body } from "./components/Body";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import Error from "./components/Error";
import Contact from "./components/Contact";
import { RestaurantMenu } from "./components/RestaurantMenu";
import { Provider } from "react-redux";
import { appStore } from "./utils/appStore";
import { OnlineProvider } from "./context/onlineContext";
import Cart from "./components/Cart";
const About = lazy(() => import("./components/About"));

const AppLayout = () => {
  return (

    <Provider store={appStore}>
    <div className="app">
      <OnlineProvider>
        <Header />
      </OnlineProvider>

      <Outlet />
    </div>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart/>,
      }
    ],
  },
]);

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
