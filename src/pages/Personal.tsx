import { Form, Navigate } from "react-router-dom";
import { logo_ATO } from "../assets";
import Cookie from "js-cookie";
import axios from "axios";
import useSWR from "swr";

const fecther = (url: string) => axios.get(url).then((res) => res.data);

const Personal = () => {
  if (!Cookie.get("token")) {
    return <Navigate to={"/register"} replace={true} />;
  }

  const { data, isLoading } = useSWR(
    `${import.meta.env.VITE_BASE_URL}/roles`,
    fecther
  );

  return (
    <div className="w-full flex flex-col items-center justify-center ">
      <div className="min-w-max w-[400px] hd:w-[440px] 2xl:w-[500px] p-5 flex flex-col justify-center items-center ">
        <div className="w-[100px] h-[100px]">
          <img src={logo_ATO} alt="t-chat" />
        </div>
        <div className="pt-6 pb-10">
          <h1 className="font-bold text-2xl">Personal Data</h1>
        </div>
        <Form
          method="post"
          replace
          className="w-full flex flex-col hd:gap-3 fhd:gap-4"
        >
          <div className="flex flex-col w-full">
            <label htmlFor="name" className="font-semibold">
              Name
            </label>
            <input
              autoComplete="false"
              id="name"
              type="text"
              className="font-normal border-[1px] focus:outline-none mt-1 border-[#8a8a8a] py-2 px-3 rounded-md"
              name="name"
              placeholder="Enter Your Name"
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="role" className="font-semibold">
              Role
            </label>
            <select
              className="font-normal border-[1px] mt-1 focus:outline-none border-[#8a8a8a] w-full py-2 pl-3 rounded-md pr-5 text-[#8a8a8a] "
              name="role"
              id="role"
            >
              {isLoading && "Loading..."}
              {data?.map((data: any) => (
                <option key={data.id} value={data.id}>
                  {data.role_name}
                </option>
              ))}
            </select>
          </div>

          <div className="hd:pt-[100px] fhd:pt-32  2xl:pt-44 w-full">
            <button
              type="submit"
              className="bg-primary font-bold text-white text-center w-full min-w-80 rounded-md py-2 px-3"
            >
              Start Chatting
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Personal;
