import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import Home from "../Pages/Home/Home";
import { Suspense } from "react";
import AvailableToys from "../src/Component/AvailableToys";

const toysPromise = fetch('/ToysData.json').then(res => res.json());
export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        element: <Suspense fallback="Loading...">
          <Home toysPromise={toysPromise}></Home>
        </Suspense>
      }
    ]
  }
]);