"use client";
import React, { useContext } from "react";
import { GenerateIconContext } from "../../context/GenerateIconContext";
import GeneratedIconCard from "../generate/GeneratedIconCard";
const UserCollection = () => {
  const { generatedIcon, setIsGenerated } = useContext(GenerateIconContext);
  return (
    <div className="bg-white mt-40 mx-auto w-1/2">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-10">
        Icon Collection
      </h1>
      <div className="flex gap-4 flex-wrap items-center">
        {generatedIcon.map((icon) => (
          <GeneratedIconCard key={icon.id} icon={icon} />
        ))}
      </div>
    </div>
  );
};

export default UserCollection;
