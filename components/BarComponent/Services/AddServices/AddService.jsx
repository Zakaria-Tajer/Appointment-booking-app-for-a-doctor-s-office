import React, { useState, createContext } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Combobox } from "@headlessui/react";
import { AppointementService } from "./AppointementService";

const people = [
  "Nephrologists",
  "Cardiologists",
  "Neurologists",
  "Radiologists",
  "Pediatricians",
];

export const AddService = () => {
  const [selectedPerson, setSelectedPerson] = useState("");
  const [query, setQuery] = useState("");
  const [hidden, setHidden] = useState(false);
  const [isDisplayed, setIsDisplayed] = useState(true);

  const filteredPeople =
    query === ""
      ? people
      : people.filter((person) => {
          return person.toLowerCase().includes(query.toLowerCase());
        });

  const closeBar = () => {
    setIsDisplayed(!isDisplayed);
  };
  const getValue =  (e)=> {
    console.log(selectedPerson);
  }
  return (
    <>
      {isDisplayed ? (
        <div className="w-5/6 bg-white h-40 rounded py-2 px-4 ">
          <h1 className="font-poppins ">First you need to add a service</h1>

          <div className="w-full h-32 flex flex-col items-center justify-center">
            <button
              className="w-3/4 border-2 border-blue-600 py-4 mb-4 font-poppins flex items-center justify-center"
              onClick={() => setHidden(!hidden)}
            >
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white mr-2">
                <AddIcon className="" />
              </div>
              Add Service
            </button>
            {hidden && (
              <div className="bg-white fixed py-2 w-96 h-aut0 flex flex-col items-center mt-32 shadow-xl ">
                <Combobox value={selectedPerson} onChange={setSelectedPerson}>
                  <Combobox.Input
                    className="w-5/6 py-4 px-5 rounded outline-none font-poppins text-sm bg-gray-200"
                    placeholder="Search..."
                    onChange={(event) => setQuery(event.target.value)}
                  />
                  <Combobox.Options
                    className="fixed bg-white w-96 text-center py-2 mt-14 shadow-lg"
                    onClick={closeBar}
                    onChange={getValue}
                  >
                    {filteredPeople.map((person) => (
                      <Combobox.Option
                        key={person}
                        value={person}
                        className="py-2 mb-2 hover:bg-gray-400 hover:text-white hover:duration-700 cursor-pointer"
                      >
                        {person}
                      </Combobox.Option>
                    ))}
                  </Combobox.Options>
                </Combobox>
              </div>
            )}
          </div>
        </div>
      ) : (
        <AppointementService ChosenService={selectedPerson} />
      )}
    </>
  );
};
