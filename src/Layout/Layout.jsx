import { Outlet } from "react-router-dom";
import { useState } from "react";

const Layout = () => {
  const [show, setshow] = useState(false);

  return (
    <div className="bg-white overflow-hidden">
        <div className=" flex items-start w-full">
          <div className="w-full p-5">
            <div>
              <div className="min-h-[89.9vh]">
                <Outlet />
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Layout;
