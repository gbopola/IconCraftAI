"use client";
import React, { useContext, useEffect } from "react";
import { GenerateIconContext } from "../../context/GenerateIconContext";
import GeneratedIconCard from "../generate/GeneratedIconCard";
import { useSession } from "next-auth/react";
const UserCollection = () => {
  const { data: session } = useSession();
  const { userIcons, setUserIcons } = useContext(GenerateIconContext);

  useEffect(() => {
    async function getUserIcons() {
      const response = await fetch(`/api/collection/${session?.user?.id}`);
      const data = await response.json();
      setUserIcons(data);
    }

    // Get the user icons if the user is logged in
    if (session?.user?.id) {
      getUserIcons();
    }
  }, [session]);
  return (
    <div className="bg-white mt-40 mx-auto w-1/2">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-10">
        Icon Collection
      </h1>
      <div className="flex gap-4 flex-wrap items-center">
        {userIcons &&
          userIcons.map((icon) => (
            <GeneratedIconCard key={icon.id} icon={icon} />
          ))}
      </div>
    </div>
  );
};

export default UserCollection;
