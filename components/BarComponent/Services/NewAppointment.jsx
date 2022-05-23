import React, { useState, useContext, useEffect } from "react";
import { AddService } from "./AddServices/AddService";
import { PatientInformation } from "./SelectInformation/PatientInformation";
import { AppointmentDates } from "./TimeDate/AppointmentDates";
import { TimeAndDate } from "./TimeDate/TimeAndDate";
import { useSelector, useDispatch } from "react-redux";
import { saveData } from "../../../slices/userInfoSlice";
import { userContext } from "../Bar";
import { AppointmentContext } from "../../../context/AppointmentContext";
import { update, updateForm } from "../../../slices/showSlice";

export const NewAppointment = () => {
  const showed = useSelector((state) => state.show.showing);
  const [show, setShow] = useState(true);
  const { setIsShowing } = useContext(userContext);
  const dispatch = useDispatch();
  const { setIsTicket } = useContext(AppointmentContext);

  const saveInfo = () => {
    dispatch(saveData(show));
    setIsShowing(!show);
    dispatch(update(true));
    setIsTicket(show);
    localStorage.setItem("isSaved", "true");
  };
  const up = useSelector((state) => state.show.Form);
  return (
    <>
      <div className="w-full flex justify-center flex-col items-center space-y-8 bg-gray-700 p-4">
        <AddService />
        <PatientInformation />
        <AppointmentDates />
        <button
          className="py-2 px-20 rounded-md bg-white font-poppins hover:bg-gray-500 hover:text-white hover:duration-700"
          onClick={saveInfo}
        >
          Save
        </button>
      </div>
    </>
  );
};
