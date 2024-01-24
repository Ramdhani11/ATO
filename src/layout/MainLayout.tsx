import { createContext, useEffect, useState } from "react";
import Mainbar from "../components/Mainbar";
import Menu from "../components/Menu";
import Sidebar from "../components/Sidebar";
import { ChatbarProps } from "../components/ChatBar";
import Popup from "../components/Popup";
import { getAll } from "../api/conversation.api";

export type GlobalContent = {
  role: string;
  toggleRole?: () => void;
  lastData?: ChatbarProps;
  setLastData?: any;
  popup?: boolean;
  togglePopup?: () => void;
};

export const RoleContext = createContext<GlobalContent>({
  role: "107",
});

const MainLayout = () => {
  const [role, setRole] = useState("107");
  const [lastData, setLastData] = useState<ChatbarProps>();
  const [popup, setPopup] = useState(false);

  const lastConversation = async () => {
    const datas = await getAll();
    return datas.slice(-1)[0];
  };

  useEffect(() => {
    lastConversation().then((res) => setLastData(res));
  }, [lastData]);

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
