import { Outlet } from "react-router-dom";

const LoginLayout = () => {
  return (
    <div className="bg-white  overflow-hidden w-full m-auto  h-screen flex relative">
      <div className="min-w-[50%]  bg-benner bg-center bg-no-repeat bg-cover"></div>
      <Outlet />
    </div>
  );
};

export default LoginLayout;
