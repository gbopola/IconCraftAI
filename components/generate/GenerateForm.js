"use client";
import React, { useContext, useState, useEffect, use } from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";
import { CheckIcon, MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import { GenerateIconContext } from "../../context/GenerateIconContext";
import PromptInfo from "./PromptInfo";
import ErrorAlert from "./ErrorAlert";
import { classes, iconStyles } from "../../constants/main";
import { LoadingSpinner } from "./LoadingSpinner";
import { Slide, toast } from "react-toastify";

const GenerateForm = () => {
  const { generateIcon, setGenerateIcon } = useContext(GenerateIconContext);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: generateIcon,
  });

  const selectedColor = watch("color");
  const selectedStyle = watch("style");
  const numIcons = watch("numIcons");

  useEffect(() => {
    register("color", { required: true });
    register("style", { required: true });

    setGenerateIcon({
      ...generateIcon,
      color: selectedColor,
      style: selectedStyle,
      numIcons,
    });

    // Check if there are any errors
    if (Object.keys(errors).length > 0) {
      toast.error("Some fields are missing", {
        position: "top-center",
        autoClose: false,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Slide,
      });
    }
  }, [
    selectedColor,
    selectedStyle,
    numIcons,
    errors.prompt,
    errors.color,
    errors.style,
  ]);

  const increaseNumIcons = () => {
    setValue("numIcons", numIcons + 1);
  };

  const decreaseNumIcons = () => {
    setValue("numIcons", Math.max(1, numIcons - 1));
  };

  const onSubmit = async (data) => {
    console.log(data);
    // setLoading(true);
    // const response = await fetch(`/api/generate/${session?.user.id}`, {
    //   method: "POST",
    //   body: JSON.stringify(data),
    // });
    // if (!response.ok) {
    //   throw new Error(`HTTP error! Status: ${response.status}`);
    // }
    // const responseData = await response.json();
    // setGeneratedIcon(responseData);
    // setIsGenerated(true);
    // setLoading(false);
  };

  return (
    <div className="mt-32 px-20 mx-auto md:w-[630px] w-full">
      {/* {(errors.prompt || errors.color || errors.style) && (
        <ErrorAlert
          promptError={!!errors.prompt}
          colorError={!!errors.color}
          styleError={!!errors.style}
        />
      )} */}
      <span className="inline-flex items-center rounded-full bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10 mb-6">
        Generate Icon
      </span>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <h3 className="text-base font-semibold leading-7 text-gray-900">
            Which elements would you want featured in your icons?
          </h3>
          <p className="text-sm leading-7 text-gray-600">
            Make it short and sweet if you can.
          </p>
          <div className="flex items-center">
            <input
              type="text"
              name="prompt"
              id="prompt"
              className="inline-block w-full mt-2 rounded-md border-0 py-2 px-4 mr-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 outline-0 sm:text-sm sm:leading-6"
              placeholder="e.g. an angry bear"
              {...register("prompt", { required: true })}
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
          <div className="flex flex-wrap mt-2 items-center">
            {classes.map((classType) => (
              <div
                key={classType.id}
                id={classType.color}
                className={`rounded-full ${classType.style} p-5 mr-2 cursor-pointer relative`}
                onClick={() => setValue("color", classType.color)}
              >
                {selectedColor === classType.color && (
                  <CheckIcon
                    className="h-4 w-4 text-white absolute top-[11px] right-[11px]"
                    aria-hidden="true"
                  />
                )}
              </div>
            ))}
          </div>
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
                  onClick={() => setValue("style", style.name)}
                  alt={style.name}
                  className={`rounded-xl cursor-pointer ${
                    selectedStyle === style.name &&
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
              onClick={decreaseNumIcons}
              className="rounded-full bg-indigo-600 p-1 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              <MinusIcon id="minus" className="h-5 w-5" aria-hidden="true" />
            </button>
            <div className="rounded-md border-0 py-2 px-4 mx-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 outline-0 sm:text-sm sm:leading-6">
              {numIcons}
            </div>
            <button
              type="button"
              id="plus"
              onClick={increaseNumIcons}
              className="rounded-full bg-indigo-600 p-1 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              <PlusIcon id="plus" className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="rounded-md flex items-center mt-4 bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            {loading && <LoadingSpinner />}
            {loading ? "Loading..." : "Generate"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default GenerateForm;
