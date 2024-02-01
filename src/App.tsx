import {
  Link,
  RouterProvider,
  createBrowserRouter,
  redirect,
} from "react-router-dom";
import LoginLayout from "./layout/LoginLayout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Personal from "./pages/Personal";
import MainLayout from "./layout/MainLayout";
import { routeActions } from "./routes/route.action";
import Cookies from "js-cookie";
import JapanLayout from "./layout/JapanLayout";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: (
      <div className="w-full h-screen grid place-content-center ">
        <h1 className="text-xl ">Internal Server Error 402</h1>
        <Link
          className="bg-primary py-1 px-3 w-max rounded-md text-white font-normal"
          to={"/"}
        >
          Reload
        </Link>
      </div>
    ),
    element: <LoginLayout />,
    children: [
      {
        index: true,
        action: routeActions.loginAction,
        element: <Login />,
      },
      {
        path: "register",
        action: routeActions.resgisterAction,
        element: <Register />,
      },
      {
        path: "personal",
        action: routeActions.personalAction,
        element: <Personal />,
      },
    ],
  },
  {
    path: "/chatboard",
    element: <MainLayout />,
  },
  {
    path: "/jp",
    element: <JapanLayout />,
  },
  {
    path: "/logout",
    async action() {
      // We signout in a "resource route" that we can hit from a fetcher.Form
      Cookies.remove("user");
      Cookies.remove("access");
      Cookies.remove("userId");
      Cookies.remove("name");
      Cookies.remove("company");
      // await fakeAuthProvider.signout();
      return redirect("/");
    },
  },
]);

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <AuthLayout />,
//     children: [
//       {
//         index: true,
//         element: <MainLayout />,
//       },
//     ],
//   },
//   {
//     path: "/auth",
//     element: <LoginLayout />,
//     children: [
//       {
//         index: true,
//         action: routeActions.loginAction,
//         element: <Login />,
//       },
//       {
//         path: "register",
//         element: <Register />,
//       },
//       {
//         path: "personal",
//         action: routeActions.personalAction,
//         element: <Personal />,
//       },
//     ],
//   },
//   {
//     path: "/logout",
//     async action() {
//       // We signout in a "resource route" that we can hit from a fetcher.Form
//       Cookies.remove("access");
//       await fakeAuthProvider.signout();
//       return redirect("/auth");
//     },
//   },
// ]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
