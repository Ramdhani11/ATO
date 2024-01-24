import { useContext } from "react";
import Button from "./Button";
import ToggleButton from "./ToggleButton";
import { RoleContext } from "../layout/MainLayout";

const Popup = () => {
  const { popup, togglePopup } = useContext(RoleContext);

  return (
    <div
      className={`${
        popup ? "absolute" : "hidden"
      } top-0 right-0 left-0 bottom-0 bg-[#0000000c]  z-20 backdrop-blur-[2px] grid place-content-center`}
      onClick={togglePopup}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="p-6 bg-white rounded-xl flex flex-col gap-6 2xl:w-[800px] w-[600px]"
      >
        <div className="flex justify-between">
          <h3 className="text-xl font-semibold">Costum Intructions</h3>
          <ToggleButton />
        </div>
        <div className="flex flex-col ">
          <h4 className="text-[#8a8a8a] text-sm pb-3">
            What would you like ChatGPT to know about you to provide better
            responses?
          </h4>
          <input
            type="text"
            className="text-sm bg-white p-2 focus:outline-none flex-1 border-[1px] rounded-[10px] border-[#ccc]"
            name="chatgpt-prompt"
          />
        </div>
        <div className="flex flex-col ">
          <h4 className="text-[#8a8a8a] text-sm pb-3">
            How would you like ChatGPT to respond?
          </h4>
          <textarea
            name="chatgpt-input"
            className="text-sm bg-white min-h-[180px] max-h-max p-2 focus:outline-none flex-1 border-[1px] rounded-[10px] border-[#ccc]"
          />
        </div>
        <div className="flex flex-1 justify-end gap-2">
          <Button
            textColor="[#8e8e8e]"
            textContent="Cancel"
            bgColor="[#8e8e8e]"
          />
          <Button textColor="white" textContent="Save" bgColor="primary" />
        </div>
      </div>
    </div>
  );
};

export default Popup;
