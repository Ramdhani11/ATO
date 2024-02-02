import { useContext } from "react";
import { onLoad } from "../../assets";
import { RoleContext } from "../../layout/JapanLayout";

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
        連絡先を選択して新しい会話を開始します
      </h1>
    </div>
  );
};

export default OnLoad;
