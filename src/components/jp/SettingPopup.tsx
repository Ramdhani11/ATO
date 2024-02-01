import { useContext } from "react";
import { RoleContext } from "../../layout/JapanLayout";
import { useFetcher } from "react-router-dom";
import { close } from "../../assets";
const SettingPopup = () => {
  const { checkTheme, setting, toggleSetting, toggleTheme } =
    useContext(RoleContext);

  const fetcher = useFetcher();

  return (
    <div
      className={`${
        setting ? "absolute" : "hidden"
      } top-0 right-0 left-0 bottom-0  ${
        checkTheme ? "bg-[#27374DB2]" : "bg-[#0000000c]"
      }  z-20 backdrop-blur-[2px] grid place-content-center`}
      onClick={toggleSetting}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`p-6 ${
          checkTheme ? "text-white bg-[#151D29] border-[#27374d]" : "bg-white "
        } rounded-xl flex flex-col  2xl:w-[500px] w-[400px]`}
      >
        <div className="pb-10 flex justify-between w-full relative">
          <h3 className="text-2xl w-full font-semibold text-center text-primary">
            Settings
          </h3>
          <img
            onClick={toggleSetting}
            src={close}
            className="cursor-pointer absolute right-3 top-2"
            alt="close"
          />
          {/* <ToggleButton /> */}
        </div>
        <div className="py-3 border-t-[1px] border-[#A7B5C4] flex justify-between ">
          <h4 className=" text-md  font-semibold">"外観"</h4>
          <label className="switch">
            <input type="checkbox" onChange={toggleTheme} name="theme" />
            <span className="slider round theme"></span>
          </label>
        </div>
        <div className="flex justify-between border-y-[1px] border-[#A7B5C4] py-3">
          <h4 className="text-md font-semibold">チャット自動翻訳</h4>
          <label className="switch">
            <input type="checkbox" defaultChecked name="chat" />
            <span className="slider round chat"></span>
          </label>
        </div>

        <div className="flex flex-col flex-1 justify-end gap-2 pt-20">
          <fetcher.Form method="post" action="/logout" className="flex flex-1">
            <button
              type="submit"
              className="bg-primary w-full cursor-pointer py-2 rounded-md text-center font-bold text-white"
            >
              ログアウト
            </button>
          </fetcher.Form>
          <div
            className={` border-[1px] border-red-600  cursor-pointer py-2 rounded-md text-center font-bold ${
              checkTheme ? "bg-red-600 text-white" : "bg-white text-red-600"
            } `}
          >
            アカウントを削除する
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingPopup;
