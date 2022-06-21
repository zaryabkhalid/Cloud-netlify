import React from "react";
import {
  CloudUploadIcon,
  DatabaseIcon,
  PaperAirplaneIcon,
  ServerIcon,
} from "@heroicons/react/solid";

import bgImg from "../assests/cyber-bg.png";

const Hero = () => {
  return (
    <>
      <div className="w-full h-screen bg-zinc-200 flex flex-col justify-between">
        <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
          <div
            data-aos="fade-right"
            className="flex flex-col justify-center md:items-start w-full px-2 py-8"
          >
            <p className="text-2xl text-white px-3 py-3 bg-black shadow-xl">
              Unique Sequencing & Production
            </p>
            <h1 className="py-3 text-5xl md:text-7xl font-bold drop-shadow-lg">
              Cloud Managment
            </h1>
            <p className="text-2xl py-2 drop-shadow-2xl">
              This is our Tech Brand.
            </p>
            <button className="bg-indigo-600 text-white text-xl font-bold py-4 hover:rounded-xl sm:w-[60%] my-4 drop-shadow-xl ">
              Get Started
            </button>
          </div>
          <div data-aos="fade-left">
            <img className="w=full" src={bgImg} alt="/" />
          </div>
          <div className="absolute flex flex-col py-8 md:min-w-[768px] bottom-[-2%] mx-2 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200 border border-slate-300 rounded-xl text-center shadow-xl">
            <p className="text-2xl font-bold drop-shadow-xl">Data Services</p>
            <div className="flex justify-between flex-wrap px-4">
              <p className="flex px-4 py-2 text-slate-500">
                <CloudUploadIcon className="h-6 text-indigo-600" /> App Security
              </p>
              <p className="flex px-4 py-2 text-slate-500">
                <DatabaseIcon className="h-6 text-indigo-600" /> Dashboard
                Design
              </p>
              <p className="flex px-4 py-2 text-slate-500">
                <ServerIcon className="h-6 text-indigo-600" /> Cloud Data
              </p>
              <p className="flex px-4 py-2 text-slate-500">
                <PaperAirplaneIcon className="h-6 text-indigo-600" /> API
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
