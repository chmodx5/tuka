import React from "react";
import { FaSearch, FaTimes } from "react-icons/fa";
import { Drawer } from "@mui/material";
import { FiShoppingCart } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
import Link from "next/link";
import Cart from "../Cart/Cart";

const Search = () => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  return (
    <div>
      <div
        onClick={toggleDrawer(true)}
        className="outline outline-1 outline-gray-300 rounded-md flex gap-2"
      >
        <div className=" min-w-[15em] focus:outline-0" />
        <button className=" p-2">
          <FaSearch />
        </button>
      </div>
      <>
        <Drawer anchor="top" open={open} onClose={toggleDrawer(false)}>
          <div className=" min-h-fit py-4">
            {/* top form section  */}
            <div className="container mx-auto flex items-center justify-between">
              <Link href="/">
                <a>
                  <h1 className="font-bold text-2xl uppercase">
                    <span className=" text-primary">Tu</span>ka
                  </h1>
                </a>
              </Link>
              <div className="flex-1 ">
                <form
                  action=""
                  className=" w-6/12  outline outline-1 outline-gray-300 rounded-md flex gap-2 pl-2 mx-auto"
                >
                  <input
                    type="text"
                    name="search"
                    className="w-full focus:outline-0 focus:bg-white"
                  />
                  <button type="submit" className="p-2">
                    <FaSearch />
                  </button>
                </form>
              </div>

              <div className="flex">
                <Link href="/" passHref>
                  <span className="text-xl h-10 w-10 flex items-center justify-center ">
                    <AiOutlineUser />
                  </span>
                </Link>
              </div>
            </div>
            {/* end of top form section  */}

            {/* Bottom form section with results */}
            <div className="container mx-auto mt-4">
              <p className="text-center pb-4">
                Results for : <span className="font-semibold">smth</span>
              </p>
              <div>
                results: Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Velit perspiciatis, consequatur fuga itaque sapiente
                repellendus aliquam iure fugiat odit, magni eaque? Rem illo
                perspiciatis obcaecati dolore commodi aliquid omnis labore.
              </div>
              <p className="text-center pt-4">
                <Link href="/" passHref>
                  <div className="bg-black text-white uppercase rounded-full py-2 px-4 text-sm hover:cursor-pointer inline-block">
                    more results
                  </div>
                </Link>
              </p>
            </div>
            {/* end of bottom form section with results */}
          </div>
        </Drawer>
      </>
    </div>
  );
};

export default Search;
