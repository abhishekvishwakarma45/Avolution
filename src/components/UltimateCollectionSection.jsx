import React from "react";

const UltimateCollectionSection = () => {
  return (
    <div className="w-full h-auto sm:px-20 lg:px-40">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 place-items-center">
        <div className="w-full h-auto">
          <div className="relative w-full h-[50vh]">
            <img
              src="cropped.jpg"
              alt="Ultimate Collection"
              className="object-cover w-full h-full rounded-tr-4xl rounded-bl-4xl"
              loading="lazy"
            />
          </div>
          <div className="flex flex-col items-center p-4">
            <h1
              className="text-3xl md:text-4xl xl:text-4xl font-bold text-center text-gray-800 uppercase"
              style={{ fontFamily: "Unbounded, serif" }}
            >
              The Ultimate Collection – Perfect for Every Day.
            </h1>
            <button className="mt-6 px-8 py-2 bg-black text-white uppercase font-bold rounded-xs transition-all hover:bg-gray-800">
              Explore Now
            </button>
          </div>
        </div>
        <div className="w-full h-[70vh]">
          <img
            src="mohamad-khosravi-N88xBPX2-m8-unsplash.jpg"
            alt="Collection Display"
            className="object-cover w-full h-full rounded-tr-4xl rounded-bl-4xl"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default UltimateCollectionSection;
