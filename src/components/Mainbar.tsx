import { KeyboardEvent, useContext, useEffect, useRef, useState } from "react";
import { arrow, gpt, pin } from "../assets";
import Navbar from "./Navbar";
import ChatBar, { ChatbarProps } from "./ChatBar";
import { RoleContext } from "../layout/MainLayout";
import { openai } from "../utils/configuration.api";
import { axiosInstance } from "../config/axiosInstance";
import useSWR from "swr";

export const fecther = (url: string) =>
  axiosInstance.get(url).then((res) => res.data);

const Mainbar = () => {
  const { data, mutate } = useSWR("/conversations", fecther);

  const [text, setText] = useState("");
  const [loader, setLoader] = useState(false);
  // const [datas, setDatas] = useState<ChatbarProps[]>();

  const refDiv = useRef<HTMLDivElement>(null);

  const { toggleRole, role } = useContext(RoleContext);

  const apis = async (chat: string) => {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "translate following sentence to japanese without the romanji if the sentence in english, and do the opposite if sentence in japanese. Show only the translation:" +
            chat,
        },
      ],
    });
    return completion.choices[0]?.message.content;
  };

  const postMessage = async (text: string) => {
    try {
      setLoader(true);
      const convert_english = checkRole ? text : await apis(text);
      await axiosInstance.post("/conversations", {
        user_id: "user1",
        speaker: role,
        company_id: 123,
        chat_room_id: "room13",
        original_message: convert_english,
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
    refDiv.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  }, [toggleRole, data?.length, loader]);

  // useEffect(() => {
  //   getAll()
  //     .then((res) => setDatas(res))
  //     .catch((err) => console.log(err));
  // }, []);

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

  return (
    <div className=" flex flex-1 flex-col relative">
      <Navbar />
      {/* chat board */}
      <div className=" flex-1 px-3 py-3 flex flex-col gap-2 overflow-hidden overflow-y-auto">
        {data?.map((data: ChatbarProps) => {
          return <ChatBar key={data.id} data={data} />;
        })}
        {loader && (
          <div className="flex justify-end">
            <div className="loader" />
          </div>
        )}

        <div ref={refDiv} />
      </div>
      <div className="bg-lightGrey p-3 ">
        {checkRole ? (
          <div className="pb-3">
            {/* {loader ? <div className="loader" /> : null} */}

            <div className="pt-3">
              <div className="flex gap-2">
                <div className="w-[20px] h-[20px] overflow-hidden rounded-[50%]">
                  <img src={gpt} alt="gpt-icon" />
                </div>
                <span className="text-[#8a8a8a] text-sm font-semibold">
                  Auto-translate by ChatGPT-4
                </span>
              </div>
            </div>
          </div>
        ) : null}

        <div className="flex gap-3 items-end">
          <div
            onClick={() => alert("Feature not yet available!")}
            className="py-1 cursor-pointer"
          >
            <img className="w-[20px]" src={pin} alt="pin" />
          </div>
          <input
            name="chatbar"
            value={text}
            onKeyDown={(e) => handleEnter(e)}
            type="text"
            className="bg-white p-2 focus:outline-none flex-1 border-[1px] rounded-[10px] border-[#ccc]"
            // disabled
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
