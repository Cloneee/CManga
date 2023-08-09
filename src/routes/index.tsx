import { createHashRouter, Navigate, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import React from "react";
import Error from "../pages/Error";
import LayoutWrapper from "../layouts/LayoutWrapper";

const router = createHashRouter([
  {
    element: <LayoutWrapper />,
    path: "/",
    children: [{ element: <Home />, index: true }],
  },
  {
    element: <Error />,
    path: "/404",
  },
  {
    element: <Navigate to="/404" replace />,
    path: "*",
  },
]);

export const MainRouter = () => <RouterProvider router={router} />;
