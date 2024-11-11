import React from "react";
import { ComputerDesktopIcon } from "@heroicons/react/24/solid";

const Footer = () => {
  return (
    <footer className="footer border py-2 z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white mx-4">
      <div className="flex items-center  justify-between container m-auto">
   <div>
   <ComputerDesktopIcon className="h-10 w-10" />
   </div>
      
        <p className="text-slate-100 font-extrabold text-lg">جميع الحقوق محفوظة</p>
      </div>
    </footer>
  );
};

export default Footer;