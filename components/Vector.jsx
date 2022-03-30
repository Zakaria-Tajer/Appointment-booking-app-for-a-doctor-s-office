import Lottie from "lottie-web";
import { useRef, useEffect } from "react";

export const Vector = () => {
  const container = useRef(null);

  useEffect(() => {
    Lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../public/lf30_editor_wql5xgcu.json"),
    });
  }, []);

  return (
      <div className="md:h-screen" ref={container}></div>
  );
};
