import { useState } from "react";
import { close_eye, logo_chat, open_eye } from "../assets";
import { Form, Link } from "react-router-dom";

const Login = () => {
  const [seek, setSeek] = useState(true);

  return (
    <div className="w-full flex flex-col items-center justify-center">
      {/* <div className="flex p-7 justify-end">
        <label htmlFor="switch">SHi</label>
        <input type="checkbox" name="" id="switch" />
      </div> */}
      <div className="min-w-max w-[400px] hd:w-[440px] 2xl:w-[500px] p-5 flex flex-col justify-center items-center">
        <div className="w-[100px] h-[100px]">
          <img src={logo_chat} alt="t-chat" />
        </div>
        <div className="pt-6 pb-10">
          <h1 className="font-bold text-2xl">Sign In to Your Account</h1>
        </div>
        <Form method="post" replace className="w-full">
          <div className="flex flex-col w-full">
            <label className="font-semibold" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              className="border-[1px] focus:outline-none mt-1 border-[#8a8a8a] py-2 px-3 rounded-md"
              name="email"
              id="email"
              placeholder="Email Address"
            />
          </div>
          <div className="flex flex-col mt-4 ">
            <label className="font-semibold" htmlFor="password">
              Password
            </label>
            <div className="w-full relative">
              <input
                type={seek ? "password" : "text"}
                className="border-[1px] mt-1 focus:outline-none border-[#8a8a8a] w-full py-2 pl-3 rounded-md pr-5"
                name="password"
                id="password"
                placeholder="Enter Password"
              />
              <img
                onClick={() => setSeek(!seek)}
                src={seek ? open_eye : close_eye}
                className="w-[25px] aspect-square absolute right-[10px] top-[12px] cursor-pointer"
                alt=""
              />
            </div>
          </div>

          <div className="pt-[110px] 2xl:pt-44 w-full">
            <button
              type="submit"
              className="bg-primary font-bold text-white text-center w-full min-w-80 rounded-md py-2 px-3"
            >
              Login
            </button>
            <p className="text-center pt-2">
              Dont have an account?{" "}
              <Link to="/auth/register" className="text-primary cursor-pointer">
                Sign Up
              </Link>
            </p>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;
