import { useContext } from "react";
import { chats, person, setting } from "../../assets";
import { RoleContext } from "../../layout/JapanLayout";
import { toast } from "sonner";

const Menu = () => {
  const { toggleSetting, checkTheme } = useContext(RoleContext);

  return (
    <div className="p-[20px] h-screen flex flex-col justify-between">
      <div className=" flex flex-col items-center">
        <div className="w-[60px] aspect-square border-[2px] border-primary rounded-[50%] bg-secondary grid place-items-center">
          <span className="text-2xl font-bold text-primary">IA</span>
        </div>
        <div className="flex flex-col gap-[10px] items-center  relative top-[30px]">
          <div
            className={`cursor-pointer rounded-lg  ${
              checkTheme
                ? "hover:bg-[#A7B5C41A] bg-[#A7B5C41A]"
                : "bg-lightGrey hover:bg-lightGrey"
            }  w-[72px] h-[56px] py-[8px] px-[12px] grid place-items-center`}
          >
            <img src={chats} alt="chats" />
          </div>
          <div
            onClick={() => toast.info("Feature not yet available!")}
            className={`cursor-pointer rounded-lg  ${
              checkTheme ? "hover:bg-[#A7B5C41A]" : "hover:bg-lightGrey"
            }  w-[72px] h-[56px] py-[8px] px-[12px] grid place-items-center`}
          >
            <img src={person} alt="person" />
          </div>
        </div>
      </div>
      <div
        onClick={toggleSetting}
        className={`cursor-pointer ${
          checkTheme ? "hover:bg-[#A7B5C41A]" : "hover:bg-lightGrey"
        }   rounded-lg w-[72px] h-[56px] py-[8px] px-[12px] grid place-items-center place-content-center`}
      >
        <img src={setting} alt="user" />
      </div>
    </div>
  );
};

export default Menu;
