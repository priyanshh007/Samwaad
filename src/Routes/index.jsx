
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import HomeLayout from "../layouts/Homelayout";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/home",
    element: <HomeLayout />,
  },
  ]);