import React from "react";

export const Levels = () => {
  return (
    <div className="w-32 bg-white  flex flex-col items-center ">

      <div className="h-52 mt-10">
        <div className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center">
          <h1 className="text-white text-2xl">1</h1>
        </div>
        <div className="w-1 bg-black h-36 mx-auto"></div>
      </div>

      <div className="h-52 ">
        <div className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center">
          <h1 className="text-white text-2xl">2</h1>
        </div>
        <div className="w-1 bg-black h-36 mx-auto"></div>
      </div>

      <div className="h-52 ">
        <div className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center">
          <h1 className="text-white text-2xl">3</h1>
        </div>
      </div>
    </div>
  );
};
