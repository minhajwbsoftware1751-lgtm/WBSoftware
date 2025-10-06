import { Outlet } from "react-router-dom";
import { useState } from "react";

const Layout = () => {
  const [show, setshow] = useState(false);

  return (
    <div className="bg-primary dark:bg-color_dark_primary overflow-hidden">
      <div className="w-full h-screen justify-between mx-auto overflow-y-auto flex ">
        <div className=" flex items-start w-full">
          <div className="w-full">
            <div>
              <div className="min-h-[89.9vh]">
                <Outlet />
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
