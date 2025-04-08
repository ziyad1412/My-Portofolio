import React from "react";
import { data } from "../data/data.js";

const Work = () => {
  // projects file
  const project = data;
  //setProject(data);

  return (
    <div
      name="projects"
      className="w-full h-auto text-gray-300 bg-gradient-to-b from-gray-800 via-black to-gray-800"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-sky-600">
            Projects
          </p>
          <p className="py-6">Check out some of my recent work</p>
        </div>

        {/* Container for projects */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {project.map((item, index) => (
            <div
              key={index}
              className="relative rounded-lg overflow-hidden shadow-lg shadow-[#040c16] group"
            >
              {/* Background Image */}
              <div
                className="w-full h-64 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                style={{ backgroundImage: `url(${item.image})` }}
              ></div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-4">
                {/* Project Name */}
                <span className="text-xl font-bold text-white tracking-wide">
                  {item.name}
                </span>

                {/* Buttons */}
                <div className="pt-4 space-x-4">
                  <a href={item.live} target="_blank">
                    <button className="px-4 py-2 rounded-lg bg-slate-600 hover:bg-slate-500 text-white font-semibold transition-all duration-300">
                      Link Project
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
