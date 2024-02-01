import { useContext } from "react";
// import { open_logo, open_logo_dark } from "../../assets";
import dayjs from "dayjs";
import { RoleContext } from "../../layout/JapanLayout";
import Cookies from "js-cookie";

export interface ChatbarProps {
  id: string;
  roomId: string;
  speaker: string;
  original_message: string;
  translated_message: string;
  english_text: string;
  japanese_text: string;
  date: number;
}

const ChatBar = ({ data }: { data: ChatbarProps }) => {
  const { checkTheme } = useContext(RoleContext);

  const hour = dayjs(data.date).hour();
  const minute = dayjs(data.date).minute().toString();

  const fixMinute = minute.length === 1 ? `0${minute}` : minute;

  const formatHour = hour + "." + fixMinute;

  if (data.speaker === Cookies.get("name")) {
    return (
      <div className="flex flex-col items-end">
        <div
          className={`${
            checkTheme ? "bg-[#27374d]" : "bg-secondary"
          }  w-max p-2 rounded-[10px] max-w-[400px]`}
        >
          <div>{data.japanese_text}</div>
          <div className="text-end text-sm">
            <div className="text-end text-sm">{formatHour}</div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div>
      <div
        className={`${
          checkTheme ? "bg-[#526d82]" : "bg-[#dedede]"
        }   w-max p-2 rounded-[10px] max-w-[400px]`}
      >
        <div className="border-b-[1px] pb-1 border-[#ccc]">
          {data.japanese_text}
        </div>
        <div className="text-md font-normal">{data.english_text}</div>
        <div className="text-end text-sm">
          <div className="text-end text-sm">{formatHour}</div>
        </div>
      </div>
    </div>
  );
};

export default ChatBar;
