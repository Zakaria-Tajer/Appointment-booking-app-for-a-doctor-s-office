import React, { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { RadioGroup } from "@headlessui/react";
import { AddPatientInfo } from "./AddPatientInfo";
import Cookies from "js-cookie";

const plans = [
  {
    name: "Your Self",
  },
];

export const PatientInformation = () => {
  const [hidden, setHidden] = useState(false);
  const [selected, setSelected] = useState(plans[0]);
  const [form, setForm] = useState(false);
  const [patientFullName, setPatientFullName] = useState("");
  const [patientBirthDay, setPatientBirthDate] = useState("");
  const [patientEmail, setPatientEmail] = useState("");
  const [patientPhoneNumber, setPatientPhoneNumber] = useState("");
 
  const getInfo = () => {
    setHidden(!hidden);
    const patient = Cookies.get("patient");
    const req = new XMLHttpRequest();
    req.open("POST", "http://localhost:8000/patient", true);
    req.onload = () => {
      if (req.readyState === XMLHttpRequest.DONE) {
        if (req.status === 200) {
          let data = JSON.parse(req.response);
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
  };


  return (
    <>
      {form == true ? (
        <AddPatientInfo name={patientFullName} BirthDate={patientBirthDay} email={patientEmail} phone={patientPhoneNumber}/>
      ) : (
        <div className="w-5/6 bg-white h-40 rounded py-2 px-4 ">
          <h1 className="font-poppins text-sm">
            Then you need to Add you&apos;r information
            <p></p>
          </h1>

          <div className="w-full flex items-center justify-center h-20 mt-6">
            <button
              className="w-3/4 border-2 border-blue-600 py-4 mb-4 font-poppins flex items-center justify-center"
              onClick={getInfo}
            >
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white mr-2">
                <AddIcon className="" />
              </div>
              Select Patient
            </button>
          </div>
          {hidden && (
            <div className="flex items-center w-3/4 bg-gray-400 shadow-xl rounded justify-center mx-auto">
              <div className="w-full px-4 py-2">
                <div className="w-full max-w-md mx-auto">
                  <RadioGroup
                    value={selected}
                    onChange={setSelected}
                    onClick={() => setForm(!form)}
                  >
                    <RadioGroup.Label className="sr-only">
                      Server size
                    </RadioGroup.Label>
                    <div className="space-y-2">
                      {plans.map((plan) => (
                        <RadioGroup.Option
                          key={plan.name}
                          value={plan}
                          // onChange={e=> handleForm}
                          className={({ active, checked }) =>
                            `${
                              active
                                ? "ring-2 ring-offset-2 ring-offset-sky-300 ring-white ring-opacity-60"
                                : ""
                            }
                  ${
                    checked ? "bg-sky-900 bg-opacity-75 text-white" : "bg-white"
                  }
                    relative rounded-lg shadow-md px-5 py-4 cursor-pointer flex focus:outline-none`
                          }
                        >
                          {({ active, checked }) => (
                            <>
                              <div className="flex items-center justify-between w-full">
                                <div className="flex items-center">
                                  <div className="text-sm">
                                    <RadioGroup.Label
                                      as="p"
                                      className={`font-medium  ${
                                        checked ? "text-white" : "text-gray-900"
                                      }`}
                                    >
                                      {plan.name}
                                    </RadioGroup.Label>
                                  </div>
                                </div>
                                {checked && (
                                  <div className="flex-shrink-0 text-white">
                                    <CheckIcon className="w-6 h-6" />
                                  </div>
                                )}
                              </div>
                            </>
                          )}
                        </RadioGroup.Option>
                      ))}
                    </div>
                  </RadioGroup>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

function CheckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
      <path
        d="M7 13l3 3 7-7"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
