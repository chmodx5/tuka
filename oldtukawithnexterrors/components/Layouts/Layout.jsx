import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen dark:bg-gray-900 dark:text-white flex flex-col justify-between ">
      <header>
        <Navbar />
      </header>
      <main className=" flex-1 container mx-auto mt-24">{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
