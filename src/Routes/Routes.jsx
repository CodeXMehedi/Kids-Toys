import { createBrowserRouter } from "react-router";
import { Suspense } from "react";
import Root from "../Pages/Root/Root";
import Home from "../Pages/Home/Home";
import AvailableToys from "../Pages/AvailableToys/AvailableToys";
import AuthLayout from "../Pages/AuthLayout/AuthLayout";
import Login from "../Component/Login";
import Registration from "../Component/Registration"
import ToyDetails from "../Pages/ToyDetails/ToyDetails";
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
    element:<AuthLayout></AuthLayout>,
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
  },
  {
    path: "/toy-details/:id",
    element: <ToyDetails></ToyDetails>,
    loader: ({ params }) => {
      return fetch('/ToysData.json')
        .then(res => res.json())
        .then(data => {
          const toy = data.find(item => item.toyId === Number(params.id));
          return toy;
        });
    }
  }
]);