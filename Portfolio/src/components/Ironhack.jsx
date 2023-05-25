import React, { useState } from 'react';
import ironhackLogo2 from "../image/ironhackLogo2.png";

function Ironhack() {
  const [showSecondText, setShowSecondText] = useState(false);

  const handleClick = () => {
    setShowSecondText(!showSecondText); // Toggle the value
  };

  return (
    <div id="ironhack" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16 flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 bg-white rounded-lg p-4 shadow-md md:mr-4">
        {showSecondText ? (
          <div>
            <h2 className="text-2xl font-bold my-4">Ironhack Course</h2>
            <p>
              Module 1: Learned HTML, CSS, and JavaScript for web development and create a personalized game with responsive design using CSS and JavaScript.
             </p> <br /><p>
              Module 2: Master back-end development with Node.js, Express.js, Handlebars and MongoDB. Build servers, work with databases, integrate APIs, test routes with Postman, and deploy projects.
              </p> <br /><p>
              Module 3: Become proficient in ReactJS. Develop a full-stack application combining back-end skills with ReactJS for a seamless user experience.
              </p><br />
              <p>
              Final Project: After approximately 500 to 600 hours, into intensive learning, extensive practice, and projects implementation, i showcase all skills by creating a MERN-based full-stack application.
            </p>
          </div>
        ) : (
          <div>
            <h2 className="text-2xl font-bold my-4">Pre Bootcamp</h2>
            <p>
              During the pre-bootcamp preparation at Ironhack, I underwent 50 to 75 hours of training in JavaScript, HTML, CSS, Git, and GitHub. This comprehensive preparation ensured that I was fully equipped for a successful experience in the Bootcamp.
            </p>
          </div>
        )}
        <div className="flex justify-center mt-4">
          <button
            className={`bg-blue-500 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-full transition duration-300 ${
              showSecondText ? 'scale-75' : ''
            }`}
            onClick={handleClick}
          >
            {showSecondText ? 'Pre Bootcamp' : 'Ironhack Course'}
          </button>
        </div>
      </div>
      <div className="w-full md:w-1/2 mt-4 md:mt-0">
        <a href="https://www.ironhack.com/pt/en/web-development">
          <img
            src={ironhackLogo2}
            alt="ironhack"
            className="h-full mx-auto hover:scale-105 transition-transform duration-300"
          />
        </a>
      </div>
    </div>
  );
}


export default Ironhack;