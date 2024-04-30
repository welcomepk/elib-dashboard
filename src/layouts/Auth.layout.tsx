import { useTokenStore } from "@/store";
import { Outlet, Navigate } from "react-router-dom";

const AuthLayout = () => {
  const token = useTokenStore((state) => state.token);
  if (token) return <Navigate to="/dashboard/home" replace />;

  return (
    <div className="flex h-screen items-center justify-center">
      <Outlet />
    </div>
  );
};

export default AuthLayout;
