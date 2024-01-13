import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { QuestionMarkCircleIcon } from "@heroicons/react/20/solid";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const PromptInfo = () => {
  return (
    <div>
      <Menu as="div">
        <Menu.Button>
          <QuestionMarkCircleIcon
            className="h-7 w-7 text-gray-300 hover:text-gray-400 cursor-pointer mt-3"
            aria-hidden="true"
          />
        </Menu.Button>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-[-100px] top-10 z-10 mt-2 w-64 origin-top rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <ul className="list-disc ml-6 text-gray-600 text-xs px-3 py-5">
              <li className="mb-2">Try to keep it clear you can</li>
              <li className="leading-4 mb-2">
                Avoid asking for individual letters or words, as the AI might
                not produce them accurately.
              </li>
              <li className="leading-4 mb-2">
                Add details using straightforward language (e.g., big, small).
              </li>
              <li className="leading-4">
                Explore incorporating words like "cute" or "vibrant" into the
                mix
              </li>
            </ul>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default PromptInfo;
