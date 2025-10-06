import { createBrowserRouter } from "react-router";
import Layout from "../Layout/Layout";
import Main from "../Page/main";

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
        path: "Invoice",
        element: <Invoice />,
      },
    ],
  },
]);

export default Router;