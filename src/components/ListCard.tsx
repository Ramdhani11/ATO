import { useContext } from "react";
import { RoleContext } from "../layout/MainLayout";
imp;

const ListCard = () => {
  const { checkTheme } = useContext(RoleContext);

  return (
    <div
      className={`cursor-pointer  w-[412px] px-[8px] flex gap-4 items-center py-4  ${
        checkTheme
          ? "bg-[#151d29] hover:bg-[#4c6385] "
          : "bg-white hover:bg-secondary"
      }  rounded-[10px] transition-all`}
    >
      <div className="w-[50px] h-[50px] rounded-[50%] border-[2px] border-primary bg-secondary text-xl leading-[45px] text-center text-primary font-bold">
        YU
      </div>
      <div className="flex flex-col flex-1">
        <div className="flex justify-between font-semibold">
          <h3>ATO - Tezuka</h3>
        </div>
      </div>
    </div>
  );
};

export default ListCard;
