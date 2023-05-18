import React from "react";
import ProjectItem from "./ProjectItem";
import mainphoto from "../image/mainphoto.avif";
import cdBakery from "../image/cd-Bakery.png"
import ratAttack from "../image/Rat Attack.png"
import travel from "../image/Travel.png"
import { useTranslation } from "react-i18next";

////All information are in Translation JSon


function Projects() {
  const { t } = useTranslation();

  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16 ">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        {t("Projects")}
      </h1>
      <p className="text-center py-8 ">
        {" "}
        {t("ProjectDetails")} {" "}
      </p>
      <div className="grid sm:grid-cols-2 gap-12 ">
       <a href=""> <ProjectItem img={mainphoto}  title="Main Photo"/></a>
       <a href="https://warriors-cd-bakery.adaptable.app/"> <ProjectItem img={cdBakery} title="Cd Bakery" /></a>
       <a href="https://davidramires911.github.io/Project-1/index.html"> <ProjectItem img={ratAttack} title="Rat Attack" /></a>
       <a href="https://project-travels.netlify.app/"> <ProjectItem img={travel} title="Travel" /></a>
      </div>
    </div>
  );
}

export default Projects;
