import { Link, createBrowserRouter } from "react-router-dom";

import Login from "./pages/login/LoginPage";
import Signup from "./pages/signup/SignupPage";
import DashboardLayout from "./layouts/Dashboard.layout";
import HomePage from "./pages/home/HomePage";
import BooksPage from "./pages/books/BooksPage";
import AuthLayout from "./layouts/Auth.layout";
import CreateBookPage from "./pages/books/CreateBookPage";

const router = createBrowserRouter([
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "books",
        element: <BooksPage />,
      },
      {
        path: "books/create",
        element: <CreateBookPage />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
    ],
  },
  {
    path: "/about",
    element: (
      <div>
        About <Link to={"/login"}>Login</Link>{" "}
      </div>
    ),
  },
]);

export default router;
