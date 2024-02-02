import { createContext, useState } from "react";
import Mainbar from "../components/Mainbar";
import Menu from "../components/Menu";
import Sidebar from "../components/Sidebar";
import Popup from "../components/Popup";
import { Toaster } from "sonner";
import SettingPopup from "../components/SettingPopup";
import Coookies from "js-cookie";
import { Navigate } from "react-router-dom";
import ListContact from "../components/listContact";
import OnLoad from "../components/OnLoad";

export type GlobalContent = {
  popup?: boolean;
  togglePopup?: () => void;
  theme: string;
  toggleTheme?: () => void;
  toggleSetting?: () => void;
  checkTheme?: boolean;
  setting: boolean;
  list: boolean;
  toggleList?: () => void;
};

export const RoleContext = createContext<GlobalContent>({
  theme: "light",
  setting: false,
  list: false,
});

const MainLayout = () => {
  const [popup, setPopup] = useState(false);
  const [theme, setTheme] = useState("light");
  const [setting, setSetting] = useState(false);
  const [list, setList] = useState(false);

  const checkTheme = theme === "dark";

  const toggleList = () => {
    setList(!list);
  };

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const togglePopup = () => {
    setPopup(!popup);
  };
  const toggleSetting = () => {
    setSetting(!setting);
  };

  if (!Coookies.get("access")) {
    return <Navigate to={"/"} replace={true} />;
  }

  return (
    <RoleContext.Provider
      value={{
        popup,
        togglePopup,
        theme,
        toggleTheme,
        checkTheme,
        toggleSetting,
        setting,
        list,
        toggleList,
      }}
    >
      {/* <div></div> */}
      <div
        className={`duration-[400ms] ease-out ${
          checkTheme
            ? "bg-[#151D29] border-[#27374d]"
            : "border-lightGrey bg-white"
        }  overflow-hidden w-full m-auto max-w-[1600px] h-screen flex lineMax:rounded-xl border-[1px]  relative `}
      >
        <Menu />
        {list ? <ListContact /> : <Sidebar />}

        {list ? <OnLoad /> : <Mainbar />}
        {/* <Mainbar /> */}
        <Popup />
        <Toaster position="top-center" duration={800} />
        <SettingPopup />
      </div>
    </RoleContext.Provider>
  );
};

export default MainLayout;
