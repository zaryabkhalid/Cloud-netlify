import React from "react";

const About = () => {
  return (
    <>
      <div className="w-full my-32 ">
        <div className="max-w-[1240px] mx-auto">
          <div data-aos="fade-up" className="text-center ">
            <h2 className="text-5xl font-bold">
              Trusted By Developers Across The World
            </h2>
            <p className="text-3xl py-6  text-gray-500">
              Lorem ipsumdolr sit amet consectetur, adipisicing elit. Cumque
              asperiores earum placeat veritatis dignissimos itaque.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-1 px-2 text-center">
            <div
              data-aos="flip-right"
              className="border py-4 rounded-xl shadow-xl"
            >
              <p className="text-6xl font-bold text-indigo-600">100%</p>
              <p className="text-gray-400 mt-2">Completion</p>
            </div>
            <div
              data-aos="flip-left"
              className="border py-4 rounded-xl shadow-xl"
            >
              <p className="text-6xl font-bold text-indigo-600">24/7</p>
              <p className="text-gray-400 mt-2">Delivery</p>
            </div>
            <div
              data-aos="flip-right"
              className="border py-4 rounded-xl shadow-xl"
            >
              <p className="text-6xl font-bold text-indigo-600">100K</p>
              <p className="text-gray-400 mt-2">Transection</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
