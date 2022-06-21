import React from "react";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <>
      <div className="w-full h-[50px] bg-slate-900 flex items-center">
        <div className="max-w-[1240px] mx-auto text-white text-center">
          <h3>©️ Copyright {date} Zaryab Khalid. Custom Landing Page.</h3>
        </div>
      </div>
    </>
  );
};

export default Footer;
