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

  const [generatedIcon, setGeneratedIcon] = useState([]);

  const [isGenerated, setIsGenerated] = useState(false);

  const [userIcons, setUserIcons] = useState([]);

  // const [tabs, setTabs] = useState([
  //   { name: "Set", current: true },
  //   { name: "Color picker", current: false },
  //   { name: "Custom", current: false },
  // ]);

  return (
    <GenerateIconContext.Provider
      value={{
        generateIcon,
        setGenerateIcon,
        isGenerated,
        setIsGenerated,
        generatedIcon,
        setGeneratedIcon,
        userIcons,
        setUserIcons,
      }}
    >
      {children}
    </GenerateIconContext.Provider>
  );
};
