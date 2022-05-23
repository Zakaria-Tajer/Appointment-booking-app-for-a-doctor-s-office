import React, { useState, useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { OpenForm, update } from "../../../../slices/showSlice";
import AddIcon from "@mui/icons-material/Add";
import { Form } from "./Form";
import { TimeAndDate } from "./TimeAndDate";
import { TimeContext } from "../../../../context/TimeContext";

export const AppointmentDates = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [showing, setShowing] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!sessionStorage.getItem("schedule")) {
      dispatch(update(false));
    } else {
      setShowing(true);
      const { startDate, endDate } = JSON.parse(
        sessionStorage.getItem("schedule")
      );

      setStartDate(startDate);
      setEndDate(endDate);
    }
  }, [dispatch, startDate, endDate]);

  const editAppointment = () => {
    // dispatch(update(false));
    console.log(1111);
    dispatch(OpenForm(true));
  };
  const times = useSelector((state) => state.Times);
  const OpenedForm = useSelector((state) => state.show.Form);
  const [hidden, setHidden] = useState(false);
  const { close , setClose } = useContext(TimeContext)
  return (
    <>
      {OpenedForm || showing ? (
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
                <span className="text-black mr-2">
                  Appointement Start Date:
                </span>
                {startDate ? startDate : "No Appointments yet"}
              </h1>
              <h1 className="text-xl font-poppins text-gray-400">
                <span className="text-black mr-2">Appointement End Date:</span>
                {endDate ? endDate : "No Appointments yet"}
              </h1>
            </div>
          </div>
        </div>
      ) : (
        <>
          {hidden ? (
            <Form closeWindow={(event) => setHidden(event)} hide={hidden} />
          ) : (
            <div className="w-5/6 bg-white rounded py-3 px-4 ">
              <div>
                <h1 className="font-poppins">Time & date </h1>
                <div className="w-full flex items-center justify-center h-20 mt-5">
                  <button
                    className="w-3/4 border-2 border-blue-600 py-4 mb-4 font-poppins flex items-center justify-center"
                    onClick={()=> setHidden(!hidden)}
                  >
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white mr-2">
                      <AddIcon />
                    </div>
                    Select Time & Date
                  </button>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};
