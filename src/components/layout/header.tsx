import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Header = () => {
  const menuItems = [
    { name: "Home", href: "#", current: true },
    { name: "About US", href: "#", current: false },
    { name: "Blog", href: "#", current: false },
    { name: "Services", href: "#", current: false },
    { name: "Contact Us", href: "#", current: false },
  ];
  return (
    <nav className="bg-transparent  fixed w-full z-20 top-0 start-0 ">
      <div className="flex flex-wrap items-center justify-between mx-auto py-4 px-4 md:px-10 lg:px-30">
        <a
          href="#"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Image
            src="/logo.svg"
            alt="MOM Logo"
            width={87}
            height={45}
          />
          {/* <span className="self-center text-4xl font-bold whitespace-nowrap dark:text-white text-green-500">MOM</span> */}
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <Button className="hidden md:inline-flex" size="lg">
            Sign Up
          </Button>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4  text-accent-500  md:space-x-12 rtl:space-x-reverse md:flex-row md:mt-0 text-base ">
            {menuItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className={`${
                    item.current
                      ? "text-primary-500  font-bold"
                      : "text-accent-500 font-medium"
                  }`}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
