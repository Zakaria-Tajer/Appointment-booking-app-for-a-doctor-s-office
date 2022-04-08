import React, { useState,useEffect } from "react";
import { useDispatch } from "react-redux";
import { update } from "../../../../slices/showSlice";

export const AppointmentDates = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [showing,setShowing] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const { startDate, endDate } = JSON.parse(
      sessionStorage.getItem("schedule")
    );

    setStartDate(startDate);
    setEndDate(endDate);
  }, []);

  const editAppointment = ()=> {
    dispatch(update({showing}))
  }

  return (
    <div className="w-5/6 bg-white rounded py-3 px-4 ">
      <div className="flex items-center justify-between">
        <h1 className="font-poppins">Time & date </h1>
        <button 
            className="font-poppins text-blue-700 font-bold cursor-pointer"
            onClick={editAppointment}
        >
          Edit
        </button>
      </div>
      <div className="w-full flex items-center justify-center h-20 mt-5">
        <div className="w-full -mt-7 py-3 px-2">
          <h1 className="text-xl font-poppins text-gray-400">
            <span className="text-black mr-2">Appointement Start Date:</span>
            {startDate}
          </h1>
          <h1 className="text-xl font-poppins text-gray-400">
            <span className="text-black mr-2">Appointement End Date:</span>
            {endDate}
          </h1>
        </div>
      </div>
    </div>
  );
};
