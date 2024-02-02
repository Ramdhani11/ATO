import { KeyboardEvent, useContext, useEffect, useRef, useState } from "react";
import { arrow, gpt, pin } from "../assets";
import Navbar from "./Navbar";
import { RoleContext } from "../layout/MainLayout";
import { axiosInstance } from "../config/axiosInstance";
import useSWR from "swr";
import { toast } from "sonner";
import ContainerChat from "./ContainerChat";
import Cookies from "js-cookie";

export const fecther = (url: string) =>
  axiosInstance.get(url).then((res) => res.data);

const Mainbar = () => {
  const { data, mutate } = useSWR("/conversations-by-chat-room-id/1", fecther);

  const [text, setText] = useState("");

  const [loader, setLoader] = useState(false);

  const refDiv = useRef<HTMLDivElement>(null);

  const { checkTheme } = useContext(RoleContext);

  const postMessage = async (text: string) => {
    const checkCompany = Cookies.get("company") === "107";
    try {
      setLoader(true);
      await axiosInstance.post("/conversations", {
        user_id: Number(Cookies.get("userId")),
        speaker: Cookies.get("company"),
        company_id: checkCompany ? 2 : 1,
        chat_room_id: 1,
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

  useEffect(() => {
    if (data?.length) {
      refDiv.current?.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }
  }, [data, loader]);

  const handleEnter = async (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      if (!text || text.length < 1) {
        alert("Please enter words!");
        return;
      }
      await postMessage(text);
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!text || text.length < 1) {
      alert("Please enter words!");
      return;
    }
    await postMessage(text);
    // await chatroom();
  };

  return (
    <div className=" flex flex-1 flex-col relative">
      <Navbar />
      {/* chat board */}

      <div
        className={`flex-1 px-3 py-3 ${
          checkTheme ? "text-white scroll" : "text-black"
        } flex flex-col gap-2 overflow-hidden overflow-y-auto`}
      >
        {/* {isLoading && <div>Loading</div>} */}
        {data && <ContainerChat data={data} />}
        {loader && (
          <div className="relative flex justify-end">
            <div className="spin"></div>
          </div>
        )}

        <div ref={refDiv}></div>
      </div>
      <div className={` ${checkTheme ? "bg-[#27374d]" : "bg-lightGrey"} p-3 `}>
        <div className="pb-3">
          <div className="">
            <div className="flex gap-2">
              <div className="w-[20px] h-[20px] overflow-hidden rounded-[50%]">
                <img src={gpt} alt="gpt-icon" />
              </div>
              <span
                className={`${
                  checkTheme ? "text-[#9DB2BF]" : "text-[#8a8a8a]"
                } text-sm font-semibold`}
              >
                {loader ? "Translating..." : "Auto-translate by ChatGPT-4 "}
              </span>
            </div>
          </div>
        </div>
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="flex gap-3 items-end "
        >
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
            autoComplete="off"
            disabled={loader ? true : false}
            className={` ${
              checkTheme
                ? "bg-[#242c39] text-white border-[#242c39]"
                : "bg-white border-[#ccc]"
            } p-2 focus:outline-none flex-1 border-[1px] rounded-[10px] font-normal `}
            onChange={(e) => setText(e.target.value)}
          />
          <div className="py-1">
            <button
              disabled={loader ? true : false}
              type="submit"
              className="cursor-pointer hover:bg-blue-900 w-[34px] h-[34px] bg-primary rounded-[50%] grid place-items-center"
            >
              <img className="w-[18px]" src={arrow} alt="arrow" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Mainbar;
