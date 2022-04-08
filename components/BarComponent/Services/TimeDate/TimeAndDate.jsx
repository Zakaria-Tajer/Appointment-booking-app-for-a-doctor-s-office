import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Form } from "./Form";

export const TimeAndDate = () => {
  const [hidden, setHidden] = useState(false);
  
  return (
    <>
      {hidden ? (
        <Form closeWindow={(event) => setHidden(event)} />
      ) : (
        <div className="w-5/6 bg-white rounded py-3 px-4 ">
          <div>
            <h1 className="font-poppins">Time & date </h1>
            <div className="w-full flex items-center justify-center h-20 mt-5">
              <button
                className="w-3/4 border-2 border-blue-600 py-4 mb-4 font-poppins flex items-center justify-center"
                onClick={() => setHidden(!hidden)}
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
  );
};
