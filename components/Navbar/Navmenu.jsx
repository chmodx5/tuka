import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { HiChevronDown } from "react-icons/hi";

const Navmenu = () => {
  return (
    <div className=" text-right  ">
      <Menu as="div" className="relative  inline-block text-left">
        <div>
          <Menu.Button className="inline-flex justify-center w-full px-2 py-2  font-semibold text-white  rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 uppercase items-center">
            Options
            <div
              className="w-5 h-5 ml-2 -mr-1 text-xl hover:text-violet-100 flex items-center justify-center"
              aria-hidden="true"
            >
              <HiChevronDown />
            </div>
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute w-auto mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-10 focus:outline-none">
            <div className="px-1 py-1 min-w-max">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-violet-500 text-white" : "text-gray-900"
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                  >
                    Edit Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Asperiores, numquam.
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default Navmenu;