
import { Link, createBrowserRouter } from "react-router-dom";

import Login from "./pages/login/LoginPage";
import Signup from "./pages/signup/SignupPage";
import DashboardLayout from "./layouts/Dashboard.layout";
import HomePage from "./pages/home/HomePage";
import BooksPage from "./pages/books/BooksPage";

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
        ],
    },
    {
        path: "/about",
        element: <div>About <Link to={'/login'}>Login</Link> </div>,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/signup",
        element: <Signup />,
    }
]);

export default router