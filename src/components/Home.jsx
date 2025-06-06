import React from "react";
import { Link } from "react-scroll";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import ZiyadImage from "../assets/Ziyad.jpg";

const Home = () => {
  const handleDownload = () => {
    window.open(
      "https://docs.google.com/document/d/1228eyeJqTwbbeaaO5EqFy1gCG7eyh-t5eVSuegno44U",
      "_blank"
    );
  };
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Full stack Developer
          </h2>
          <p className="text-gray-400 py-4 max-w-md">
            I specialize in developing full-stack web applications, managing
            databases for optimal performance, and creating intuitive user
            interfaces.
          </p>

          <div className="flex space-x-4">
            <button
              onClick={handleDownload}
              className="text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-blue-400 to-blue-600 cursor-pointer"
            >
              Download CV
            </button>
            <Link
              to="work"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md  bg-gradient-to-r from-cyan-500 to-sky-600 cursor-pointer"
            >
              Portofolio
              <span className="group-hover:rotate-90 duraition-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={ZiyadImage}
            alt=""
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
