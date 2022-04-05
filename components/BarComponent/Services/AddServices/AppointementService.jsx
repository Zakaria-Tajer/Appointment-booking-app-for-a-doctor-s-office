import React from "react";

export const AppointementService = ({ ChosenService }) => {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-5/6 bg-white h-40 rounded py-2 px-4">
        <h1 className="font-poppins text-sm">Service information</h1>
        <div className=" h-10 mt-10 flex justify-between">
          <h1 className="font-poppins text-xl ">{ChosenService}</h1>
          <div className="h-11 rounded w-44 bg-lime-600 text-white cursor-pointer flex items-center justify-center font-poppins text-sm">
            Appointment Room
          </div>
        </div>
      </div>
    </div>
  );
};
