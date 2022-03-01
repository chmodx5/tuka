import React from "react";
import Link from "next/link";
import { FaAngleRight, FaRegEnvelope } from "react-icons/fa";

const Footer = () => {
  const footerSections = [
    {
      title: "company",
      links: [
        {
          title: "About",
          link: "/about",
        },
        {
          title: "blog",
          link: "/blog",
        },
        {
          title: "careers",
          link: "/careers",
        },
      ],
    },
    {
      title: "information",
      links: [
        {
          title: "register",
          link: "/register",
        },
        {
          title: "login",
          link: "/login",
        },
        {
          title: "cart",
          link: "/cart",
        },
      ],
    },
    {
      title: "contact",
      links: [
        {
          title: "About",
          link: "/about",
        },
        {
          title: "contact us",
          link: "/contact",
        },
        {
          title: "faq",
          link: "/faq",
        },
        {
          title: "blog",
          link: "/blog",
        },
      ],
    },
    {
      title: "follow",
      links: [
        {
          title: "facebook",
          link: "/about",
        },
        {
          title: "instagram",
          link: "/about",
        },
        {
          title: "twitter",
          link: "/about",
        },
      ],
    },
  ];
  return (
    <footer className="bg-gray-200 dark:bg-gray-900 dark:border-top-1 border-t dark:border-gray-800 py-20 w-full">
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
          {footerSections.map((section, index) => (
            <div key={index} className="col-span-2">
              <h3 className="footer__group-heading">{section.title}</h3>

              <ul>
                {section.links.map((link, index) => (
                  <li key={index}>
                    <Link passHref href={link.link}>
                      <a className="footer_group-link">{link.title}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
