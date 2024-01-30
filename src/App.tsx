import {
  RouterProvider,
  createBrowserRouter,
  redirect,
} from "react-router-dom";
import LoginLayout from "./layout/LoginLayout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Personal from "./pages/Personal";
import AuthLayout from "./layout/AuthLayout";
import MainLayout from "./layout/MainLayout";
import { fakeAuthProvider } from "./utils/fake.auth";

const loginAction = async () => {
  return redirect("/auth/personal");
};
const personalAction = async () => {
  try {
    await fakeAuthProvider.signin();
  } catch (error) {
    return {
      error: "Invalid login attempt",
    };
  }

  return redirect("/");
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <MainLayout />,
      },
    ],
  },
  {
    path: "/auth",
    element: <LoginLayout />,
    children: [
      {
        index: true,
        action: loginAction,
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "personal",
        action: personalAction,
        element: <Personal />,
      },
    ],
  },
  {
    path: "/logout",
    async action() {
      // We signout in a "resource route" that we can hit from a fetcher.Form
      await fakeAuthProvider.signout();
      return redirect("/auth");
    },
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
