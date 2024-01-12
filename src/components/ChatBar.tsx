import { useContext, useState } from "react";
import { ai } from "../assets";
import dayjs from "dayjs";
import { RoleContext } from "../layout/MainLayout";

export interface ChatbarProps {
  id: string;
  roomId: string;
  speaker: string;
  original_message: string;
  translated_message: string;
  date: number;
}

const ChatBar = ({ data }: { data: ChatbarProps }) => {
  const [switcher, setSwitcher] = useState(false);

  const { role } = useContext(RoleContext);

  const hour = dayjs(data.date).hour();
  const minute = dayjs(data.date).minute().toString();

  const fixMinute = minute.length === 1 ? `0${minute}` : minute;

  const formatHour = hour + "." + fixMinute;

  if (role === "107") {
    return role === data.speaker ? (
      <div className="flex flex-col items-end ">
        <div className="bg-secondary w-max p-2 rounded-[10px] max-w-[400px]">
          <div className="border-b-[1px] pb-1 border-[#ccc]">
            {data.original_message}
          </div>
          <div>{data.translated_message}</div>
          <div className="text-end text-sm">{formatHour}</div>
        </div>
      </div>
    ) : (
      <div>
        <div className="bg-[#dedede] w-max p-2 rounded-[10px] max-w-[400px]">
          <div>
            {switcher ? data.original_message : data.translated_message}
          </div>
          <div className="text-end text-sm">{`${hour}.${minute}`}</div>
        </div>
        <div className="py-1 flex gap-2 items-center cursor-pointer">
          <img className="w-[24px]" src={ai} alt="arificalintelegent" />
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
          <div>{data.original_message}</div>
          <div className="text-end text-sm">{`${hour}.${minute}`}</div>
        </div>
      </div>
    ) : (
      <div>
        <div className="bg-[#dedede] w-max p-2 rounded-[10px] max-w-[400px]">
          <div className="border-b-[1px] pb-1 border-[#ccc]">
            {data.translated_message}
          </div>
          <div>{data.original_message}</div>
          <div className="text-end text-sm">{`${hour}.${minute}`}</div>
        </div>
      </div>
    );
  }
};

export default ChatBar;
