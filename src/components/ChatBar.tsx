import { useContext, useState } from "react";
import { ai, open_logo } from "../assets";
import dayjs from "dayjs";
import { RoleContext } from "../layout/MainLayout";

export interface ChatbarProps {
  id: string;
  roomId: string;
  speaker: string;
  original_message: string;
  translated_message: string;
  english_text: string;
  japanese_text: string;
  date: number;
  section: string;
}

const ChatBar = ({ data }: { data: ChatbarProps }) => {
  const [switcher, setSwitcher] = useState(false);

  const { role } = useContext(RoleContext);

  const hour = dayjs(data.date).hour();
  const minute = dayjs(data.date).minute().toString();

  const fixMinute = minute.length === 1 ? `0${minute}` : minute;

  const formatHour = hour + "." + fixMinute;

  const cekDate = data.section === "Today";

  if (role === "107") {
    return role === data.speaker ? (
      <div className="flex flex-col items-end ">
        <div className="bg-secondary w-max p-2 rounded-[10px] max-w-[400px]">
          <div className="border-b-[1px] pb-1 border-[#ccc]">
            {data.english_text}
          </div>
          <div>{data.japanese_text}</div>
          <div className="text-end text-sm">{`${data.section} ${formatHour}`}</div>
        </div>
      </div>
    ) : (
      <div>
        <div className="bg-[#dedede] w-max p-2 rounded-[10px] max-w-[400px]">
          <div>{switcher ? data.japanese_text : data.english_text}</div>
          <div className="text-end text-sm">
            <div className="text-end text-sm">{`${data.section} ${formatHour}`}</div>
          </div>
        </div>
        <div className="py-1 flex w-max gap-2 items-center cursor-pointer">
          <img className="w-[20px]" src={open_logo} alt="arificalintelegent" />
          <span className="text-sm" onClick={() => setSwitcher(!switcher)}>
            Show {switcher ? "Translate" : "Original"}
          </span>
        </div>
      </div>
    );
  } else {
    return role === data.speaker ? (
      <div className="flex flex-col items-end">
        <div className="bg-secondary w-max p-2 rounded-[10px] max-w-[400px]">
          <div>{data.japanese_text}</div>
          <div className="text-end text-sm">
            <div className="text-end text-sm">{`${
              cekDate ? "今日" : data.section
            } ${formatHour}`}</div>
          </div>
        </div>
      </div>
    ) : (
      <div>
        <div className="bg-[#dedede] w-max p-2 rounded-[10px] max-w-[400px]">
          <div className="border-b-[1px] pb-1 border-[#ccc]">
            {data.japanese_text}
          </div>
          <div>{data.english_text}</div>
          <div className="text-end text-sm">
            <div className="text-end text-sm">{`${
              cekDate ? "今日" : "ケマリン"
            } ${formatHour}`}</div>
          </div>
        </div>
      </div>
    );
  }
};

export default ChatBar;
