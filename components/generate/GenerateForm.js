"use client";
import React, { useContext, useState } from "react";
import Tabs from "./Tabs";
import PromptInfo from "./PromptInfo";
import { GenerateIconContext } from "../../context/GenerateIconContext";
import { CheckIcon, MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import { iconStyles } from "../../constants/main";
import Image from "next/image";
import { useSession } from "next-auth/react";
import ErrorAlert from "./ErrorAlert";
import { LoadingSpinner } from "./LoadingSpinner";

const colorClasses = [
  {
    id: 1,
    color: "black",
    style: "rounded-full bg-black p-5 mr-2 cursor-pointer relative",
  },
  {
    id: 2,
    color: "red",
    style: "rounded-full bg-red-500 p-5 mr-2 cursor-pointer relative",
  },
  {
    id: 3,
    color: "orange",
    style: "rounded-full bg-orange-500 p-5 mr-2 cursor-pointer relative",
  },
  {
    id: 4,
    color: "yellow",
    style: "rounded-full bg-yellow-500 p-5 mr-2 cursor-pointer relative",
  },
  {
    id: 5,
    color: "green",
    style: "rounded-full bg-green-500 p-5 mr-2 cursor-pointer relative",
  },
  {
    id: 6,
    color: "blue",
    style: "rounded-full bg-blue-500 p-5 mr-2 cursor-pointer relative",
  },
  {
    id: 7,
    color: "indigo",
    style: "rounded-full bg-indigo-500 p-5 mr-2 cursor-pointer relative",
  },
  {
    id: 8,
    color: "violet",
    style: "rounded-full bg-violet-500 p-5 mr-2 cursor-pointer relative",
  },
];

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

  const handleStateChange = (event) => {
    setGenerateIcon({
      ...generateIcon,
      [event.target.name]: event.target.value,
    });
  };

  const changeCurrentStyle = (event) => {
    setGenerateIcon({
      ...generateIcon,
      style: event.target.id,
    });
  };

  const handleSelectColor = (event, classType) => {
    if (generateIcon.color !== classType.color) {
      setGenerateIcon({
        ...generateIcon,
        color: event.target.id,
      });
    }
  };

  const addNumIcons = () => {
    setGenerateIcon((prevGenerateIcon) => ({
      ...prevGenerateIcon,
      numIcons: prevGenerateIcon.numIcons + 1,
    }));
  };

  const subtractNumIcons = () => {
    setGenerateIcon((prevGenerateIcon) => ({
      ...prevGenerateIcon,
      numIcons: Math.max(prevGenerateIcon.numIcons - 1, 1),
    }));
  };

  const handleGenerateIcon = async () => {
    setErrors({
      prompt: false,
      color: false,
      style: false,
    });

    const validationErrors = [];

    if (!generateIcon.prompt.trim()) validationErrors.push("prompt");
    if (!generateIcon.color) validationErrors.push("color");
    if (!generateIcon.style) validationErrors.push("style");

    setErrors((prevErrors) => ({
      ...prevErrors,
      prompt: validationErrors.includes("prompt"),
      color: validationErrors.includes("color"),
      style: validationErrors.includes("style"),
    }));

    if (validationErrors.length > 0) return;

    setLoading(true);

    // try {
    //   const response = await fetch(`/api/generate/${session?.user.id}`, {
    //     method: "POST",
    //     body: JSON.stringify(generateIcon),
    //   });

    //   if (!response.ok)
    //     throw new Error(`HTTP error! Status: ${response.status}`);

    //   const data = await response.json();
    //   setGeneratedIcon(data);
    //   setIsGenerated(true);
    // } catch (error) {
    //   console.error(error);
    // } finally {
    //   setLoading(false);
    // }
  };

  return (
    <div className="mt-32 px-20 mx-auto md:w-[630px] w-full">
      {(errors.prompt || errors.color || errors.style) && (
        <ErrorAlert
          promptError={errors.prompt}
          colorError={errors.color}
          styleError={errors.style}
        />
      )}
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
            className="inline-block w-full mt-2 rounded-md border-0 py-2 px-4 mr-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 outline-0 sm:text-sm sm:leading-6"
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
        <div className="flex flex-wrap mt-2 gap-2 items-center">
          {colorClasses.map((classType) => (
            <div
              key={classType.id}
              id={classType.color}
              className={`${classType.style}`}
              onClick={(event) => handleSelectColor(event, classType)}
            >
              {generateIcon.color === classType.color && (
                <CheckIcon
                  className="h-4 w-4 text-white absolute top-[11px] right-[11px]"
                  aria-hidden="true"
                />
              )}
            </div>
          ))}
        </div>
        <div>
          <h3 className="text-base font-semibold leading-7 text-gray-900 mt-10">
            Which style would you like?
          </h3>
          <div className="flex flex-wrap mt-2 gap-4 items-center">
            {iconStyles.map((style) => (
              <div key={style.name}>
                <Image
                  src={style.image}
                  id={style.name}
                  width={100}
                  height={100}
                  onClick={changeCurrentStyle}
                  alt={style.name}
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
              className="rounded-full bg-indigo-600 p-1 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              <MinusIcon id="minus" className="h-5 w-5" aria-hidden="true" />
            </button>
            <div className="rounded-md border-0 py-2 px-4 mx-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 outline-0 sm:text-sm sm:leading-6">
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
            disabled={loading}
            onClick={handleGenerateIcon}
            className="flex items-center rounded-md mt-4 bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            {loading && <LoadingSpinner />}
            {loading ? "Loading..." : "Generate"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default GenerateForm;
