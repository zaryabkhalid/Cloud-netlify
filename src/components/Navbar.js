import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { useNavigate } from "react-router";

const Navbar = () => {
  const [nav, setnav] = useState(false);
  const navHandle = () => setnav(!nav);
  const navigate = useNavigate();
  return (
    <>
      <div className="w-screen h-[80px] fixed z-10 bg-zinc-200 drop-shadow-lg">
        <div className="flex justify-between items-center w-full h-full">
          <div className="flex items-center">
            <h1 className="text-3xl font-bold mr-3 ml-5 drop-shadow-xl sm:text-4xl">
              BRAND
            </h1>
            <ul className="hidden md:flex ">
              <li>Home</li>

              <li>About</li>

              <li>Support</li>

              <li>Platform</li>

              <li>Pricing</li>
            </ul>
          </div>
          <div className="hidden md:flex pr-4">
            <button
              className="border border-indigo-600 bg-transparent text-indigo-600 mr-3 px-8 py-3 drop-shadow-xl hover:rounded-xl"
              onClick={() => {
                navigate("/SignUp");
              }}
            >
              Login
            </button>
            <button
              className="bg-indigo-600 text-white px-8 py-3 drop-shadow-xl hover:rounded-xl"
              onClick={() => {
                navigate("/SignUp");
              }}
            >
              Sign Up
            </button>
          </div>

          {/* Mobile Drop Down Menu */}
          <div className="md:hidden mr-6" onClick={navHandle}>
            {!nav ? <MenuIcon className="w-5" /> : <XIcon className="w-5" />}
          </div>
        </div>

        <ul className={!nav ? "hidden" : "absolute bg-zinc-200 w-full px-8"}>
          <li className="border-b-2 border-zinc-300 w-full">Home</li>
          <li className="border-b-2 border-zinc-300 w-full">About</li>
          <li className="border-b-2 border-zinc-300 w-full">Support</li>
          <li className="border-b-2 border-zinc-300 w-full">Platform</li>
          <li className="border-b-2 border-zinc-300 w-full">Pricing</li>

          <div className="flex flex-col my-4">
            <button
              className="bg-transparent border border-indigo-600 text-indigo-600 px-8 py-3 mb-4"
              onClick={() => {
                navigate("/SignUp");
              }}
            >
              Login
            </button>
            <button
              className="bg-indigo-600 text-white px-8 py-3"
              onClick={() => {
                navigate("/SignUp");
              }}
            >
              Sign Up
            </button>
          </div>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
