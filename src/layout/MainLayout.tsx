import { createContext, useState } from "react";
import Mainbar from "../components/Mainbar";
import Menu from "../components/Menu";
import Sidebar from "../components/Sidebar";
import { ChatbarProps } from "../components/ChatBar";
import Popup from "../components/Popup";
import { Toaster } from "sonner";
import SettingPopup from "../components/SettingPopup";

export type GlobalContent = {
  role: string;
  toggleRole?: () => void;
  lastData?: ChatbarProps;
  setLastData?: any;
  popup?: boolean;
  togglePopup?: () => void;
  theme: string;
  toggleTheme?: () => void;
  toggleSetting?: () => void;
  checkTheme?: boolean;
  setting: boolean;
};

export const RoleContext = createContext<GlobalContent>({
  role: "107",
  theme: "light",
  setting: false,
});

const MainLayout = () => {
  const [role, setRole] = useState("107");
  const [popup, setPopup] = useState(false);
  const [theme, setTheme] = useState("light");
  const [setting, setSetting] = useState(false);

  const checkTheme = theme === "dark";

  const toggleRole = () => {
    setRole(role === "107" ? "ATO" : "107");
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

  return (
    <RoleContext.Provider
      value={{
        role,
        toggleRole,
        popup,
        togglePopup,
        theme,
        toggleTheme,
        checkTheme,
        toggleSetting,
        setting,
      }}
    >
      {/* <div></div> */}
      <div
        className={`duration-[400ms] ease-out ${
          checkTheme
            ? "bg-[#151D29] border-[#27374d]"
            : "border-lightGrey bg-white"
        }  overflow-hidden w-full m-auto max-w-[1600px] h-screen flex lineMax:rounded-xl border-[1px]  relative`}
      >
        <Menu />
        <Sidebar />
        <Mainbar />
        <Popup />
        <Toaster position="top-center" duration={800} />
        <SettingPopup />
      </div>
    </RoleContext.Provider>
  );
};

export default MainLayout;
