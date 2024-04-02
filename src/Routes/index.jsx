
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Login from "../pages/Login";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <div><Login/></div>,
    },
  ]);