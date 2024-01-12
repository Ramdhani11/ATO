import { useContext } from "react";
import { plus, search } from "../assets";
import ContactCard from "./ContactCard";
import { RoleContext } from "../layout/MainLayout";

const Sidebar = () => {
  const { role } = useContext(RoleContext);
  return (
    <div className="w-[444px] h-screen p-6 flex flex-col items-center gap-6 border-r-[2px] border-l-[2px] border-lightGrey">
      <div className="flex items-center gap-[200px]">
        <h1 className="text-[32px] font-bold">
          {role === "107" ? "Messages" : "メッセージ"}
        </h1>
        <div
          onClick={() => alert("Feature not yet available!")}
          className="w-[32px] h-[32px] bg-primary rounded-[50%] cursor-pointer grid place-items-center"
        >
          <img src={plus} alt="plus" />
        </div>
      </div>
      <div
        onClick={() => alert("Feature not yet available!")}
        className="cursor-pointer flex w-[412px] items-center gap-4 py-4 px-4 rounded-[10px] bg-lightGrey"
      >
        <img src={search} alt="search-icons" />
        <div>{role === "107" ? "Search" : "検索"}</div>
      </div>
      <div className="flex flex-col gap-[6px]">
        <ContactCard active={true} />

        {/*  */}
      </div>
    </div>
  );
};

export default Sidebar;
