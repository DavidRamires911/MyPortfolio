import React from "react";
import CareerItem from "./CareerItem";
import { useTranslation } from 'react-i18next'

////All information are in Translation JSon


const Career = () => {
  const { t } = useTranslation();

  const data = [
    {
      year: "2019",
      job: t("Soul"),
      duration: t("DurationS"),
      details: t('DetailsSoul'),
    },
    {
      year: "2018",
      job: t("Ozadi"),
      duration: t("DurationO"),
      details: t("DetailsOzadi") ,
    },
    {
      year: "2016",
      job: t("Ryanair"),
      duration: t("DurationR"),
      details: t("DetailsRyanair"),
    },
    {
      year: "2012",
      job: t("Portway"),
      duration: t("DurationP"),
      details: t("DetailsPortway"),
    },
  ];

  return (
    <div id="career" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16 ">
      <h1 className="text-4xl font-bold text-center text-[#001b5e] mb-10">{t("Tcareer")}</h1>
      {data.map((item, idx) => (
        <CareerItem
          key={idx}
          year={item.year}
          job={item.job}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div>
  );
};

export default Career;