import  { useContext } from "react";
import ProjectItem from "./ProjectItem";
import cdBakery from "../image/cd-Bakery.png"
import ratAttack from "../image/Rat Attack.png"
import travel from "../image/Travel.png"
import { useTranslation } from "react-i18next";
import { ThemeContext } from "../ThemeContext";
import ecommmerce from "../image/ecommerce.png"
import dashboard from "../image/dashboard.png"
import Remex from "../image/remex.png"
import mseverin from "../image/mseverin.png"

import Civiprime from "../image/civiprimePortfolio.png";


function Projects() {
  const { t } = useTranslation();
  const {darkMode}= useContext (ThemeContext)
  const projects = darkMode
  ? ' text-orange-400'
  : ' text-gray-700';
  const details = darkMode 
  ? ' text-orange-300'
  : ' text-gray-700';
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16 ">
      <h1 className={  `text-4xl font-bold text-center ${projects} ` }>
        {t("Projects")}
      </h1>
      <p className={ `text-center py-8 ${details} ` }>
        {" "}
        {t("ProjectDetails")} {" "}
      </p>
      <div className="grid sm:grid-cols-2 gap-12 ">
      <a href="https://iridescent-dolphin-1dea5a.netlify.app/"><ProjectItem img={Civiprime} title="Civiprime" Description="React - Scss - Sanity Backend"/> </a>
      <a href ="https://e-commerce-orpin-omega.vercel.app/"><ProjectItem img={ecommmerce} title="E-commerce" Description="React - Tailwind - NextJs - MongoDB"/></a>
      <a href ="https://ecommerce-admin-two-tau.vercel.app/"><ProjectItem img={dashboard} title="E-commerce Admin-Dashboard" Description="React - Tailwind - NextJs - MongoDB"/></a>
      <a href="https://adorable-zuccutto-7b7a09.netlify.app/"><ProjectItem img={mseverin} title="MSeverin" Description="React - Scss - Sanity Backend"/> </a>      <a href ="https://cozy-creponne-622e6e.netlify.app/"><ProjectItem img={Remex} title="Remex Imobiliaria" Description="Vite - Css "/></a>
      
       <a href="https://warriors-cd-bakery.adaptable.app/"> <ProjectItem img={cdBakery} title="Cd Bakery" Description="Javascript - Handlebars - Mongodb - Express - Bootstrap - Node.js"  /></a>
       <a href="https://davidramires911.github.io/Project-1/index.html"> <ProjectItem img={ratAttack} title="Rat Attack" Description="Javascript - Css"/></a>
       <a href="https://project-travels.netlify.app/"> <ProjectItem img={travel} title="Travel" Description="React - Mongodb - Express - Bootstrap - Node.js - Postman" /></a>
      
      </div>
    </div>
  );
}

export default Projects;
