import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import requestCreator from "../../../../lib/requestCreator";
import Cookies from "js-cookie";
import {
  ViewState,
  EditingState,
  IntegratedEditing,
} from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  WeekView,
  Appointments,
  AppointmentForm,
} from "@devexpress/dx-react-scheduler-material-ui";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { OpenForm, update, updateForm } from "../../../../slices/showSlice";
import { setTimes } from "../../../../slices/timeSlice";
import { TimeContext } from "../../../../context/TimeContext";

export const Form = ({ closeWindow, hide }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [close, setClose] = useState(false);
  const [day, setDay] = useState("");
  const [titles, setTitle] = useState([""]);
  const [err, setErr] = useState(false);

  const [startedTime, setStartedTime] = useState([""]);
  const [endTime, setEndTime] = useState([""]);

  const [parsedStartedTime, setParsedStartedTime] = useState("");
  const [parsedEndTime, setParsedEndTime] = useState("");

  const patientKey = Cookies.get("patient");

  const schedulerData = [
    { startDate: startedTime, endDate: endTime, title: titles, days: day },
  ];

  const dispatch = useDispatch();
  const saveAppointment = (data) => {
    const { endDate, startDate, title } = data.added;

    setTitle(title);
    setDay(startDate);
    setStartedTime(startDate);
    setEndTime(endDate);
    // console.log(endDate.toLocaleDateString());

    sessionStorage.setItem(
      "schedule",
      JSON.stringify({
        startDate: startDate.toLocaleString(),
        endDate: endDate.toLocaleString(),
        Title: title,
        Starttime: "",
      })
    );
    setParsedStartedTime(startDate.toLocaleString());
    setParsedEndTime(endDate.toLocaleString());
    const req = new XMLHttpRequest();
    req.open("POST", "http://localhost:8000/getReservedAppointments", true);
    req.onload = () => {
      if (req.readyState === XMLHttpRequest.DONE) {
        if (req.status === 200) {
          let data = req.response;
          console.log(data);
          if (data == "reserved") {
            setErr(true);
            toast.error("please choose another date");
          } else if (data == "") {
            setErr(false);
          }
        }
      }
    };
    req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    req.send(
      `endDate=${endDate.toLocaleTimeString()}&startDate=${
        startDate ? startDate.toLocaleTimeString() : startDate
      }&day=${startDate.toLocaleDateString()}`
    );
    if (err == true) {
    } else {
      requestCreator(
        "POST",
        "http://localhost:8000/Appointment",
        `endTime=${endDate.toLocaleTimeString()}&startedTime=${startDate.toLocaleTimeString()}&title=${title}&day=${startDate.toLocaleDateString()}&unique_Patient_id=${patientKey}`,
        "",
        "",
        "key"
      );
    }
    dispatch(setTimes({ parsedStartedTime, parsedEndTime }));
  };
  const closeDateForm = () => {
    // dispatch(update(true))
    // dispatch(OpenForm())
    setClose(!close)
    closeWindow(!hide);
  };
  return (
    <>
      <TimeContext.Provider value={{close,setClose}}>
        <Dialog
          open={isOpen}
          onClose={setIsOpen}
          className="fixed inset-0 flex flex-col items-center justify-center"
        >
          <div className="w-full h-10 z-10 translate-y-4 flex justify-end mr-5">
            <button
              className="font-poppins px-12 w-36 py-3 text-white bg-blue-600 rounded-md hover:bg-blue-800 hover:duration-700"
              onClick={closeDateForm}
            >
              close
            </button>
          </div>
          <Dialog.Overlay className="fixed inset-0 bg-gray-500/75" />

          <div className="bg-white mx-auto relative py-4 flex mt-10">
            <Scheduler data={schedulerData}>
              <ViewState onCurrentDateChange={new Date()} />
              <EditingState onCommitChanges={saveAppointment} />
              <IntegratedEditing />
              <WeekView
                startDayHour={9}
                endDayHour={16}
                excludedDays={[0, 6]}
              />
              <Appointments />
              <AppointmentForm />
            </Scheduler>
            {/* <CustCalendar /> */}
          </div>
        </Dialog>
      </TimeContext.Provider>
    </>
  );
};
