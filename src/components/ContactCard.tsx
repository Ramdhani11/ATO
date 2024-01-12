import { useContext } from "react";
import { RoleContext } from "../layout/MainLayout";
import dayjs from "dayjs";

interface CardProps {
  active?: boolean;
}

const ContactCard = ({ active }: CardProps) => {
  const { role, lastData } = useContext(RoleContext);

  const checkRole = role === "107";

  const hour = dayjs(lastData?.date).hour();
  const minute = dayjs(lastData?.date).minute().toString();
  const fixMinute = minute.length === 1 ? `0${minute}` : minute;
  const formatHour = hour + "." + fixMinute;

  function truncateString(str: string, num: number) {
    if (str.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  }

  const originalMessage = lastData
    ? truncateString(lastData.original_message, 30)
    : null;
  const transtaledMessage = lastData
    ? truncateString(lastData.translated_message, 30)
    : null;

  const headMessage =
    role === lastData?.speaker
      ? `You : ${originalMessage} `
      : transtaledMessage;

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
          <h3>{formatHour}</h3>
        </div>
        <div className="flex justify-between">
          <span>{headMessage}</span>
          <div className="w-[20px] h-[20px] rounded-[50%] text-center leading-[20px] bg-primary text-white font-semibold">
            1
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
