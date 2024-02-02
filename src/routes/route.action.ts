import axios from "axios";
import { LoaderFunctionArgs, redirect } from "react-router-dom";
import Cookies from "js-cookie";

interface IActions {
  loginAction: any;
  personalAction: any;
  resgisterAction: any;
}

export const routeActions: IActions = {
  loginAction: async ({ request }: LoaderFunctionArgs) => {
    const formData = await request.formData();
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/login`, {
        email,
        password,
      });
      Cookies.set("access", res.data.token);
      Cookies.set("userId", res.data.account.id);
      Cookies.set("name", res.data.account.name);
      Cookies.set("company", res.data.account.company_name);
    } catch (error) {
      console.log(error);
      return;
    }
    if (Cookies.get("company") === "ATO") {
      return redirect("/jp");
    }
    return redirect("/chatboard");
  },
  personalAction: async ({ request }: LoaderFunctionArgs) => {
    const formData = await request.formData();
    let name = formData.get("name") as string | null;
    let role_id = Number(formData.get("role")) as number | null;
    try {
      await axios
        .post(
          `${import.meta.env.VITE_BASE_URL}/personaldata`,
          {
            name,
            role_id,
          },
          {
            headers: {
              Authorization: Cookies.get("token"),
            },
          }
        )
        .then((res) => {
          Cookies.remove("token");
          Cookies.set("access", res.data.token);
          Cookies.set("userId", res.data.account.id);
          Cookies.set("name", res.data.account.name);
          Cookies.set("company", res.data.account.company_name);
        })
        .catch((err) => console.log(err));
    } catch (error) {
      return {
        error: "Invalid login attempt",
      };
    }

    if (Cookies.get("company") === "ATO") {
      return redirect("/jp");
    }
    return redirect("/chatboard");
  },
  resgisterAction: async ({ request }: LoaderFunctionArgs) => {
    const formData = await request.formData();
    const email = formData.get("email") as string | null;
    const password = formData.get("password") as string | null;
    const company_id = Number(formData.get("select")) as number;

    try {
      await axios
        .post(`${import.meta.env.VITE_BASE_URL}/register`, {
          email,
          password,
          company_id,
        })
        .then((res) => Cookies.set("token", res.data.token));
    } catch (error) {
      console.log(error);
      return;
    }
    return redirect("/personal");
  },
};
