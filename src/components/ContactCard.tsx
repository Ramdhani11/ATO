import { useContext } from "react";
import { RoleContext } from "../layout/MainLayout";

interface CardProps {
  active?: boolean;
}

const ContactCard = ({ active }: CardProps) => {
  const { role } = useContext(RoleContext);

  const checkRole = role === "107";

  return (
    <div
      className={`w-[412px] px-[8px] flex gap-4 items-center ${
        active && "bg-secondary"
      } py-4 rounded-[10px]`}
    >
      <div className="w-[50px] h-[50px] rounded-[50%] border-[2px] border-primary bg-secondary text-xl leading-[45px] text-center text-primary font-bold">
        {checkRole ? "YU" : "VI"}
      </div>
      <div className="flex flex-col flex-1">
        <div className="flex justify-between font-semibold">
          <h3>{checkRole ? "ATO - Yuki" : "107 - Vincent"}</h3>
          <h3>12.00 PM</h3>
        </div>
        <div className="flex justify-between">
          <span>Not bad, keep going</span>
          <div className="w-[20px] h-[20px] rounded-[50%] text-center leading-[20px] bg-primary text-white font-semibold">
            1
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
