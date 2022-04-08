import React, { useEffect, useState, useContext } from "react";
import { EmptyVector } from "./emptyVector";
import { useSelector } from "react-redux";
import { PatientReservation } from "./PatientReservation";
export const AppointementList = () => {
  const show = useSelector((state) => state.user.show);
  const [serv, setServ] = useState("");

  useEffect(() => {
    const service = sessionStorage.getItem("service");
    setServ(service);
  }, [serv]);

  return (
    <div className="shadow-lg h-1/2">
      <PatientReservation />
    </div>
  );
};
