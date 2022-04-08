import React from "react";


export const Doctors = ({ res }) => {

  return (
    <div className="">
        <h1 className="text-center p-2 text-2xl font-poppins">
          {"check out latest medical news".toLocaleUpperCase()}
        </h1>
      <div className=" space-y-2 justify-center space-x-5 mt-5 flex flex-wrap h-[710px] overflow-y-scroll scrollBar track thumb">
        {res.map((news,i) => (
          <div
            key={i}
            className="max-w-sm rounded overflow-hidden shadow-xl bg-white ml-3"
          >
            <img
              src={news.image.src}
              alt="news"
              width="200"
              height="200"
              className="w-full"
            />
            <div className="px-6 py-4 ">
              <div className="font-bold text-xl mb-2">{news.title}</div>
              <p className="text-gray-700 text-base">{news.description}</p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #news
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #today
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #medical
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
