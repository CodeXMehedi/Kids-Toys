import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import Home from "../Pages/Home/Home";
import { Suspense } from "react";
import AvailableToys from "../Pages/AvailableToys/AvailableToys";
import AuthLayout from "../Pages/AuthLayout/AuthLayout";
import Login from "../src/Component/Login";
import Registration from "../src/Component/Registration";



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
      },
      {
        path: '/AvailableToy',
        element: <Suspense fallback="Loading...">
          <AvailableToys toysPromise={toysPromise}></AvailableToys>
        </Suspense>
      },
    ]
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>
      },
      {
        path: "/auth/register",
        element: <Registration></Registration>
      }
    ]
  }
]);