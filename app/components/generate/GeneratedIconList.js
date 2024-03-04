import React, { useContext } from "react";
import { GenerateIconContext } from "@/app/context/GenerateIconContext";
import GeneratedIconCard from "./GeneratedIconCard";
const GeneratedIconList = () => {
  const { generatedIcon, setIsGenerated } = useContext(GenerateIconContext);
  return (
    <div className="bg-white mt-40 mx-auto w-1/2">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-10">
        Your Generated Icons
      </h1>
      <div className="flex gap-4 flex-wrap items-center">
        {generatedIcon.map((icon) => (
          <GeneratedIconCard key={icon.id} icon={icon} />
        ))}
      </div>
      <button
        className="rounded-md mt-4 bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        onClick={() => setIsGenerated(false)}
      >
        Generate More
      </button>
    </div>
  );
};

export default GeneratedIconList;
