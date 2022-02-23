import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col justify-between ">
      <header>
        <Navbar />
      </header>
      <main className=" flex-1">{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
