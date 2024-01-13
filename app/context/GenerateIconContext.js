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

  const [tabs, setTabs] = useState([
    { name: "Set", current: true },
    { name: "Color picker", current: false },
    { name: "Custom", current: false },
  ]);

  return (
    <GenerateIconContext.Provider
      value={{ generateIcon, setGenerateIcon, tabs, setTabs }}
    >
      {children}
    </GenerateIconContext.Provider>
  );
};
