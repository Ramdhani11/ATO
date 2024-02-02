import { useContext } from "react";
import { onLoad } from "../assets";
import { RoleContext } from "../layout/MainLayout";

const OnLoad = () => {
  const { checkTheme } = useContext(RoleContext);
  return (
    <div className="flex flex-1 gap-20 flex-col relative  justify-center items-center">
      <img src={onLoad} alt="load" />
      <h1
        className={`${
          checkTheme ? "text-white" : "text-black"
        } text-xl  font-semibold`}
      >
        Select a contact to initiate a new conversation
      </h1>
    </div>
  );
};

export default OnLoad;
