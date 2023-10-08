import React, { useState } from "react";
import Link from "next/link";
import { useContext } from "react";
import { MyContext } from "@/context/MyContext";

const Navbar = () => {
  const [active, setActive] = useState(1);
  const { currentUser, handleUserAuth } = useContext(MyContext);

  console.log(currentUser);
  return (
    <header className="text-gray-600 body-font bg-green-300">
      <div className="container mx-auto flex flex-wrap gap-5 p-5 flex-col md:flex-row items-center">
        <Link
          href={"/"}
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <span className="text-xl cursor-pointer hover:scale-125 hover:translate-x-1 hover:translate-y-1">
            My Blog
          </span>
        </Link>
        <nav className=" flex flex-row text-lg gap-10 items-center py-2 justify-center md:ml-auto ">
          <Link
            onClick={() => {
              setActive(1);
            }}
            href={"/"}
            className={` hover:scale-125 hover:translate-x-1 hover:translate-y-1 hover:text-gray-900 ${
              active === 1
                ? "scale-125 translate-x-1 translate-y-1 text-gray-900 font-semibold "
                : ""
            }`}
          >
            Home
          </Link>
          <Link
            onClick={() => {
              setActive(2);
            }}
            href={"/about"}
            className={` hover:scale-125 hover:translate-x-1 hover:translate-y-1 hover:text-gray-900 ${
              active === 2
                ? "scale-125 translate-x-1 translate-y-1 text-gray-900 font-semibold "
                : ""
            }`}
          >
            About
          </Link>
          <Link
            onClick={() => {
              setActive(3);
            }}
            href={"/contact"}
            className={` hover:scale-125 hover:translate-x-1 hover:translate-y-1 hover:text-gray-900 ${
              active === 3
                ? "scale-125 translate-x-1 translate-y-1 text-gray-900 font-semibold "
                : ""
            }`}
          >
            Contact
          </Link>
        </nav>
        {currentUser ? (
          <div className="flex items-center gap-3">
            <h2 className="text-lg font-semibold text-gray-900">
              {" "}
              {currentUser.displayName}
            </h2>

            <img
              style={{ borderRadius: "50%" }}
              height={"40"}
              width={"40"}
              src={`${currentUser.photoURL}`}
              alt={`${currentUser.displayName}`}
            />
          </div>
        ) : (
          <button
            onClick={handleUserAuth}
            className=" text-white bg-indigo-500 border-0 py-2 px-6 shadow-lg shadow-gray-500 focus:outline-none hover:scale-105 hover:bg-indigo-600 rounded text-lg"
          >
            Login
          </button>
        )}
      </div>
    </header>
  );
};

export default Navbar;
