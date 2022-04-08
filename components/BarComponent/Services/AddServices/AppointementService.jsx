import React,{useContext,useEffect} from "react";
import { userContext } from "../../Bar";

export const AppointementService = ({ ChosenService }) => {
  
  sessionStorage.setItem('service',ChosenService)

  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-5/6 bg-white h-40 rounded py-2 px-4">
        <div className="flex justify-between">
          <h1 className="font-poppins text-sm">Service information</h1>
        </div>
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
