import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ErrorPage from "../pages/ErrorPage";
import Layout from "../pages/Layout";
import Register from "../pages/Register";
import Login from "../pages/Login";
import ProductDetails from "../pages/ProductDetails";

export const router = createBrowserRouter([
    {
      path: "/",
      element:<Layout></Layout>,
      errorElement: <ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
            element:<HomePage></HomePage>
        },
        {
            path:'/productDetails/:id',
            element:<ProductDetails></ProductDetails>
        }
      ]
    },
    {
        path:'/register',
        element: <Register></Register>
    },
    {
        path: '/login',
        element: <Login></Login>
    }
  ]);