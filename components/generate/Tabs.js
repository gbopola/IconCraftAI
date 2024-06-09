"use client";
import { GenerateIconContext } from "../../context/GenerateIconContext";
import { useContext, useState } from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Tabs() {
  const { tabs, setTabs } = useContext(GenerateIconContext);
  // change current tab
  const handleTabClick = (selectedTabName) => {
    setTabs((prevTabs) =>
      prevTabs.map((tab) => ({
        ...tab,
        current: tab.name === selectedTabName,
      }))
    );
  };

  return (
    <div>
      <div className="sm:hidden">
        <label htmlFor="tabs" className="sr-only">
          Select a tab
        </label>
        {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
        <select
          id="tabs"
          name="tabs"
          className="block rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        >
          {tabs.map((tab) => (
            <option key={tab.name}>{tab.name}</option>
          ))}
        </select>
      </div>
      <div className="hidden sm:inline-block">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-4" aria-label="Tabs">
            {tabs.map((tab) => (
              <a
                key={tab.name}
                onClick={() => handleTabClick(tab.name)}
                className={classNames(
                  tab.current
                    ? "border-indigo-500 text-indigo-600 cursor-pointer"
                    : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                  "whitespace-nowrap border-b-2 py-4 px-1 text-xs font-medium cursor-pointer"
                )}
                aria-current={tab.current ? "page" : undefined}
              >
                {tab.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}
