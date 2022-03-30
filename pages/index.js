import Head from "next/head";
import { Vector } from "../components/vector";
import { useState, useRef } from "react";
import { Login } from "../components/Login";
import { v4 as uuidv4 } from "uuid";
import toast from "react-hot-toast";
import { useRouter } from "next/router";
import requestCreator from "../lib/requestCreator";

export default function Home() {
  const [isHidden, setIsHidden] = useState(true);
  const [regtFor, setRegFor] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmationPass, setConPass] = useState("");
  const [date, setDate] = useState();
  const unique_id = uuidv4();

  const router = useRouter();

  const switchForm = () => {
    setIsHidden(!isHidden);
  };

  const reg = (e) => {
    setRegFor(e.target.value);
  };
  const getName = (e) => {
    setFullName(e.target.value);
  };
  const getPassword = (e) => {
    setPassword(e.target.value);
  };
  const getPasswordConfirmation = (e) => {
    setConPass(e.target.value);
  };

  const getBirthDate = (e) => {
    setDate(e.target.value);
  };

  const getFormData = () => {
    requestCreator(
      // Metohd wanted
      "POST", 
      // url to fetch
      "http://localhost:8000/register",
      // data to send
      `forWho=${regtFor}&fullName=${fullName}&password=${password}&confirmationPass=${confirmationPass}&BirthDate=${date}&unique_id=${unique_id}`,
      // on success push user to userPage
      "/userPage",
      router
    );
  };

  return (
    <>
      <Head>
        <title>Register</title>
      </Head>
      <div className="min-h-screen md:flex">
        <div className="w-full md:w-3/5 xs:w-full bg-white h-96 md:h-screen ">
          <Vector />
        </div>
        {/* form */}

        <div className="md:w-2/5 flex flex-col sm:block">
          {isHidden ? (
            <div className="mt-14">
              <h1 className="text-[20px] font-poppins  text-center md:text-left md:text-[35px] p-2 ">
                Welcome to medical center
              </h1>

              <form
                className="bg-white p-2 space-y-8"
                onSubmit={(e) => e.preventDefault()}
                action="/api/register"
              >
                <div>
                  <label
                    htmlFor=""
                    className="block mb-2 text-[#00007f] font-poppins"
                  >
                    I am Registering for
                  </label>
                  <div className="flex space-x-4">
                    <div className="flex items-center space-x-2 border-[1px] p-2 w-40 rounded-lg">
                      <input
                        type="radio"
                        placeholder=""
                        className=""
                        value="mySelf"
                        onChange={reg}
                      />
                      <h2 className="text-[#00007f] font-poppins">my Self</h2>
                    </div>

                    <div className="flex items-center space-x-2 border-[1px] p-2 w-40 rounded-lg">
                      <input
                        type="radio"
                        placeholder=""
                        className=""
                        value="OtherPeople"
                        onChange={reg}
                      />
                      <h2 className="text-[#00007f] font-poppins">
                        Other people
                      </h2>
                    </div>
                  </div>
                </div>

                <div className="">
                  <label className="text-[#00007f] font-poppins block mb-2">
                    Patient&apos;s Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Full name"
                    className="py-3 px-10 outline-none rounded-lg w-full md:w-4/5 bg-[#f6f6f8] focus:ring-2 focus:ring-offset-4 ring-blue-700"
                    onChange={getName}
                    name="fullName"
                  />
                </div>

                {/* add mobile phone verification */}
                <div>
                  <label className="text-[#00007f] font-poppins block mb-2">
                    Patient&apos;s BirthDate
                  </label>
                  <input
                    type="date"
                    className="border-[2px] py-2 focus:ring-2 focus:ring-offset-2 outline-none ring-blue-700 rounded-md px-5"
                    onChange={getBirthDate}
                  />
                </div>

                <div className="space-y-4">
                  <label className="text-[#00007f] font-poppins block ">
                    Password
                  </label>
                  <input
                    type="password"
                    className="rounded-lg w-full md:w-4/5 px-10 py-3 bg-[#f6f6f8] outline-none focus:ring-2 focus:ring-offset-4 ring-blue-700"
                    placeholder="password"
                    onChange={getPassword}
                  />
                  <label className="text-[#00007f] font-poppins block">
                    Password Confirmation
                  </label>
                  <input
                    type="password"
                    className="rounded-lg w-full mx-auto md:w-4/5 px-10 py-3 bg-[#f6f6f8] outline-none focus:ring-2 focus:ring-offset-4 ring-blue-700"
                    placeholder="password Confirmation"
                    onChange={getPasswordConfirmation}
                  />
                </div>
                <button
                  className="bg-blue-600 w-full text-white md:w-4/5  py-3 rounded-lg font-poppins hover:bg-blue-900 hover:duration-700"
                  onClick={getFormData}
                  type="submit"
                >
                  Submit
                </button>
                <div className="flex">
                  <h2 className="text-[#00308F] font-poppins mx-auto md:-translate-x-10 text-[17px]">
                    Already Registered?
                    <a
                      className="ml-2 text-[#0a2351] text-[20px] cursor-pointer hover:underline hover:underline-offset-2"
                      onClick={switchForm}
                    >
                      Login
                    </a>
                  </h2>
                </div>
              </form>
            </div>
          ) : (
            <Login />
          )}
        </div>
      </div>
    </>
  );
}
