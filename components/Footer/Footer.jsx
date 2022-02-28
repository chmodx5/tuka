import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-200 py-10 w-full">
      <div className="container mx-auto">
        <div
          className="grid grid-cols-1 sm
        :grid-cols-2 md:grid-cols-4"
        >
          <div>
            <h3 className="footer__group-heading">Information</h3>
            <ul>
              <li>
                <Link passHref href="/about">
                  <a className="footer_group-link">About Us</a>
                </Link>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
