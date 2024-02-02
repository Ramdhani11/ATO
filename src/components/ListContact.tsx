import { useContext } from "react";
import { close, search } from "../assets";
import { RoleContext } from "../layout/MainLayout";
import { toast } from "sonner";
import ListCard from "./ListCard";

const ListContact = () => {
  const { checkTheme, toggleList } = useContext(RoleContext);

  return (
    <div
      className={`${
        checkTheme ? "bg-[#27374D]" : "bg-[#f8f8f8]"
      }  w-[444px] h-screen p-6 flex flex-col items-center gap-6 border-r-[2px] border-l-[2px] ${
        checkTheme ? "border-[#27374d] text-white" : "border-lightGrey"
      }`}
    >
      <div className="flex items-center w-full justify-between">
        <h1 className="text-[32px] font-bold">New Chat</h1>
        <div
          onClick={toggleList}
          className="w-[32px] h-[32px] rounded-[50%] cursor-pointer grid place-items-center"
        >
          <img src={close} alt="plus" />
        </div>
      </div>
      <div
        onClick={() => toast.info("Feature not yet available!")}
        className={`${
          checkTheme ? "bg-[#242c39]" : "bg-slate-200"
        }  cursor-pointer flex w-[412px] items-center gap-4 py-4 px-4 rounded-[10px] `}
      >
        <img src={search} alt="search-icons" />
        <div>Search</div>
      </div>
      <div className="flex flex-col gap-[6px] overflow-y-auto">
        <ListCard />

        {/*  */}
      </div>
    </div>
  );
};

export default ListContact;
