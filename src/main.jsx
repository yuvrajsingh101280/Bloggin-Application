import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "@material-tailwind/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Layout from "./components/layout/Layout.jsx";
import Blog from "./pages/blog/Blog.jsx";
import AllBlogs from "./pages/allBlogs/AllBlogs.jsx";
import BlogInfo from "./pages/blogInfo/BlogInfo.jsx";

import Dashboard from "./pages/admin/dashboard/Dashboard.jsx";
import NoPage from "./pages/nopage/Nopage.jsx";
import AdminLogin from "./pages/admin/adminlogin/AdminLogin.jsx";
import myState from "./context/data/myState.jsx";
import { Toaster } from "react-hot-toast";
import MyState from "./context/data/myState.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,

    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "allblogs",
        element: <AllBlogs />,
      },
      {
        path: "bloginfo/:id",
        element: <BlogInfo />,
      },
      {
        path: "adminlogin",
        element: <AdminLogin />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "*",
        element: <NoPage />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <React.StrictMode>
      <MyState>
        {" "}
        <RouterProvider router={router} />
        <Toaster />
      </MyState>
    </React.StrictMode>
  </ThemeProvider>
);
