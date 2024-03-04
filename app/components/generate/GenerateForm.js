"use client";
import React, { useContext, useEffect, useState } from "react";
import Tabs from "./Tabs";
import PromptInfo from "./PromptInfo";
import { GenerateIconContext } from "@/app/context/GenerateIconContext";
import { CheckIcon, MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import { iconStyles } from "@/app/constants/main";
import gradient from "../../../public/assets/images/gradient.png";
import Image from "next/image";
import { useSession } from "next-auth/react";
import ErrorAlert from "./ErrorAlert";

const GenerateForm = () => {
  const { generateIcon, setGenerateIcon, setGeneratedIcon, setIsGenerated } =
    useContext(GenerateIconContext);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({
    prompt: false,
    color: false,
    style: false,
  });

  const { status, data: session } = useSession();

  // change values in state
  const handleStateChange = (event) => {
    setGenerateIcon({
      ...generateIcon,
      [event.target.name]: event.target.value,
    });
  };

  // change current style
  const changeCurrentStyle = (event) => {
    setGenerateIcon({
      ...generateIcon,
      style: event.target.id,
    });
  };

  // handle select color
  const handleSelectColor = (event, classType) => {
    generateIcon.color !== classType.color &&
      setGenerateIcon({
        ...generateIcon,
        color: event.target.id,
      });
  };

  // add number of icons
  const addNumIcons = () => {
    setGenerateIcon((prevGenerateIcon) => {
      return {
        ...prevGenerateIcon,
        numIcons: prevGenerateIcon.numIcons + 1,
      };
    });
  };

  // subtract number of icons
  const subtractNumIcons = () => {
    setGenerateIcon((prevGenerateIcon) => {
      return {
        ...prevGenerateIcon,
        numIcons:
          prevGenerateIcon.numIcons - 1 < 1 ? 1 : prevGenerateIcon.numIcons - 1,
      };
    });
  };

  // handle generate icon
  const handleGenerateIcon = async () => {
    // Reset errors
    setErrors({
      prompt: false,
      color: false,
      style: false,
    });

    // Collect error conditions
    const validationErrors = [];

    // Check for empty fields
    if (!generateIcon.prompt.trim()) {
      validationErrors.push("prompt");
    }

    if (!generateIcon.color) {
      validationErrors.push("color");
    }

    if (!generateIcon.style) {
      validationErrors.push("style");
    }

    // Display all collected errors
    setErrors((prevErrors) => ({
      ...prevErrors,
      prompt: validationErrors.includes("prompt"),
      color: validationErrors.includes("color"),
      style: validationErrors.includes("style"),
    }));

    // Check if there are any errors before proceeding
    if (validationErrors.length > 0) {
      return;
    }

    // show loading spinner
    setLoading(true);
    try {
      const response = await fetch(`/api/generate/${session?.user.id}`, {
        method: "POST",
        body: JSON.stringify(generateIcon),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      //  add generated icon to state
      setGeneratedIcon(data);
      // set isGenerated to true to show the generated icons
      setIsGenerated(true);
      // set loading to false
      setLoading(false);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // colors
  const classes = [
    {
      color: "black",
      style: "rounded-full bg-black p-5 mr-2 cursor-pointer relative",
    },
    {
      color: "red",
      style: "rounded-full bg-red-500 p-5 mr-2 cursor-pointer relative",
    },
    {
      color: "orange",
      style: "rounded-full bg-orange-500 p-5 mr-2 cursor-pointer relative",
    },
    {
      color: "yellow",
      style: "rounded-full bg-yellow-500 p-5 mr-2 cursor-pointer relative",
    },
    {
      color: "green",
      style: "rounded-full bg-green-500 p-5 mr-2 cursor-pointer relative",
    },
    {
      color: "blue",
      style: "rounded-full bg-blue-500 p-5 mr-2 cursor-pointer relative",
    },
    {
      color: "indigo",
      style: "rounded-full bg-indigo-500 p-5 mr-2 cursor-pointer relative",
    },
    {
      color: "violet",
      style: "rounded-full bg-violet-500 p-5 mr-2 cursor-pointer relative",
    },
  ];

  return (
    <div className="mt-32 px-20 mx-auto w-[630px]">
      {errors.prompt || errors.color || errors.style ? (
        <ErrorAlert
          promptError={errors.prompt}
          colorError={errors.color}
          styleError={errors.style}
        />
      ) : null}
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
          {classes.map((classType) => {
            return (
              <div
                key={classType.color}
                id={classType.color}
                className={`${classType.style}`}
                onClick={() => handleSelectColor(event, classType)}
              >
                {generateIcon.color === classType.color && (
                  <CheckIcon
                    className="h-4 w-4 text-white absolute top-[11px] right-[11px]"
                    aria-hidden="true"
                  />
                )}
              </div>
            );
          })}
        </div>
        <div>
          <h3 className="text-base font-semibold leading-7 text-gray-900 mt-10">
            Which style would you like?
          </h3>
          <div className="grid grid-cols-5 mt-2 gap-4 items-center">
            {iconStyles.map((style) => (
              <div>
                <Image
                  src={style.image}
                  key={style.name}
                  id={style.name}
                  onClick={changeCurrentStyle}
                  alt="icon style"
                  className={`rounded-xl cursor-pointer ${
                    generateIcon.style === style.name &&
                    "border border-4 border-purple-600"
                  }`}
                />
                <p className="text-center text-sm text-gray-600">
                  {style.name}
                </p>
              </div>
            ))}
          </div>

          <h3 className="text-base font-semibold leading-7 text-gray-900 mt-10 mb-3">
            How many icons do you need?
          </h3>
          <div className="flex items-center">
            <button
              type="button"
              id="minus"
              onClick={subtractNumIcons}
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
              onClick={addNumIcons}
              className="rounded-full bg-indigo-600 p-1 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              <PlusIcon id="plus" className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
          <button
            onClick={handleGenerateIcon}
            className={`rounded-md mt-4 bg-indigo-${
              loading ? "400" : 600
            } px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
          >
            {loading ? "Loading..." : "Generate"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default GenerateForm;
