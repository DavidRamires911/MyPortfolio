/* eslint-disable react/no-unescaped-entities */
import React, {Suspense} from "react";
import image from "../image/mainphoto.avif";
import { TypeAnimation } from "react-type-animation";
import { FaLinkedinIn, FaInstagram, FaFacebookF, FaGithub, } from "react-icons/fa"
import { useTranslation } from 'react-i18next'

////All information are in Translation JSon


const Main = () => {
  const { t } = useTranslation();

 

  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover object-left scale-x-[-1] "
        src={image}
        alt="image"
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/50 ">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center   ">
          <h1 className="sm:text-5xl text-4xl font-bold text-gray-800 " >{t("I")} </h1>
          <h2 className="flex sm:text-3xl pt-4 text-gray-800 " >
            {" "}
            <Suspense fallback="Loading...">
            <TypeAnimation
              sequence={[
                t("Hi"), // Types 'Junior Developer'
                1000, // Waits 1s
                t("Passionate"), // Deletes 'One' and types 'Two'
                2000, // Waits 2s
                t("Eager"),
                2000, // Types 'Three' without deleting 'Two'
                () => {
                  console.log("Sequence completed"); // Place optional callbacks anywhere in the array
                },
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: "1em", paddingLeft: "5px" }}
            />
            </Suspense>
          </h2>
          <div>
            
          </div>
          <div className="flex justify-between pt-6 max-w-[200px] w-full "> 
          <a href="https://www.linkedin.com/in/david-correia-30239822b/">
          <FaLinkedinIn className="cursor-pointer" size={25} />
          </a>
          <a href="https://www.instagram.com/davidcorreia91/">
          <FaInstagram className="cursor-pointer" size={25} />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100006689835857">
          <FaFacebookF className="cursor-pointer" size={25} />
          </a>
          <a href="https://github.com/DavidRamires911">
          <FaGithub  className="cursor-pointer" size={25} />
          </a>


          

          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
