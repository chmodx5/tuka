import React from "react";
import Link from "next/link";
import { FaAngleRight, FaRegEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-200 py-10 w-full">
      <div className="container mx-auto">
        <div className="grid grid-cols-12">
          <div className="col-span-4">
            <h2 className="footer__section-heading">Subcribe</h2>
            <p className="text-sm">Our conversation is just getting started</p>
            <form className="footer__form">
              <FaRegEnvelope />
              <input
                type="email"
                className="footer__input"
                placeholder="Email"
              />
              <button className="footer__button">
                <FaAngleRight />
              </button>
            </form>
          </div>
          <div className="col-span-2">
            <h3 className="footer__group-heading">Company</h3>
            <ul>
              <li>
                <Link passHref href="/about">
                  <a className="footer_group-link">My account</a>
                </Link>
              </li>
              <li>
                <Link passHref href="/about">
                  <a className="footer_group-link">Wish list</a>
                </Link>
              </li>
              <li>
                <Link passHref href="/about">
                  <a className="footer_group-link">Product compare</a>
                </Link>
              </li>
              <li>
                <Link passHref href="/about">
                  <a className="footer_group-link">About Us</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-2">
            <h3 className="footer__group-heading">Information</h3>
            <ul>
              <li>
                <Link passHref href="/about">
                  <a className="footer_group-link">Register</a>
                </Link>
              </li>
              <li>
                <Link passHref href="/about">
                  <a className="footer_group-link">Login</a>
                </Link>
              </li>
              <li>
                <Link passHref href="/about">
                  <a className="footer_group-link">Cart</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-2">
            <h3 className="footer__group-heading">Contact</h3>
            <ul>
              <li>
                <Link passHref href="/about">
                  <a className="footer_group-link">About Us</a>
                </Link>
              </li>
              <li>
                <Link passHref href="/about">
                  <a className="footer_group-link">Contact Us</a>
                </Link>
              </li>
              <li>
                <Link passHref href="/about">
                  <a className="footer_group-link">Faq</a>
                </Link>
              </li>
              <li>
                <Link passHref href="/about">
                  <a className="footer_group-link">Blog</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-2">
            <h3 className="footer__group-heading">Follow</h3>
            <ul>
              <li>
                <Link passHref href="/about">
                  <a className="footer_group-link">Facebook</a>
                </Link>
              </li>
              <li>
                <Link passHref href="/about">
                  <a className="footer_group-link">instagram</a>
                </Link>
              </li>
              <li>
                <Link passHref href="/about">
                  <a className="footer_group-link">Twitter</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
