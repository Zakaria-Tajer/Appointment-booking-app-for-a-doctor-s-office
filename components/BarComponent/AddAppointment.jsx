import React from "react";
import { Levels } from "./Levels";
import { NewAppointment } from "./Services/NewAppointment";

export const AddAppointment = () => {
  return (
    <div className="shadow-xl flex">
      <Levels />
      <NewAppointment />
    </div>
  );
};
