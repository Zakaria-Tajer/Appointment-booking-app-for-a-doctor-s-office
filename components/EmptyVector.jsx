import React,{ useRef,useEffect} from 'react'
import Lottie from "lottie-web";

export const EmptyVector = () => {

    const container = useRef(null);

    useEffect(() => {
      Lottie.loadAnimation({
        container: container.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: require("../public/87830-empty-search.json"),
      });
    }, []);
  return (
    <div className='bg-white' ref={container}></div>
  )
}
