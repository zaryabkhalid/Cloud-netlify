import React from "react";
import { CheckIcon } from "@heroicons/react/solid";

const Pricing = () => {
  return (
    <>
      <div className="w-full text-white my-24">
        <div className="w-full h-[800px] bg-slate-900 absolute mix-blend-overlay"></div>
        <div className="max-w-[1240px] mx-auto py-12">
          <div data-aos="slide-up" className="text-center py-8 text-slate-300">
            <h2 className="text-3xl uppercase font-bold">Pricing</h2>
            <h3 className="text-5xl font-bold text-white py-8">
              The right price for your research
            </h3>
            <p className="text-3xl">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>

        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 px-8 lg:grid-cols-3">
          {/* Card one */}
          <div
            data-aos="slide-left"
            className="bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative"
          >
            <span className="uppercase px-3 py-1 bg-indigo-200 text-indigo-900 text-sm rounded-2xl">
              Standard
            </span>
            <div>
              <p className="text-6xl font-bold py-4 flex">
                $49
                <span className="text-xl text-slate-500 flex flex-col justify-end">
                  /mo
                </span>
              </p>
            </div>
            <p className="text-2xl py-8 text-slate-500">
              Lorem Ipsum is simply dummy text of the printing.
            </p>
            <div className="text-2xl">
              <p className="flex py-4">
                <CheckIcon className="w-8 mr-5 text-green-600" /> Loren, ipsum
                dolor
              </p>
              <p className="flex py-4">
                <CheckIcon className="w-8 mr-5 text-green-600" /> Loren, ipsum
                dolor
              </p>
              <p className="flex py-4">
                <CheckIcon className="w-8 mr-5 text-green-600" /> Loren, ipsum
                dolor
              </p>

              <button className="bg-indigo-600 text-white drop-shadow-xl hover:rounded-xl w-full py-4 my-4">
                Get Started
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative">
            <span className="uppercase px-3 py-1 bg-indigo-200 text-indigo-900 text-sm rounded-2xl">
              Classic
            </span>
            <div>
              <p className="text-6xl font-bold py-4 flex">
                $80
                <span className="text-xl text-slate-500 flex flex-col justify-end">
                  /mo
                </span>
              </p>
            </div>
            <p className="text-2xl py-8 text-slate-500">
              Lorem Ipsum is simply dummy text of the printing.
            </p>
            <div className="text-2xl">
              <p className="flex py-4">
                <CheckIcon className="w-8 mr-5 text-green-600" /> Loren, ipsum
                dolor
              </p>
              <p className="flex py-4">
                <CheckIcon className="w-8 mr-5 text-green-600" /> Loren, ipsum
                dolor
              </p>
              <p className="flex py-4">
                <CheckIcon className="w-8 mr-5 text-green-600" /> Loren, ipsum
                dolor
              </p>

              <button className="bg-indigo-600 text-white drop-shadow-xl hover:rounded-xl w-full py-4 my-4">
                Get Started
              </button>
            </div>
          </div>
          {/* Card 3 */}
          <div
            data-aos="slide-right"
            className="bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative"
          >
            <span className="uppercase px-3 py-1 bg-indigo-200 text-indigo-900 text-sm rounded-2xl">
              Premium
            </span>
            <div>
              <p className="text-6xl font-bold py-4 flex">
                $120
                <span className="text-xl text-slate-500 flex flex-col justify-end">
                  /mo
                </span>
              </p>
            </div>
            <p className="text-2xl py-8 text-slate-500">
              Lorem Ipsum is simply dummy text of the printing.
            </p>
            <div className="text-2xl">
              <p className="flex py-4">
                <CheckIcon className="w-8 mr-5 text-green-600" /> Loren, ipsum
                dolor
              </p>
              <p className="flex py-4">
                <CheckIcon className="w-8 mr-5 text-green-600" /> Loren, ipsum
                dolor
              </p>
              <p className="flex py-4">
                <CheckIcon className="w-8 mr-5 text-green-600" /> Loren, ipsum
                dolor
              </p>

              <button className="bg-indigo-600 text-white drop-shadow-xl hover:rounded-xl w-full py-4 my-4">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;
