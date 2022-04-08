import Head from "next/head";
import { Bar } from "../../components/BarComponent/Bar";
import { AppointementList } from "../../components/AppointementList";
import { Doctors } from "../../components/Doctors";
import { useState, useEffect } from "react";
import { AppointmentContext } from "../../context/AppointmentContext";

export async function getServerSideProps() {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Host": process.env.NEXT_PUBLIC_RAPID_HOST,
      "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY,
    },
  };
  const data = await fetch("https://heath-news.p.rapidapi.com/news", options);
  const response = await data.json();
  return {
    props: {
      response,
    },
  };
}

export default function UserPage({ response }) {
  const [isTicket, setIsTicket] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    const isSaved = localStorage.getItem("isSaved", "true");
    if (isSaved) {
      setIsSaved(true);
    }
    console.log(isSaved);
  }, []);

  return (
    <>
      <AppointmentContext.Provider value={{ isTicket, setIsTicket, isSaved }}>
        <Head>
          <title>Dashboard</title>
        </Head>
        <div className="min-h-screen bg-white  overflow-x-hidden">
          <div className="py-10 px-2 ">
            <Bar />
          </div>
          {isSaved == true ? (
            <div className="md:flex block overflow-y-auto">
              {window.innerWidth > 425 ? (
                <>
                  <div className="md:w-1/2 h-1/2">
                    <Doctors res={response} />
                  </div>
                  <div className="md:w-1/2 h-1/2">
                    <AppointementList />
                  </div>
                </>
              ) : (
                <>
                  <div className="md:w-1/2 h-1/2">
                    <AppointementList />
                  </div>
                  <div className="md:w-1/2 h-1/2">
                    <Doctors res={response} />
                  </div>
                </>
              )}
            </div>
          ) : (
            <div className={"overflow-y-auto"}>
              <div className="w-full h-1/2">
                <Doctors res={response} />
              </div>
              <div className="w-1/2 h-1/2">
                <AppointementList />
              </div>
            </div>
          )}
        </div>
      </AppointmentContext.Provider>
    </>
  );
}
