import { createBrowserRouter } from "react-router";
import Layout from "../Layout/Layout";
import Main from "../Page/main";
import Sidebar from "../Page/Sidebar/Sidebar";
import Invoice from "../Page/Invoice/Invoice";

const Router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        element: <Main />,
      },
      {
        path: "Sidebar",
        element: <Sidebar/>,
      },
      {
        path: "Invoice",
        element: <Invoice />,
      },
    ],
  },
]);

export default Router;