import requestCreator from "../lib/requestCreator";
import { useState,useContext } from "react";
import { useRouter } from "next/router";
import tokenCreator from "../lib/tokenCreator";
import Cookies from "js-cookie";
import { LoginContext } from "../pages";


export const Login = () => {

  const { isHidden,setIsHidden } = useContext(LoginContext)

  const [refKey, setRefKey] = useState("");
  const router = useRouter();
  const loginUser = () => {
    requestCreator(
      "POST",
      "http://localhost:8000/login",
      `refKey=${refKey}`,
      "/dashboard/userPage",
      router
    );
    const token = Cookies.get("accesToken");
    if (token) {
      // if token exist dont do anything
      tokenCreator(refKey, "patient");
    } else {
      tokenCreator(refKey);
    }
    console.log(refKey);
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center ">
      <div className="mx-auto space-y-5 ">
        <h1 className="font-poppins text-[40px] md:text-center md:text-[29px] lg:text-[40px] font-bold text-center">
          Welcome back
        </h1>
        <p className="font-Roboto text-center md:text-left">
          Welcome back to your medical platfrom. Please sign in back to{" "}
          <br></br>get access to your medical data
        </p>
        <div className="space-y-3 ">
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <label className="text-[#00007f] font-poppins block ml-4 md:ml-0 ">
              Reference Key
            </label>
            <input
              type="text"
              className="rounded-lg md:ml-0 ml-4 w-[300px] mx-auto md:w-11/12 px-10 py-3 bg-[#f6f6f8] outline-none focus:ring-2 focus:ring-offset-4 ring-blue-700"
              placeholder="Reference Key"
              onChange={(e) => setRefKey(e.target.value)}
            />
            <button
              className="md:w-11/12 block w-[300px] ml-4 md:ml-0 py-3 mt-3 bg-blue-600 rounded-md text-white font-poppins hover:duration-700 hover:bg-blue-900"
              onClick={loginUser}
              type="submit"
            >
              Login
            </button>
            <h2 className="text-[#00308F] text-center mt-2 font-poppins mx-auto md:-translate-x-10 text-[17px]">
              Not Registered?
              <a
                className="ml-2 text-[#0a2351] text-[18px] cursor-pointer hover:underline hover:underline-offset-2"
                onClick={()=> setIsHidden(!isHidden)}
              >
                Register
              </a>
            </h2>
          </form>
        </div>
      </div>
    </div>
  );
};
