"use client";
import GenerateForm from "../../components/generate/GenerateForm-copy";
import GeneratedIconList from "../../components/generate/GeneratedIconList";
import { GenerateIconContext } from "../../context/GenerateIconContext";
import React, { useContext } from "react";

const page = () => {
  const { isGenerated } = useContext(GenerateIconContext);

  return <div>{isGenerated ? <GeneratedIconList /> : <GenerateForm />}</div>;
};

export default page;
