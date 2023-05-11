/* eslint-disable react/no-unescaped-entities */
import React from "react";
import image from "../image/mainphoto.avif";
import { TypeAnimation } from "react-type-animation";
import { FaLinkedinIn, FaInstagram, FaFacebookF, FaGithub, FaTwitter} from "react-icons/fa"



const Main = () => {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover object-left scale-x-[-1] "
        src={image}
        alt="image"
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/50 ">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center   ">
          <h1 className="sm:text-5xl text-4xl font-bold text-gray-800 " >I'm David Correia</h1>
          <h2 className="flex sm:text-3xl pt-4 text-gray-800 " >
            {" "}
            I'm a
            <TypeAnimation
              sequence={[
                "Junior Developer", // Types 'Junior Developer'
                1000, // Waits 1s
                "Front-End", // Deletes 'One' and types 'Two'
                2000, // Waits 2s
                "Back-End",
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
          </h2>
          <div>
            
          </div>
          <div className="flex justify-between pt-6 max-w-[200px] w-full "> 
          <FaLinkedinIn className="cursor-pointer" size={25} />
          <FaInstagram className="cursor-pointer" size={25} />
          <FaFacebookF className="cursor-pointer" size={25} />
          <FaGithub  className="cursor-pointer" size={25} />


          

          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
