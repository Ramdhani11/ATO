import { useContext } from "react";
import { chatgpt, chats, person, user } from "../assets";
import { RoleContext } from "../layout/MainLayout";

const Menu = () => {
  const { toggleRole, role, togglePopup } = useContext(RoleContext);
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
          <div className="cursor-pointer w-[72px] h-[56px] py-[8px] px-[12px] grid place-items-center bg-lightGrey rounded-lg">
            <img src={chats} alt="chats" />
          </div>
          <div
            onClick={() => alert("Feature not yet available!")}
            className="cursor-pointer rounded-lg hover:bg-lightGrey w-[72px] h-[56px] py-[8px] px-[12px] grid place-items-center"
          >
            <img src={person} alt="person" />
          </div>
          {checkRole ? (
            <div
              onClick={togglePopup}
              className="cursor-pointer rounded-lg hover:bg-lightGrey w-[72px] h-[56px] py-[8px] px-[12px] grid place-items-center"
            >
              <img src={chatgpt} alt="chatgpt" />
            </div>
          ) : null}
        </div>
      </div>
      <div
        onClick={toggleRole}
        className="cursor-pointer hover:bg-lightGrey rounded-lg w-[72px] h-[56px] py-[8px] px-[12px] grid place-items-center"
      >
        <img src={user} alt="user" />
      </div>
    </div>
  );
};

export default Menu;
