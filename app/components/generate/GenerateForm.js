"use client";
import React, { useContext, useEffect } from "react";
import Tabs from "./Tabs";
import PromptInfo from "./PromptInfo";
import { GenerateIconContext } from "@/app/context/GenerateIconContext";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import { iconStyles } from "@/app/constants/main";

const GenerateForm = () => {
  const { generateIcon, setGenerateIcon } = useContext(GenerateIconContext);

  // change values in state
  const handleStateChange = (event) => {
    setGenerateIcon({
      ...generateIcon,
      [event.target.name]: event.target.value,
    });
  };

  // control number of icons
  const handleNumIcons = (event) => {
    setGenerateIcon((prevGenerateIcon) => {
      const updatedNumIcons =
        event.target.id === "plus" || event.target.parentElementId === "plus"
          ? prevGenerateIcon.numIcons + 1
          : prevGenerateIcon.numIcons - 1;
      return {
        ...prevGenerateIcon,
        numIcons: updatedNumIcons >= 0 ? updatedNumIcons : 0,
      };
    });
  };

  // handle generate icon
  const handleGenerateIcon = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXTAUTH_URL}/api/generate/${session?.user?.id}`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // colors
  const classes = [
    " rounded-full bg-black p-5 mr-2 cursor-pointer",
    "rounded-full bg-red-500 p-5 mr-2 cursor-pointer",
    "rounded-full bg-orange-500 p-5 mr-2 cursor-pointer",
    "rounded-full bg-yellow-500 p-5 mr-2 cursor-pointer",
    "rounded-full bg-green-500 p-5 mr-2 cursor-pointer",
    "rounded-full bg-blue-500 p-5 mr-2 cursor-pointer",
    "rounded-full bg-indigo-500 p-5 mr-2 cursor-pointer",
    "rounded-full bg-violet-500 p-5 mr-2 cursor-pointer",
  ];

  return (
    <div className="mt-32 px-20 mx-auto w-[600px]">
      <span className="inline-flex items-center rounded-full bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10 mb-6">
        Generate Icon
      </span>
      <div>
        <h3 className="text-base font-semibold leading-7 text-gray-900">
          Which elements would you want featured in your icons?
        </h3>
        <p className="text-sm leading-7 text-gray-600">
          Keep it concise and straightforward.
        </p>
        <label htmlFor="email" className="sr-only">
          Email
        </label>
        <div className="flex items-center">
          <input
            type="email"
            name="prompt"
            id="email"
            className="inline-block  w-full mt-2 rounded-md border-0 py-2 px-4 mr-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  outline-0 sm:text-sm sm:leading-6"
            placeholder="e.g. an angry bear"
            value={generateIcon.prompt}
            onChange={handleStateChange}
          />
          <div className="relative">
            <PromptInfo />
          </div>
        </div>
      </div>
      <div className="mt-10">
        <h3 className="text-base font-semibold leading-7 text-gray-900">
          Which color suits your app the most?
        </h3>
        {/* <Tabs /> */}
        <div className="grid grid-cols-8 mt-2 gap-4 items-center">
          {classes.map((color) => (
            <div className={color}></div>
          ))}
        </div>
        <div>
          <h3 className="text-base font-semibold leading-7 text-gray-900 mt-10">
            Which style would you like?
          </h3>
          {iconStyles.map((style) => (
            <button key={style} className="bg-red-500 text-white p-2 m-2">
              {style}
            </button>
          ))}
          <h3 className="text-base font-semibold leading-7 text-gray-900 mt-10 mb-3">
            How many icons do you need?
          </h3>
          <div className="flex items-center">
            <button
              type="button"
              id="minus"
              onClick={handleNumIcons}
              className="rounded-full   bg-indigo-600 p-1 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              <MinusIcon id="minus" className="h-5 w-5" aria-hidden="true" />
            </button>
            <div className="rounded-md border-0 py-2 px-4 mx-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  outline-0 sm:text-sm sm:leading-6">
              {generateIcon.numIcons}
            </div>

            <button
              type="button"
              id="plus"
              onClick={handleNumIcons}
              className="rounded-full bg-indigo-600 p-1 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              <PlusIcon id="plus" className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
          <button
            onClick={handleGenerateIcon}
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Generate
          </button>
        </div>
      </div>
    </div>
  );
};

export default GenerateForm;
