"use client";
import React, { createContext, useState } from "react";

export const GenerateIconContext = createContext();

export const GenerateIconProvider = ({ children }) => {
  const [generateIcon, setGenerateIcon] = useState({
    prompt: "",
    color: "",
    style: "",
    numIcons: 1,
  });

  const [generatedIcon, setGeneratedIcon] = useState([
    {
      prompt: "A crafting table",
      color: "purple",
      style: "flat",
      image:
        "https://res.cloudinary.com/gbopola/image/upload/v1708183610/iconcraftai/t2hxqukfjlszrglwbwv2.png",
    },
    {
      prompt: "A crafting table",
      color: "purple",
      style: "flat",
      image:
        "https://res.cloudinary.com/gbopola/image/upload/v1708183610/iconcraftai/t2hxqukfjlszrglwbwv2.png",
    },
    {
      prompt: "A crafting table",
      color: "purple",
      style: "flat",
      image:
        "https://res.cloudinary.com/gbopola/image/upload/v1708183610/iconcraftai/t2hxqukfjlszrglwbwv2.png",
    },
    {
      prompt: "A crafting table",
      color: "purple",
      style: "flat",
      image:
        "https://res.cloudinary.com/gbopola/image/upload/v1708183610/iconcraftai/t2hxqukfjlszrglwbwv2.png",
    },
    {
      prompt: "A crafting table",
      color: "purple",
      style: "flat",
      image:
        "https://res.cloudinary.com/gbopola/image/upload/v1708183610/iconcraftai/t2hxqukfjlszrglwbwv2.png",
    },
    {
      prompt: "A crafting table",
      color: "purple",
      style: "flat",
      image:
        "https://res.cloudinary.com/gbopola/image/upload/v1708183610/iconcraftai/t2hxqukfjlszrglwbwv2.png",
    },
  ]);

  const [isGenerated, setIsGenerated] = useState(true);

  const [tabs, setTabs] = useState([
    { name: "Set", current: true },
    { name: "Color picker", current: false },
    { name: "Custom", current: false },
  ]);

  return (
    <GenerateIconContext.Provider
      value={{
        generateIcon,
        setGenerateIcon,
        isGenerated,
        setIsGenerated,
        generatedIcon,
        setGeneratedIcon,
        tabs,
        setTabs,
      }}
    >
      {children}
    </GenerateIconContext.Provider>
  );
};
