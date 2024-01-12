import { useContext } from "react";
import { RoleContext } from "../layout/MainLayout";

interface ButtonProps {
  bgColor: string;
  textColor: string;
  textContent: string;
}

const Button = ({ bgColor, textColor, textContent }: ButtonProps) => {
  const { togglePopup } = useContext(RoleContext);
  return (
    <div
      onClick={togglePopup}
      className={`cursor-pointer bg-${bgColor} text-${textColor} text-md font-semibold border-[1px] border-${textColor} py-1 px-3 rounded-md`}
    >
      {textContent}
    </div>
  );
};

export default Button;
