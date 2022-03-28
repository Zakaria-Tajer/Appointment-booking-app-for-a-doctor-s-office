import Head from "next/head";
import Image from "next/image";
import Lottie from "lottie-web";
import { useRef,useEffect,useState } from "react";
// import animation from '../public/79183-online-medical-services.json'



export default function Home() {

  const container = useRef(null)

  useEffect(()=> {
    Lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../public/lf30_editor_wql5xgcu.json')
    })
  }, [])


  return (
    <>
      <Head>
        <title>Register</title>
      </Head>
      <div className="bg-gray-300 min-h-screen flex">
        <div className="w-3/5 bg-white h-screen " ref={container}></div>

        {/* form */}

        <div className="bg-blue-600 w-2/5">
          <div className="bg-white flex items-center">
          <form action="" className="">
            <input type="text" name="" id="" placeholder="owww"/>
            <input type="text" name="" id="" placeholder="owww"/>
            <input type="text" name="" id="" placeholder="owww"/>
          </form>

          </div>
        </div>


      </div>
    </>
  );
}
