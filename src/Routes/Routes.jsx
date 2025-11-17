import { createBrowserRouter } from "react-router";
import { Suspense } from "react";
import Root from "../Pages/Root/Root";
import Home from "../Pages/Home/Home";
import AvailableToys from "../Pages/AvailableToys/AvailableToys";
import AuthLayout from "../Pages/AuthLayout/AuthLayout";
import Login from "../Component/Login";
import Registration from "../Component/Registration"
import ToyDetails from "../Pages/ToyDetails/ToyDetails";
import PrivateRoute from "../provider/PrivateRoute";
import ErrorPage from '../Pages/ErrorPage'
import AnotherPrivateRoute from "../provider/AnotherPrivateRoute";
import PersonalDetails from "../Component/PersonalDetails";
import ForgotPassword from "../Pages/ForgotPassword/ForgotPassword";
import Loading from "../Pages/Loading";
import PrivacyPolicy from "../Component/PrivacyPolicy";
import Terms from "../Component/Terms";
import Cart from "../Pages/Cart/Cart";


const toysPromise = fetch('/ToysData.json').then(res => res.json());
export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
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
    element: <PrivateRoute>
      <ToyDetails></ToyDetails>
    </PrivateRoute>,
    loader: ({ params }) => {
      return fetch('/ToysData.json')
        .then(res => res.json())
        .then(data => {
          const toy = data.find(item => item.toyId === Number(params.id));
          return toy;
        });
    },
    hydrateFallbackElement:<Loading></Loading>
  },
  {
    path: '/personalDetails',
    element: <PrivateRoute>
      <PersonalDetails></PersonalDetails>
    </PrivateRoute>,
    hydrateFallbackElement: <Loading></Loading>
  },
  {
    path: '/auth/forgot-password',
    element:<ForgotPassword></ForgotPassword>
  },
  {
    path: "/privacy-policy",
    element: <PrivacyPolicy></PrivacyPolicy>
  },
  {
    path: "/terms",
    element: <Terms></Terms>
  }, 
  {
    path: '/cart',
    element: <PrivateRoute>
      <Cart></Cart>
    </PrivateRoute>,
    loader: () => fetch('/ToysData.json')
  }
  
]);