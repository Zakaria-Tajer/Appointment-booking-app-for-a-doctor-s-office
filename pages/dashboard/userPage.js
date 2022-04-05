import Head from "next/head";
import { Bar } from "../../components/BarComponent/Bar";
import { Doctors } from "../../components/Doctors";

export default function userPage() {
  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <div className="min-h-screen bg-white  overflow-x-hidden">
        <div className="py-10 px-2 ">
          <Bar />
        </div>
        <div className="bg-blue-400 flex ">
          {/* <CustCalendar /> */}
          <Doctors />

          {/* <CustCalendar /> */}
        </div>
      </div>
    </>
  );
}
