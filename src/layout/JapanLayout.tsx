import { createContext, useState } from "react";

import { Toaster } from "sonner";
import Coookies from "js-cookie";
import { Navigate } from "react-router-dom";
import { Mainbar, Menu, SettingPopup, Sidebar } from "../components/jp";

export type GlobalContent = {
  theme: string;
  toggleTheme?: () => void;
  toggleSetting?: () => void;
  checkTheme?: boolean;
  setting: boolean;
};

export const RoleContext = createContext<GlobalContent>({
  theme: "light",
  setting: false,
});

const JapanLayout = () => {
  const [theme, setTheme] = useState("light");
  const [setting, setSetting] = useState(false);

  const checkTheme = theme === "dark";

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  const toggleSetting = () => {
    setSetting(!setting);
  };

  if (!Coookies.get("access")) {
    return <Navigate to={"/"} replace={true} />;
  }

  return (
    <RoleContext.Provider
      value={{ theme, toggleTheme, checkTheme, toggleSetting, setting }}
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
        <Sidebar />
        <Mainbar />
        <Toaster position="top-center" duration={800} />
        <SettingPopup />
      </div>
    </RoleContext.Provider>
  );
};

export default JapanLayout;
