"use client";
import GenerateForm from "@/app/components/generate/GenerateForm";
import GeneratedIconList from "@/app/components/generate/GeneratedIconList";
import { GenerateIconContext } from "@/app/context/GenerateIconContext";
import React, { useContext } from "react";

const page = () => {
  const { isGenerated, setIsGenerated } = useContext(GenerateIconContext);

  return <div>{isGenerated ? <GeneratedIconList /> : <GenerateForm />}</div>;
};

export default page;
