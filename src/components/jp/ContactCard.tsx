import { useContext } from "react";
import { RoleContext } from "../../layout/JapanLayout";
import dayjs from "dayjs";
import useSWR from "swr";
import { fecther } from "./Mainbar";
import Cookies from "js-cookie";

// interface CardProps {
//   active?: boolean;
// }

const ContactCard = () => {
  const { checkTheme } = useContext(RoleContext);

  const { data, isLoading } = useSWR(
    "/conversations-by-chat-room-id/1",
    fecther
  );
  const lastData = data?.slice(-1)[0];

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

  const transtaledMessage = lastData
    ? truncateString(lastData.japanese_text, 20)
    : "";

  const headMessage =
    lastData?.user_id === Number(Cookies.get("userId"))
      ? `あなた : ${transtaledMessage} `
      : transtaledMessage;

  return (
    <div
      className={`w-[412px] px-[8px] flex gap-4 items-center  ${
        checkTheme ? "bg-[#27374d]" : "bg-secondary"
      } py-4 rounded-[10px]`}
    >
      <div className="w-[50px] h-[50px] rounded-[50%] border-[2px] border-primary bg-secondary text-xl leading-[45px] text-center text-primary font-bold">
        YU
      </div>
      <div className="flex flex-col flex-1">
        <div className="flex justify-between font-semibold">
          <h3>107 - Anwar</h3>
          <h3>{isLoading ? "" : !formatHour ? "" : formatHour}</h3>
        </div>
        <div className="flex justify-between">
          <span className={`${checkTheme ? "text-[#8198a8]" : "text-black"}`}>
            {isLoading ? "Wait..." : !headMessage ? "" : headMessage}
          </span>

          <div className="w-[20px] h-[20px] rounded-[50%] text-center leading-[20px] bg-primary text-white font-semibold">
            1
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
