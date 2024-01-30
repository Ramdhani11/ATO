import { KeyboardEvent, useContext, useEffect, useRef, useState } from "react";
import { arrow, gpt, pin } from "../assets";
import Navbar from "./Navbar";
import ChatBar, { ChatbarProps } from "./ChatBar";
import { RoleContext } from "../layout/MainLayout";
import { axiosInstance } from "../config/axiosInstance";
import useSWR from "swr";
import dayjs from "dayjs";
import { toast } from "sonner";

export const fecther = (url: string) =>
  axiosInstance.get(url).then((res) => res.data);

const Mainbar = () => {
  const { data, mutate, isLoading } = useSWR("/conversations", fecther);

  const [text, setText] = useState("");
  const [loader, setLoader] = useState(false);

  const refDiv = useRef<HTMLDivElement>(null);

  const { toggleRole, role, checkTheme } = useContext(RoleContext);

  //   const completion = await openai.chat.completions.create({
  //     model: "gpt-3.5-turbo",
  //     messages: [
  //       {
  //         role: "system",
  //         content:
  //           "translate following sentence to japanese without the romanji if the sentence in english, and do the opposite if sentence in japanese. Show only the translation:" +
  //           chat,
  //       },
  //     ],
  //   });
  //   return completion.choices[0]?.message.content;
  // };

  const postMessage = async (text: string) => {
    try {
      setLoader(true);
      await axiosInstance.post("/conversations", {
        user_id: "user1",
        speaker: role,
        company_id: 123,
        chat_room_id: "room13",
        original_message: text,
        date: Date.now(),
      });
      setText("");
      setLoader(false);
      mutate();
    } catch (error: any) {
      console.log(error);
      setLoader(false);
    }
  };

  const checkRole = role === "107";

  useEffect(() => {
    if (data?.length) {
      refDiv.current?.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }
  }, [toggleRole, data, loader, isLoading]);

  const handleEnter = async (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      if (!text || text.length < 1) {
        alert("Please enter words!");
        return;
      }
      await postMessage(text);
    }
  };

  const handleSubmit = async () => {
    if (!text || text.length < 1) {
      alert("Please enter words!");
      return;
    }
    await postMessage(text);
  };

  const filterData = data?.map((data: ChatbarProps) => {
    const { date, english_text, japanese_text, speaker, id } = data;
    if (
      dayjs(Date.now()).format("D/MM/YYYY") === dayjs(date).format("D/MM/YYYY")
    ) {
      return {
        id,
        date,
        english_text,
        japanese_text,
        speaker,
        section: "Today",
      };
    } else {
      return {
        id,
        date,
        english_text,
        japanese_text,
        speaker,
        section: "Yesterday",
      };
    }
  });

  return (
    <div className=" flex flex-1 flex-col relative">
      <Navbar />
      {/* chat board */}

      <div
        className={`flex-1 px-3 py-3 ${
          checkTheme && "dark:text-white scroll"
        } flex flex-col gap-2 overflow-hidden overflow-y-auto`}
      >
        {filterData?.map((data: ChatbarProps) => {
          return <ChatBar key={data.id} data={data} />;
        })}
        {loader && (
          <div className="flex justify-end">
            <div className="loader" />
          </div>
        )}
        <div ref={refDiv}></div>
      </div>
      <div
        className={`bg-lightGrey ${checkTheme && "dark:bg-[#27374d] "} p-3 `}
      >
        <div className="pb-3">
          <div className="">
            <div className="flex gap-2">
              <div className="w-[20px] h-[20px] overflow-hidden rounded-[50%]">
                <img src={gpt} alt="gpt-icon" />
              </div>
              <span className="text-[#8a8a8a] dark:text-[#9DB2BF] text-sm font-semibold">
                {checkRole
                  ? "Auto-translate by ChatGPT-4"
                  : "ChatGPT-4 による自動翻訳"}
              </span>
            </div>
          </div>
        </div>
        <div className="flex gap-3 items-end ">
          <div
            onClick={() => toast.info("Feature not yet available!")}
            className="py-1 cursor-pointer"
          >
            <img className="w-[20px]" src={pin} alt="pin" />
          </div>

          <input
            name="chatbar"
            value={text}
            onKeyDown={(e) => handleEnter(e)}
            type="text"
            className={`bg-white ${
              checkTheme &&
              "dark:bg-[#242c39] dark:text-white dark:border-[#242c39]"
            } p-2 focus:outline-none flex-1 border-[1px] rounded-[10px] border-[#ccc]`}
            onChange={(e) => setText(e.target.value)}
          />
          <div className="py-1">
            <div
              onClick={() => !loader && handleSubmit()}
              className="cursor-pointer hover:bg-blue-900 w-[34px] h-[34px] bg-primary rounded-[50%] grid place-items-center"
            >
              <img className="w-[18px]" src={arrow} alt="arrow" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mainbar;
