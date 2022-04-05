import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import AddIcon from "@mui/icons-material/Add";
import { Transition } from "@headlessui/react";
import { CustCalendar } from "./CustCalendar";
import { AddAppointment } from "./AddAppointment";

export const Bar = () => {
  const router = useRouter();
  const [key, setKey] = useState();
  const [isShowing, setIsShowing] = useState(true);

  useEffect(() => {
    setKey(Cookies.get("patient"));
  }, [key]);



  const logout = () => {
    Cookies.remove("success");
    Cookies.remove("accesToken");
    Cookies.remove("patient");
    router.push("/");
  };

  return (
    <div className="md:flex min-w-min md:items-center lg:justify-center space-y-4 relative " >
      <div className="w-1/2 md:ml-4">
        <label className="text-[#00007f] font-poppins">Reference Key</label>
        <div className="bg-[#f6f6f6] h-10 w-80 rounded-md flex items-center mt-2">
          <p className="ml-4 font-poppins">{key}</p>
        </div>
      </div>
      <div className="w-full flex space-x-4 md:flex justify-end items-center md:mt-0 mx-auto md:mx-0 md:space-x-3  overflow-x-hidden">
        <button
          className="w-60 md:w-80 font-poppins md:px-12 py-3 text-white bg-blue-600 rounded-md hover:bg-blue-800 hover:duration-700"
          onClick={() => setIsShowing((isShowing) => !isShowing)}
        >
          <AddIcon className="text-[25px]" />
          Make an appointement
        </button>
        <button
          className="font-poppins px-12 py-3 text-white bg-blue-600 rounded-md hover:bg-blue-800 hover:duration-700"
          onClick={logout}
        >
          Logout
        </button>
      </div>

      <div className="w-3/6 h-screen md:h-96 absolute -right-2 md:top-24">
        <Transition as="div"
          // unmount={false}
          className=" h-[40rem]"
          show={isShowing}
          enter="transition-opacity duration-1000"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-1000"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          
        {/* <CustCalendar /> */}
          <AddAppointment />
        </Transition>
      </div>
    </div>
  );
};
