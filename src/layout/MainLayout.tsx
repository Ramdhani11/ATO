import { createContext, useState } from "react";
import Mainbar from "../components/Mainbar";
import Menu from "../components/Menu";
import Sidebar from "../components/Sidebar";
import { ChatbarProps } from "../components/ChatBar";
import { dummy } from "../dummy/dummy.api";
import Popup from "../components/Popup";

export type GlobalContent = {
  role: string;
  toggleRole?: () => void;
  lastData?: ChatbarProps;
  setLastData?: any;
  popup?: boolean;
  togglePopup?: () => void;
};

const lastDummyData = dummy.slice(-1)[0];

export const RoleContext = createContext<GlobalContent>({
  role: "107",
});

const MainLayout = () => {
  const [role, setRole] = useState("107");
  const [lastData, setLastData] = useState<ChatbarProps>(lastDummyData);
  const [popup, setPopup] = useState(false);

  const toggleRole = () => {
    setRole(role === "107" ? "ATO" : "107");
  };

  const togglePopup = () => {
    setPopup(!popup);
  };

  return (
    <RoleContext.Provider
      value={{ role, toggleRole, lastData, setLastData, popup, togglePopup }}
    >
      {/* <div></div> */}
      <div className="bg-white overflow-hidden w-full m-auto max-w-[1600px] h-screen flex rounded-xl border-[1px] border-lightGrey relative">
        <Popup />
        <Menu />
        <Sidebar />
        <Mainbar />
      </div>
    </RoleContext.Provider>
  );
};

export default MainLayout;
