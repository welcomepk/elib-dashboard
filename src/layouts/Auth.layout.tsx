import useLocalStorage from "@/hooks";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const AuthLayout = () => {
  const navigate = useNavigate();
  const [token] = useLocalStorage("jwtToken", "");

  useEffect(() => {
    if (token) return navigate("/dashboard", { replace: true });
  }, [token, navigate]);

  return (
    <div className="flex h-screen items-center justify-center">
      <Outlet />
    </div>
  );
};

export default AuthLayout;
