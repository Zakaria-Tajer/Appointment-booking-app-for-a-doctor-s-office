import React, { useState } from "react";
import { AddService } from "./AddServices/AddService";
import { PatientInformation } from "./SelectInformation/PatientInformation";
import { TimeAndDate } from "./TimeDate/TimeAndDate";


export const NewAppointment = () => {
 
  return (
    <div className="w-full flex justify-center flex-col items-center space-y-8 bg-gray-700 ">
      <AddService />
      <PatientInformation />
      <TimeAndDate />      
    </div>
  );
};
