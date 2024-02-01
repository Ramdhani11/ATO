import { Navigate, Outlet } from "react-router-dom";
import Cookies from "js-cookie";

const LoginLayout = () => {
  if (Cookies.get("access") && Cookies.get("company") === "107") {
    return <Navigate to={"/chatboard"} replace={true} />;
  } else if (Cookies.get("access") && Cookies.get("company") === "ATO") {
    return <Navigate to={"/jp"} replace={true} />;
  }

  return (
    <div className="bg-white  overflow-hidden w-full m-auto  h-screen flex relative">
      <div className="min-w-[50%]  benner bg-center bg-no-repeat bg-cover"></div>
      <Outlet />
    </div>
  );
};

export default LoginLayout;
