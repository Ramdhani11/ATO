import { useContext } from "react";
import { chatgpt, chats, person, setting } from "../assets";
import { RoleContext } from "../layout/MainLayout";
import { toast } from "sonner";

const Menu = () => {
  const { role, togglePopup, toggleSetting, checkTheme } =
    useContext(RoleContext);
  const checkRole = role === "107";

  return (
    <div className="p-[20px] h-screen flex flex-col justify-between">
      <div className=" flex flex-col items-center">
        <div className="w-[60px] aspect-square border-[2px] border-primary rounded-[50%] bg-secondary grid place-items-center">
          <span className="text-2xl font-bold text-primary">
            {checkRole ? role : "IA"}
          </span>
        </div>
        <div className="flex flex-col gap-[10px] items-center  relative top-[30px]">
          <div
            className={`bg-lightGrey cursor-pointer rounded-lg hover:bg-lightGrey ${
              checkTheme ? "dark:hover:bg-[#A7B5C41A] dark:bg-[#A7B5C41A]" : ""
            }  w-[72px] h-[56px] py-[8px] px-[12px] grid place-items-center`}
          >
            <img src={chats} alt="chats" />
          </div>
          <div
            onClick={() => toast.info("Feature not yet available!")}
            className={`cursor-pointer rounded-lg hover:bg-lightGrey ${
              checkTheme ? "dark:hover:bg-[#A7B5C41A]" : ""
            }  w-[72px] h-[56px] py-[8px] px-[12px] grid place-items-center`}
          >
            <img src={person} alt="person" />
          </div>
          {checkRole ? (
            <div
              onClick={togglePopup}
              className={`cursor-pointer rounded-lg hover:bg-lightGrey ${
                checkTheme ? "dark:hover:bg-[#A7B5C41A]" : ""
              }  w-[72px] h-[56px] py-[8px] px-[12px] grid place-items-center`}
            >
              <img src={chatgpt} alt="chatgpt" />
            </div>
          ) : null}
        </div>
      </div>
      <div
        onClick={toggleSetting}
        className={`cursor-pointer ${
          checkTheme ? "dark:hover:bg-[#A7B5C41A]" : ""
        }  hover:bg-lightGrey rounded-lg w-[72px] h-[56px] py-[8px] px-[12px] grid place-items-center place-content-center`}
      >
        <img src={setting} alt="user" />
      </div>
    </div>
  );
};

export default Menu;
