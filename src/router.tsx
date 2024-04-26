
import { Link, createBrowserRouter } from "react-router-dom";

import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";

const router = createBrowserRouter([
    {
        path: "/",
        element: <div>Home <Link to={'/about'}>About</Link> </div>,
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