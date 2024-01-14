import React from "react";

const GeneratedIcon = ({ setGeneratedIcon }) => {
  return (
    <div className="mt-36 flex flex-col justify-center items-start container mx-auto ">
      <h3 className="text-4xl font-bold tracking-tight text-gray-900 mb-6">
        Your Generated Icons
      </h3>
      <div>
        <img
          src="https://appicons.ai/images/hero.png"
          className="h-28 w-28 bg-red-500"
        />
        <button
          onClick={() => setGeneratedIcon(null)}
          className="rounded-md bg-indigo-600 mt-3 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Generate More
        </button>
      </div>
    </div>
  );
};

export default GeneratedIcon;
