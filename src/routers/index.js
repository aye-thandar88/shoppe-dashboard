import { Outlet, createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/dashboard";
import Layout from "../layout";
import Users from "../pages/users";
import Shops from "../pages/shops";
import PageNotFound from "../pages/errorPages/404Page";
import ErrorBoundary from "../pages/errorPages/ErrorBoundary"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Outlet />,
    children: [
      {
        path: "/",
        element: <Layout />,
        children: [
          {
            path: "/dashboard",
            element: <Dashboard />,
            errorElement: <ErrorBoundary />,
          },
          {
            path: "/users",
            element: <Users />,
            errorElement: <ErrorBoundary />,
          },
          {
            path: "/shops",
            element: <Shops />,
            errorElement: <ErrorBoundary />,
          },
        ],
      },
      {
        path: "*",
        element: <PageNotFound />,
      },
    ],
  },
]);
