import { useState } from "react";
import { close_eye, logo_chat, open_eye } from "../assets";
import { Link } from "react-router-dom";

const Register = () => {
  const [seek, setSeek] = useState(true);
  const [confirm, setConfirm] = useState(true);

  return (
    <div className="w-full flex flex-col items-center justify-center">
      {/* <div className="flex p-7 justify-end">
        <label htmlFor="switch">SHi</label>
        <input type="checkbox" name="" id="switch" />
      </div> */}
      <div className="min-w-max w-[400px] hd:w-[440px] 2xl:w-[500px] p-5 flex flex-col justify-center items-center ">
        <div className="w-[100px] h-[100px]">
          <img src={logo_chat} alt="t-chat" />
        </div>
        <div className="pt-6 pb-10">
          <h1 className="font-bold text-2xl">Register a New Account</h1>
        </div>
        <form className="w-full flex flex-col hd:gap-3 fhd:gap-4">
          <div className="flex flex-col w-full">
            <label htmlFor="email" className="font-semibold">
              Email
            </label>
            <input
              autoComplete="false"
              id="email"
              type="email"
              className="border-[1px] focus:outline-none mt-1 border-[#8a8a8a] py-2 px-3 rounded-md"
              name="email"
              placeholder="Email Address"
            />
          </div>
          <div className="flex flex-col  ">
            <label className="font-semibold" htmlFor="password">
              Password
            </label>
            <div className="w-full relative">
              <input
                id="password"
                type={seek ? "password" : "text"}
                className="border-[1px] mt-1 focus:outline-none border-[#8a8a8a] w-full py-2 pl-3 rounded-md pr-5"
                name="password"
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
          <div className="flex flex-col  ">
            <label className="font-semibold" htmlFor="secondPass">
              Confirm Password
            </label>
            <div className="w-full relative">
              <input
                id="secondPass"
                type={confirm ? "password" : "text"}
                className="border-[1px] mt-1 focus:outline-none border-[#8a8a8a] w-full py-2 pl-3 rounded-md pr-5"
                name="confirm"
                placeholder="Re-enter Password"
              />
              <img
                onClick={() => setConfirm(!confirm)}
                src={confirm ? open_eye : close_eye}
                className="w-[25px] aspect-square absolute right-[10px] top-[12px] cursor-pointer"
                alt=""
              />
            </div>
          </div>
          <div className="flex flex-col  ">
            <label htmlFor="select" className="font-semibold">
              Company
            </label>
            <select
              className="border-[1px] mt-1 focus:outline-none border-[#8a8a8a] w-full py-2 pl-3 rounded-md pr-5 text-[#8a8a8a] "
              name="select"
              id="select"
            >
              <option value=" ">Select Your Company</option>
              <option value="ATO">ATO</option>
              <option value="107">107</option>
            </select>
          </div>
          <div className="sm:pt-[20px] fhd:pt-32  2xl:pt-44 w-full">
            <button
              type="submit"
              className="bg-primary font-bold text-white text-center w-full min-w-80 rounded-md py-2 px-3"
            >
              Submit
            </button>
            <p className="text-center pt-2">
              Already have an account?{" "}
              <Link to="/auth" className="text-primary cursor-pointer">
                Sign In
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
