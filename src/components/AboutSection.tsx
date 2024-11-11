"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import {  Almarai } from "next/font/google";
import { TabData } from "@/types";







const almarai = Almarai({ subsets: ["arabic"],weight:["800"]});

const TAB_DATA :TabData[] = [
  {
    tittle: "Skills",
    id: "skills",
    content: (
      <div className="flex gap-6">
        <ul className="list-disc pl-2 ">
         <li>Nextjs</li>
        <li>React</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>PostgreSQL</li>
        <li>Sequelize</li>
        <li>JavaScript</li>
        <li>Typescript</li>
       
      </ul>

      <ul className="list-disc pl-2 ">
         <li>Sql Server</li>
        <li>Window Project C#</li>
        <li>MySql</li>
        <li>MongoDB</li>
        <li>Prisma</li>
        <li>Flutter</li>
        <li>API</li>
      </ul>

      
      <ul className="list-disc pl-2 ">
         <li>English Writing</li>
        <li>English Listening</li>
        <li>English Speaking</li>
      </ul>
      </div>
    ),
  },
  {
    tittle: "Education",
    id: "education",
    content: (
      <ul className="list-none text-right pl-2">
        <li className={`font-bold font-serif ${almarai.className} `}>بكلوريوس علوم حاسبات</li>
        <li className={`font-bold font-serif  ${almarai.className} `}>الجامعة التكنولوجية</li>
      </ul>
    ),
  },
  {
    tittle: "Courses",
    id: "courses",
    content: (
      <ul className="list-disc pl-2">
        <li>NextJS</li>
        <li>React</li>
        <li>English</li>
        <li>Sql Server</li>
        <li>C#</li>
        <li>Flutter & Dart</li>
        <li>Firebase</li>
      </ul>
    ),
  },

  {
    tittle: "Bio",
    id: "bio",
    content: (
      <ul className="list-none   pl-2">
        <div className={`flex justify-end  gap-10 text-right ${almarai.className}`}>
       


            <div>
                
        <li className={`font-bold font-serif hover:list-disc hover:scale-105 hover:transition-all ${almarai.className} `}>العراق</li>
        <li className={`font-bold font-serif hover:list-disc hover:scale-105 hover:transition-all ${almarai.className} `}>رصافة</li>
            </div>

            <div >
                
                <li className={`font-bold font-serif hover:list-disc hover:scale-105 hover:transition-all ${almarai.className} `}>حيدر جعفر كريم</li>
                <li className={`font-bold font-serif hover:list-disc hover:scale-105 hover:transition-all ${almarai.className} `}>بغداد</li>
                    </div>
        </div>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id:string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  // Assuming 'tab' is a string that represents the current tab ID
const tabItem = TAB_DATA.find((t) => t.id === tab);

return (
  <section className="text-white" id="about">
    <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <Image
        src="/images/about-image.png"
        width={500}
        height={500}
        alt="about"
        className="rounded-lg"
      />
      <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
        <h2 className="text-4xl font-bold text-white mb-4 text-right">من أنا</h2>
        <p className="lg:font-extrabold lg:text-2xl font-bold text-base text-right rtl:text-right tracking-normal">
          أنا مطور ويب وتطبيقات موبايل ولدي شغف بالإبداع تطبيقات الويب وتطبيقات الموبايل
          التفاعلية وسريعة الاستجابة. أنا سريع التعلم وأتطلع إلى توسيع معرفتي ومهاراتي.
          أنا متحمس للعمل مع الآخرين لإنشاء تطبيقات مذهلة.
        </p>
        <div className="flex flex-row justify-start mt-8">
          <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>
            المهارات
          </TabButton>
          <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>
            التعليم
          </TabButton>
          <TabButton selectTab={() => handleTabChange("courses")} active={tab === "courses"}>
            الدورات
          </TabButton>
          <TabButton selectTab={() => handleTabChange("bio")} active={tab === "bio"}>
            معلومات السكن
          </TabButton>
        </div>
        
        {isPending && <div className="mt-4 text-yellow-500">Loading...</div>}
        <div className="mt-8">
          {tabItem ? tabItem.content : <div>Content not found</div>}
        </div>
      </div>
    </div>
  </section>
);
};
export default AboutSection;