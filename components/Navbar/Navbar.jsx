import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";
import { FaTimes } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import Navmenu from "./Navmenu";

const Navbar = () => {
  const router = useRouter();
  const [mobilemenu, setMobilemenu] = useState(false);

  return (
    <nav className=" shadow-lg fixed bg-white dark:bg-gray-900 dark:text-white w-full z-50 ">
      <div className="container mx-auto px-2 sm:px-6 md:px-0 ">
        <div className=" h-20 flex justify-between items-center">
          {/* page logo */}
          <div className="flex items-center">
            <Link href="/">
              <a>
                <h1 className="font-bold text-2xl uppercase">
                  <span className=" text-primary">Tu</span>ka
                </h1>
              </a>
            </Link>
          </div>

          <div className="md:flex items-center hidden ">
            <div className=" flex space-x-2 ">
              <button>account</button>
              <button>cart</button>
            </div>
            <ThemeSwitch />
          </div>

          {/* mobile menu button */}
          <div className="relative md:hidden">
            <button
              className="hover:text-primary-default"
              onClick={() => setMobilemenu(true)}
            >
              <GiHamburgerMenu className="text-3xl" />
            </button>
          </div>

          {/* mobile menu  */}
          {mobilemenu && (
            <div className="absolute top-0 right-0 h-screen bg-white dark:bg-darkbackground shadow-xl w-10/12 px-6 py-6 md:hidden">
              <div className="flex justify-between mb-6">
                <span>
                  <ThemeSwitch onClick={() => setMobilemenu(false)} />
                </span>
                <button
                  className="hover:text-primary-default"
                  onClick={() => setMobilemenu(false)}
                >
                  <FaTimes className="text-3xl" />
                </button>
              </div>
              <ul>
                <li>gg</li>
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="bg-gray-900">
        <div className="container mx-auto">
          <div className=" text-white">
            <ul className="flex gap-2 items-center">
              <li>
                <Link href="/">
                  <a href="" className=" font-semibold uppercase px-2">
                    home
                  </a>
                </Link>
              </li>
              <li>
                <Navmenu />
              </li>
              <li>
                <Link href="/">
                  <a href="" className=" font-semibold uppercase  px-2">
                    FAQ
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a href="" className=" font-semibold uppercase  px-2">
                    About
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
