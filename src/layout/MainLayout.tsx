import { createContext, useState } from "react";
import Mainbar from "../components/Mainbar";
import Menu from "../components/Menu";
import Sidebar from "../components/Sidebar";

export type GlobalContent = {
  role: string;
  toggleRole?: () => void;
};

export const RoleContext = createContext<GlobalContent>({
  role: "107",
});

const MainLayout = () => {
  const [role, setRole] = useState("107");

  const toggleRole = () => {
    setRole(role === "107" ? "ATO" : "107");
  };

  return (
    <RoleContext.Provider value={{ role, toggleRole }}>
      {/* <div></div> */}
      <div className="bg-white w-full m-auto max-w-[1600px] h-screen flex rounded-xl border-[1px] border-lightGrey">
        <Menu />
        <Sidebar />
        <Mainbar />
      </div>
    </RoleContext.Provider>
  );
};

export default MainLayout;
