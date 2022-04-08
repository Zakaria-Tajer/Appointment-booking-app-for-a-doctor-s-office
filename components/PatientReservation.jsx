import Cookies from "js-cookie";
import React, { useState, useEffect } from "react";

export const PatientReservation = () => {
  const [item, setItem] = useState("");
  const [patientFullName, setPatientFullName] = useState("");
  const [patientBirthDay, setPatientBirthDate] = useState("");
  const [patientEmail, setPatientEmail] = useState("");
  const [patientPhoneNumber, setPatientPhoneNumber] = useState("");

  // todo: on click save display this ticket ? idk : ticket


  useEffect(() => {
    const service = sessionStorage.getItem("service");
    setItem(service);
    const patient = Cookies.get("patient");
    const req = new XMLHttpRequest();
    req.open("POST", "http://localhost:8000/patient", true);
    req.onload = () => {
      if (req.readyState === XMLHttpRequest.DONE) {
        if (req.status === 200) {
          let data = JSON.parse(req.response);
          console.log(data);
          let patientEmail = data[0];
          let patientName = data[1];
          let patientBirthdate = data[2];
          let patientPhoneNumber = data[3];

          setPatientFullName(patientName);
          setPatientBirthDate(patientBirthdate);
          setPatientEmail(patientEmail);
          setPatientPhoneNumber(patientPhoneNumber);
        }
      }
    };
    req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    req.send(`patientRef=${patient}`);
  }, []);

  return (
    <>
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Applicant Information
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Personal details and application.
            </p>
          </div>
          <div className="border-t border-gray-200">
            <dl>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Full name</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {patientFullName}
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Application for a
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {item == null ? (
                    <h1 className="font-poppins text-lg text-blue-800">
                      you have no appointment Reserved Yet{" "}
                    </h1>
                  ) : (
                    item
                  )}
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Email address
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {patientEmail}
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Patient BirthDate
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {patientBirthDay}
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Phone Number
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  (+212) {patientPhoneNumber}
                </dd>
              </div>
            </dl>
          </div>
        </div>
    </>
  );
};
