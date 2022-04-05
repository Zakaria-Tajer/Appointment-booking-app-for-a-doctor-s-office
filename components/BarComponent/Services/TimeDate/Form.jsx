import React, { useState,useEffect } from "react";
import { Dialog } from "@headlessui/react";
import { CustCalendar } from "../../CustCalendar";
import requestCreator from '../../../../lib/requestCreator'
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



export const Form = () => {
  const [isOpen, setIsOpen] = useState(true);
  // const [startDates,setStartDate] = useState('');
  const [day,setDay] = useState('');
  const [titles,setTitle] = useState('');

  const [startedTime,setStartedTime] = useState('');
  const [endTime,setEndTime] = useState('');

  const [holder, setHolder]= useState([]);

  const schedulerData = [
    { startDate: startedTime, endDate: endTime, title: titles,days:day}
  ] 
  
  const saveAppointment = (data)=> {
    const {endDate,startDate,title} = data.added;
    
    setTitle(title)
    setDay(startDate.toLocaleDateString())
    setStartedTime(startDate.toLocaleTimeString())
    setEndTime(endDate.toLocaleTimeString())

    requestCreator('POST','http://localhost:8000/Appointment',`endTime=${endTime}&startedTime=${startedTime}&title=${title}&day=${day}`,'','','key')
    // localStorage.setItem('sched', JSON.stringify({end:endDate,start:startDate,Title:title}))
  }
  return (
    <Dialog
      open={isOpen}
      onClose={setIsOpen}
      className="fixed inset-0 flex items-center justify-center"
    >
      <Dialog.Overlay className="fixed inset-0 bg-gray-500/75" />

      <div className="bg-white mx-auto relative py-4 flex">
        <Scheduler data={schedulerData}>
          <ViewState onCurrentDateChange={new Date()}/>
          <EditingState onCommitChanges={saveAppointment}/>
          <IntegratedEditing />
          <WeekView startDayHour={9} endDayHour={16} excludedDays={[0,6]}/>
          <Appointments />
          <AppointmentForm />
        </Scheduler>
        {/* <CustCalendar /> */}
      </div>
    </Dialog>
    
  );
};
