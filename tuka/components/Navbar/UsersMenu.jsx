import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import Link from "next/link";
import { AiOutlineUser } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { RiLoginBoxFill, RiLogoutBoxRFill } from "react-icons/ri";
import { Tooltip } from "@mui/material";

const UsersMenu = ({}) => {
  return (
    <div className=" text-right  ">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Tooltip title="Users Menu" disableInteractive>
            <Menu.Button className="Navbar__icon-btn">
              <AiOutlineUser className="text-xl " />
            </Menu.Button>
          </Tooltip>
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
          <Menu.Items className="absolute w-40 mt-2 origin-top-right right-0 bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-10 focus:outline-none ">
            <div className=" min-w-max space-y-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-primary text-white" : "text-primary"
                    } group capitalize font-semibold flex rounded  items-center w-full px-3 py-2 text-sm`}
                  >
                    <span className="mr-3">
                      <FaUser />
                    </span>
                    profile
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-primary text-white" : "text-primary"
                    } group capitalize font-semibold flex rounded  items-center w-full px-3 py-2 text-sm`}
                  >
                    <span className="mr-3">
                      <RiLoginBoxFill />
                    </span>
                    login
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-primary text-white" : "text-primary"
                    } group capitalize font-semibold flex rounded  items-center w-full px-3 py-2 text-sm`}
                  >
                    <span className="mr-3">
                      <RiLogoutBoxRFill />
                    </span>
                    logout
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

export default UsersMenu;
