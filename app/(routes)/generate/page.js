"use client";
import GenerateForm from "@/app/components/generate/GenerateForm";
import GeneratedIcon from "@/app/components/generate/GeneratedIcon";
import { GenerateIconContext } from "@/app/context/GenerateIconContext";
import React, { useContext } from "react";

const page = () => {
  const { generatedIcon, setGeneratedIcon } = useContext(GenerateIconContext);

  return (
    <div>
      {generatedIcon ? (
        <GeneratedIcon setGeneratedIcon={setGeneratedIcon} />
      ) : (
        <GenerateForm />
      )}
    </div>
  );
};

export default page;
