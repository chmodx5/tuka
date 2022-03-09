import { Menu, Transition } from "@headlessui/react";
import axios from "axios";
import { Fragment, useEffect, useRef, useState } from "react";
import { HiChevronDown } from "react-icons/hi";
import Link from "next/link";

const Navmenu = () => {
  const [category, setCategory] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:3000/categories").then((response) => {
      setCategory(response.data);
    });
    console.log("category", category, "end category");
  }, []);

  return (
    <div className=" text-right  ">
      <Menu as="div" className="relative  inline-block text-left">
        <div>
          <Menu.Button className="inline-flex justify-center w-full px-2 py-2  font-semibold text-white  rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 uppercase items-center">
            category
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
              {category ? (
                category.map((category) => (
                  <Menu.Item key={category}>
                    {({ active }) => (
                      <Link
                        passHref
                        href={`http://localhost:3000/products/category/${category.name}`}
                      >
                        <button
                          className={`${
                            active
                              ? " bg-gray-900  text-white"
                              : "text-gray-900"
                          } group capitalize flex rounded-md items-center w-full px-2 py-2 text-sm`}
                        >
                          {category.name}
                        </button>
                      </Link>
                    )}
                  </Menu.Item>
                ))
              ) : (
                <button
                  className={` "bg-violet-500 text-white" : "text-gray-900"
                     group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                >
                  loading ..
                </button>
              )}

              {/* <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-violet-500 text-white" : "text-gray-900"
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                  >
                    dfdsfdfadsf
                  </button>
                )}
              </Menu.Item> */}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default Navmenu;
