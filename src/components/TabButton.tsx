import React from "react";
import { motion } from "framer-motion";
import { Inter,Noto_Kufi_Arabic, Rakkas,Noto_Sans_Arabic } from "next/font/google";

const kufiArabic = Noto_Kufi_Arabic({ subsets: ["arabic"],weight:['300','600'] });
const notoSansArabic = Noto_Sans_Arabic({ subsets: ["arabic"],weight:['900']});

const rakkas = Rakkas({ subsets: ["arabic"],weight:['400']});

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

const TabButton = ({ active, selectTab, children }:any) => {
  const buttonClasses = active ? "text-white" : "text-[#ADB7BE]";

  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold  hover:text-white ${buttonClasses} ${notoSansArabic.className} `}>
        {children}
      </p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className={`h-1 bg-primary-500 mt-2 mr-3 ${notoSansArabic.className}` }        
      ></motion.div>
    </button>
  );
};

export default TabButton;