import React, { useState } from "react";
import {
  AiOutlineHome,
  AiOutlineMenu,
  AiOutlineMail,
  AiOutlineProject,
} from "react-icons/ai";
import { GrProjects } from "react-icons/gr";
import { BsPerson } from "react-icons/bs";
import { useTranslation} from "react-i18next";
import i18n from "../i18next";

////All information are in Translation JSon


const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    console.log("change nav");
  };

  const { t } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  
  return (
    <div>
      <div className="absolute top-0 left-0 w-full flex justify-center items-center z-20">
       
      <button
    onClick={() => {
      changeLanguage("en");
      window.location.reload();
    }}
    className="bg-gray-100 shadow-gray-400 mt-1 w-5% p-2 rounded-lg cursor-pointer hover:scale-110 ease-in duration-200"
  >
    EN
  </button>
  <button
    onClick={() => {
      changeLanguage("pt");
      window.location.reload();
    }}
    className="bg-gray-100 shadow-gray-400 mt-1 w-5% p-2 rounded-lg cursor-pointer hover:scale-110 ease-in duration-200"
  >
    PT
  </button>
      </div>
      <div>
        <AiOutlineMenu
          onClick={handleNav}
          className="absolute top-4 right-4 z-[99] md:hidden"
        />

        {nav ? (
          <div className="fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20">
            <a
              onClick={handleNav}
              href="#main"
              className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
            >
              <AiOutlineHome size={20} />
              <span className="pl-4">{t(`Home`)}</span>
            </a>
            <a
              onClick={handleNav}
              href="#career"
              className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
            >
              <GrProjects size={20} />
              <span className="pl-4">{t(`Career`)}</span>
            </a>
            <a
              onClick={handleNav}
              href="#projects"
              className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
            >
              <AiOutlineProject size={20} />
              <span className="pl-4">{t(`Projects`)}</span>
            </a>
            <a
              onClick={handleNav}
              href="#main"
              className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
            >
              <BsPerson size={20} />
              <span className="pl-4">{t(`Resume`)}</span>
            </a>
            <a
              onClick={handleNav}
              href="#contact"
              className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
            >
              <AiOutlineMail size={20} />
              <span className="pl-4">{t(`Contact`)}</span>
            </a>
          </div>
        ) : (
          <div></div>
        )}
        <div className="md:block hidden fixed top-[25%] z-10  ">
          <div className="flex flex-col">
            <a
              href="#main"
              className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
            >
              <AiOutlineHome size={20} />
            </a>
            <a
              href="#career"
              className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
            >
              <GrProjects size={20} />
            </a>
            <a
              href="#projects"
              className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
            >
              <AiOutlineProject size={20} />
            </a>
            <a
              href="#main"
              className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
            >
              <BsPerson size={20} />
            </a>
            <a
              href="#contact"
              className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
            >
              <AiOutlineMail size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
