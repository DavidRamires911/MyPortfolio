/* eslint-disable no-unused-vars */
import React from "react";
import CareerItem from "./CareerItem";

const data = [
  {
    year: "2019",
    job: "Soul campers, Rent Servive Agent",
    duration: "3 years",
    details: `Handling incoming reservations, welcoming guests and taking care of check-ins and check-outs;
    Preparing and cleaning campervans;
    Maintaining campervans in top condition and monitor maintenance 
    Registering guests, monitoring stock and processing payments;
    Handling complaints and troubleshooting emergencies.`,
  },
  {
    year: "2018",
    job: "Ozadi Hotel, Economat",
    duration: "6 Months",
    details: `Performing tasks related to the Economat/Purchasing 
    Receive Suppliers, analyze if the product presents the necessary conditions and if there were no misconceptions.
    Distribute the products by department of the hotel and whether they comply with the rules of haccp.
    Enter invoices, credit notes, waybills in the PMS system `,
  },
  {
    year: "2016",
    job: "Ryanair, Ground handling Operator",
    duration: "2 years",
    details: `Groundhandling operator.
    Perform loading and unloading and transportation tasks baggage, cargo and mail to and from aeroplanes, warehouses and terminals. 
    Drive vehicles and trailer material and position aircraft support equipment.
    Reception of passengers.`,
  },
  {
    year: "2012",
    job: "Portway, Ground handling operator",
    duration: "3 years",
    details: "Same functions the preview one",
  },
];

const Career = () => {
  return (
    <div id="career" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16 ">
      <h1 className="text-4xl font-bold text-center text-[#001b5e] ">Career</h1>
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
