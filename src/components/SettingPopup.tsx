import { useContext } from "react";
import { RoleContext } from "../layout/MainLayout";
import { useFetcher } from "react-router-dom";
const SettingPopup = () => {
  const { checkTheme, role, setting, toggleSetting, toggleTheme, toggleRole } =
    useContext(RoleContext);

  const checkRole = role === "107";

  const fetcher = useFetcher();

  return (
    <div
      className={`${
        setting ? "absolute" : "hidden"
      } top-0 right-0 left-0 bottom-0 bg-[#0000000c] ${
        checkTheme && "dark:bg-[#27374DB2]"
      }  z-20 backdrop-blur-[2px] grid place-content-center`}
      onClick={toggleSetting}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`p-6 bg-white ${
          checkTheme &&
          "dark:text-white dark:bg-[#151D29] dark:border-[#27374d]"
        } rounded-xl flex flex-col gap-3 2xl:w-[500px] w-[400px]`}
      >
        <div className="pb-3 flex justify-between w-full">
          <h3 className="text-xl w-full font-semibold text-center">Settings</h3>
          {/* <ToggleButton /> */}
        </div>
        <div className="flex justify-between ">
          <h4 className=" text-md pb-3 font-semibold">
            {checkRole ? "Appearance" : "外観"}
          </h4>
          <label className="switch">
            <input type="checkbox" onChange={toggleTheme} name="theme" />
            <span className="slider round theme"></span>
          </label>
        </div>
        <div className="flex justify-between ">
          <h4 className="text-md pb-3 font-semibold">
            {checkRole ? "Chat Auto-Translation" : "チャット自動翻訳"}
          </h4>
          <label className="switch">
            <input type="checkbox" defaultChecked name="chat" />
            <span className="slider round"></span>
          </label>
        </div>
        <div className="flex justify-between ">
          <div className="leading-4">
            <h4 className="text-md font-semibold">
              {checkRole ? "Developer Setting" : "開発者設定"}{" "}
            </h4>
            <span className="text-sm font-semibold">
              {checkRole ? `${role} Side` : "ATO側"}
            </span>
          </div>
          <label className="switch">
            <input type="checkbox" onChange={toggleRole} name="chat" />
            <span className="slider round"></span>
          </label>
        </div>

        <div className="flex flex-col flex-1 justify-end gap-2 pt-20">
          <fetcher.Form method="post" action="/logout" className="flex flex-1">
            <button
              type="submit"
              className="bg-primary w-full cursor-pointer py-2 rounded-md text-center font-bold text-white"
            >
              {checkRole ? "Logout" : "ログアウト"}
            </button>
          </fetcher.Form>
          <div
            className={`bg-white border-[1px] border-red-600  cursor-pointer py-2 rounded-md text-center font-bold ${
              checkTheme && "dark:bg-red-600 dark:text-white"
            } text-red-600`}
          >
            {checkRole ? "Delete Account" : "アカウントを削除する"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingPopup;
