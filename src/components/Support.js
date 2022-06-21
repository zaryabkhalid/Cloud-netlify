import React from "react";
import { PhoneIcon, ArrowSmRightIcon } from "@heroicons/react/outline";
import { ChipIcon, SupportIcon } from "@heroicons/react/solid";
import supportImg from "../assests/support.jpg";

const Support = () => {
  return (
    <>
      <div className="w-full mt-24">
        <div className="w-full h-[700px] bg-gray-900/90 absolute">
          <img
            className="w-full h-full object-cover mix-blend-overlay"
            src={supportImg}
            alt="/"
          />
        </div>
        <div className="max-w-[1240px] mx-auto text-white relative">
          <div data-aos="slide-up" className="px-4 py-12">
            <h2 className="text-3xl font-bold pt-8 text-slate-300 uppercase text-center ">
              Support
            </h2>
            <h3 className="text-5xl font-bold py-6 text-center">
              Finding the right team
            </h3>
            <p className="py-4 text-3xl text-slate-300">
              Lorem ipsumdolr sit amet consectetur, adipisicing elit. Cumque
              asperiores earum placeat veritatis dignissimos itaque.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black">
            {/* Box-1 */}
            <div data-aos="flip-up" className="bg-white rounded-xl shadow-2xl">
              <div className="p-8">
                <PhoneIcon className="w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]" />
                <h3 className="font-bold text-2xl my-6">Sales</h3>
                <p className="text-gray-600 text-xl">
                  Lorem ipsumdolr sit amet consectetur, adipisicing elit. Cumque
                  asperiores earum placeat
                </p>
              </div>
              <div className="bg-slate-100 pl-8 py-4 font-bold">
                <p className="flex items-center text-indigo-600">
                  Contact Us <ArrowSmRightIcon className="w-4" />
                </p>
              </div>
            </div>
            {/* Box-2 */}
            <div
              data-aos="flip-left"
              className="bg-white rounded-xl shadow-2xl"
            >
              <div className="p-8">
                <SupportIcon className="w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]" />
                <h3 className="font-bold text-2xl my-6">Technical Support</h3>
                <p className="text-gray-600 text-xl">
                  Lorem ipsumdolr sit amet consectetur, adipisicing elit. Cumque
                  asperiores earum placeat
                </p>
              </div>
              <div className="bg-slate-100 pl-8 py-4 font-bold">
                <p className="flex items-center text-indigo-600">
                  Contact Us <ArrowSmRightIcon className="w-4" />
                </p>
              </div>
            </div>
            {/* Box-3 */}
            <div
              data-aos="flip-right"
              className="bg-white rounded-xl shadow-2xl"
            >
              <div className="p-8">
                <ChipIcon className="w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]" />
                <h3 className="font-bold text-2xl my-6">Media Inquiries</h3>
                <p className="text-gray-600 text-xl">
                  Lorem ipsumdolr sit amet consectetur, adipisicing elit. Cumque
                  asperiores earum placeat
                </p>
              </div>
              <div className="bg-slate-100 pl-8 py-4 font-bold">
                <p className="flex items-center text-indigo-600">
                  Contact Us <ArrowSmRightIcon className="w-4" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Support;
