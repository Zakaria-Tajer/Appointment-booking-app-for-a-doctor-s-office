import React from "react";

export const AddPatientInfo = ({ name, BirthDate, email, phone }) => {
  return (
    <div className="w-5/6 bg-white rounded py-3 px-4">
      <h1 className="font-poppins">Patient Information</h1>
      <div className="w-full  mt- p-1">
        <h1 className="font-poppins text-[25px]">{name}</h1>
        <hr className="mt-1 bg-black" />
        <div className="flex w-full bg-white h-20">
          <div className="w-1/2 mt-1">
            <h1 className="font-poppins text-[18px]">Email</h1>
            <h1 className="font-poppins text-[18px]">Phone</h1>
            <h1 className="font-poppins text-[18px]">BirthDate</h1>
          </div>
          <div className="w-1/2 mt-1">
            <h1 className="font-poppins text-[18px] text-gray-400">{email}</h1>
            <h1 className="font-poppins text-[18px] text-gray-400">(212){phone}</h1>
            <h1 className="font-poppins text-[18px] text-gray-400">{BirthDate}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
