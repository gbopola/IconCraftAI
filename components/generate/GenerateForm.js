"use client";
import React from "react";
import Tabs from "./Tabs";
import PromptInfo from "./PromptInfo";
import { CheckIcon, MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import { iconStyles } from "../../constants/main";
import Image from "next/image";
import { useSession } from "next-auth/react";
import ErrorAlert from "./ErrorAlert";
import { LoadingSpinner } from "./LoadingSpinner";
import useGenerateIconForm from "../../hooks/useGenerateIconForm";
import { LockClosedIcon } from "@heroicons/react/20/solid";

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
  const { status, data: session } = useSession();
  const {
    generateIcon,
    errors,
    loading,
    handleStateChange,
    changeCurrentStyle,
    handleSelectColor,
    addNumIcons,
    subtractNumIcons,
    handleGenerateIcon,
  } = useGenerateIconForm();

  // check if loading or session is not active
  const checkLoadingOrSession = () => {
    switch (true) {
      case loading:
        return "Generating...";
      case !session:
        return "Sign in to generate icons";
      default:
        return "Generate";
    }
  };

  return (
    <div className="mt-32 mb-10 px-10 lg:px-20 mx-auto md:w-[630px] w-full">
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
          <div className="md:grid flex flex-wrap lg:grid-cols-icon-grid-lg md:grid-cols-icon-grid-lg gap-3 mt-2">
            {iconStyles.map((style) => (
              <div key={style.name} className="flex flex-col items-center">
                <Image
                  unoptimized
                  src={style.image}
                  id={style.name}
                  width={85}
                  onClick={changeCurrentStyle}
                  alt={style.name}
                  className={`rounded-xl cursor-pointer ${
                    generateIcon.style === style.name &&
                    "border border-4 border-purple-400"
                  }`}
                />
                <p className="text-sm text-gray-600">{style.name}</p>
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
            disabled={loading || !session}
            onClick={handleGenerateIcon}
            className="flex w-full justify-center items-center rounded-md mt-4 bg-indigo-600 px-3.5 py-3 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            {loading && <LoadingSpinner />}
            {!session && (
              <LockClosedIcon className="h-4 w-4 mr-2" aria-hidden="true" />
            )}
            {checkLoadingOrSession()}
          </button>
        </div>
      </div>
    </div>
  );
};

export default GenerateForm;
