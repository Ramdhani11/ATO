import { useContext } from "react";
import { plus, search } from "../../assets";
import ContactCard from "./ContactCard";
import { RoleContext } from "../../layout/JapanLayout";
import { toast } from "sonner";

const Sidebar = () => {
  const { checkTheme, toggleList } = useContext(RoleContext);

  return (
    <div
      className={`w-[444px] h-screen p-6 flex flex-col items-center gap-6 border-r-[2px] border-l-[2px] ${
        checkTheme ? "border-[#27374d] text-white" : "border-lightGrey"
      }`}
    >
      <div className="flex w-full items-center justify-between">
        <h1 className="text-[32px] font-bold">"メッセージ"</h1>
        <div
          onClick={toggleList}
          className="w-[32px] h-[32px] bg-primary rounded-[50%] cursor-pointer grid place-items-center"
        >
          <img src={plus} alt="plus" />
        </div>
      </div>
      <div
        onClick={() => toast.info("Feature not yet available!")}
        className={`${
          checkTheme ? "bg-[#242c39]" : "bg-lightGrey"
        }  cursor-pointer flex w-[412px] items-center gap-4 py-4 px-4 rounded-[10px] `}
      >
        <img src={search} alt="search-icons" />
        <div>"検索"</div>
      </div>
      <div className="flex flex-col gap-[6px]">
        <ContactCard />

        {/*  */}
      </div>
    </div>
  );
};

export default Sidebar;
