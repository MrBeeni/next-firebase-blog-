import React from "react";
import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="text-gray-600 body-font bg-green-300">
      <div className="container px-6 py-4 mx-auto flex items-center sm:flex-row flex-col">
        <link
          href='{"/"}'
          className="flex cursor-pointer title-font font-medium items-center ms:justify-start justify-center text-gray-900"
        />
        <span className="ml-3 text-xl">My BLog</span>
        <p className="text-sm text-gray-500 md:ml-4 md:pl-4 md:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          Copyright © 2023
        </p>
        <span className="inline-flex gap-6 sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a href={"/"} className="">
            <FaFacebook />
          </a>
          <a href={"/"} className="">
            <FaGithub />
          </a>
          <a href={"/"} className="">
            <FaLinkedin />
          </a>
          <a href={"/"} className="">
            <FaInstagram />
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
