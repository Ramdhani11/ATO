import { Navigate, Outlet } from "react-router-dom";
import { fakeAuthProvider } from "../utils/fake.auth";

const AuthLayout = () => {
  if (!fakeAuthProvider.isAuthenticated) {
    return <Navigate to={"/auth"} replace />;
  }

  return <Outlet />;
};

export default AuthLayout;
