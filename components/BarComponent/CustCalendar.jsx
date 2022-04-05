import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export const CustCalendar = () => {
  const [value, onChange] = useState(new Date());
  console.log(value.getDate());
  return (
    <div className='w-1/3 bg-blue-400 flex flex-col items-center ml-2'>
      <Calendar 
        onChange={onChange} 
        value={value} 
        minDate={new Date()}
      />      
    </div>
    
  )
}
