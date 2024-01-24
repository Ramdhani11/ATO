import { createContext, useState } from "react";
import Mainbar from "../components/Mainbar";
import Menu from "../components/Menu";
import Sidebar from "../components/Sidebar";
import { ChatbarProps } from "../components/ChatBar";
import Popup from "../components/Popup";

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
  const [popup, setPopup] = useState(false);

  // useEffect(() => {
  //   lastConversation().then((res) => setLastData(res));
  // }, []);

  const toggleRole = () => {
    setRole(role === "107" ? "ATO" : "107");
  };

  const togglePopup = () => {
    setPopup(!popup);
  };

  return (
    <RoleContext.Provider value={{ role, toggleRole, popup, togglePopup }}>
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
