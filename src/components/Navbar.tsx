import { useContext } from "react";
import { RoleContext } from "../layout/MainLayout";

const Navbar = () => {
  const { checkTheme } = useContext(RoleContext);

  return (
    <div
      className={`border-b-[1px] ${
        checkTheme
          ? "bg-[#27374d] border-[#27374d] text-white shadow-none"
          : "bg-[#F8F8F8] border-lightGrey  shadow-gray-100"
      }   shadow-md w-full h-max px-3 py-4 flex gap-4 items-center `}
    >
      <div className="w-[50px] h-[50px] rounded-[50%] border-[2px] border-primary bg-secondary text-xl leading-[45px] text-center text-primary font-bold">
        YU
      </div>
      <div className="flex flex-col leading-3">
        <h3 className="text-lg  font-semibold">ATO - Tezuka</h3>
        <span className="text-slate-400">online</span>
      </div>
    </div>
  );
};

export default Navbar;
