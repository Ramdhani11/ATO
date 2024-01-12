import { useContext, useEffect, useRef, useState } from "react";
import { arrow, gpt, pin } from "../assets";
import OpenAI from "openai";
import Navbar from "./Navbar";
import { dummy } from "../dummy/dummy.api";
import ChatBar, { ChatbarProps } from "./ChatBar";
import { RoleContext } from "../layout/MainLayout";
import { v4 as uuid } from "uuid";

const Mainbar = () => {
  const [text, setText] = useState("");
  const [translate, setTranslate] = useState("");
  const refDiv = useRef<HTMLDivElement>(null);
  const { role } = useContext(RoleContext);
  const [datas, setDatas] = useState<ChatbarProps[]>();

  const [loader, setLoader] = useState(false);

  const openai = new OpenAI({
    apiKey: "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",
    dangerouslyAllowBrowser: true,
  });

  const apis = async (chat: string) => {
    const completion = await openai.completions.create({
      model: "gpt-3.5-turbo-instruct",
      prompt: `Translate the following ${
        role === "107" ? "English text to Japanese" : "English text to Japanese"
      } : ${chat}`,
      max_tokens: 60,
    });
    setTranslate(completion.choices[0].text);
  };

  useEffect(() => {
    if (!text) {
      null;
    } else if (text.length < 4) {
      setLoader(!loader);
    } else if (text.length > 4) {
      setLoader(false);
      apis(text);
    }
    if (text.length === 0 && text.length < 4) {
      setTranslate("");
    }
  }, [text]);

  useEffect(() => {
    setDatas(dummy);
  }, []);

  useEffect(() => {
    if (datas?.length) {
      refDiv.current?.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }
  }, [datas?.length]);

  const handleEnter = (e: any) => {
    if (e.key === "Enter") {
      const dataPush = {
        id: uuid(),
        speaker: role,
        roomId: "exaigsuidk212",
        original_message: text,
        translated_message: translate,
        date: Date.now(),
      };

      datas ? setDatas([...datas, dataPush]) : null;
      setText("");
      setTranslate("");
    }
  };

  const handleSubmit = () => {
    if (!text || text.length < 4) {
      alert("Please enter words, min 4 letter!");
      return;
    }

    const dataPush = {
      id: uuid(),
      speaker: role,
      roomId: "exaigsuidk212",
      original_message: text,
      translated_message: translate,
      date: Date.now(),
    };

    datas ? setDatas([...datas, dataPush]) : null;
    setText("");
    setTranslate("");

    console.log(dataPush);
  };

  return (
    <div className=" flex flex-1 flex-col relative">
      <Navbar />
      {/* chat board */}
      <div className=" flex-1 px-3 py-3 flex flex-col gap-2 overflow-hidden overflow-y-auto">
        {datas?.map((data) => {
          return <ChatBar key={data.id} data={data} />;
        })}
        <div ref={refDiv} />
      </div>
      <div className="bg-lightGrey p-3 ">
        {role === "107" ? (
          <div className="pb-3">
            {loader ? (
              <div className="loader" />
            ) : (
              <div>{text ? translate : null}</div>
            )}

            <div className="pt-3">
              <div className="flex gap-2">
                <div className="w-[20px] h-[20px] overflow-hidden rounded-[50%]">
                  <img src={gpt} alt="gpt-icon" />
                </div>
                <span className="text-[#8a8a8a] text-sm font-semibold">
                  Translate by ChatGPT-4
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
            value={text}
            onKeyDown={(e) => handleEnter(e)}
            type="text"
            className="bg-white p-2 focus:outline-none flex-1 border-[1px] rounded-[10px] border-[#ccc]"
            onChange={(e) => setText(e.target.value)}
          />
          <div className="py-1">
            <div
              onClick={() => handleSubmit()}
              className="cursor-pointer hover:bg-blue-900 w-[34px] h-[34px] bg-primary rounded-[50%] grid place-items-center"
            >
              <img src={arrow} alt="arrow" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mainbar;
