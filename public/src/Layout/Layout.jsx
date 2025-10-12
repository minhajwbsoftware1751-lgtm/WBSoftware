import { Outlet } from "react-router-dom";
import { useState } from "react";

const Layout = () => {
  const [show, setshow] = useState(false);

  return (
   <div>
    <Outlet/>
   </div>
  );
};

export default Layout;
