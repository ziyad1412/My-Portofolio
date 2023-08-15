import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 via-black to-gray-800 text-gray-300"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-2">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-sky-600">
              About Me
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              Hi. I'm Abdurrahman Ziyad, nice to meet you. Please take a look
              around.
            </p>
          </div>
          <div>
            <p className="font-medium">
              I am a final year student majoring in Informatics Engineering with
              a strong interest in Web Development. Throughout my academic
              journey, I have gained experience in various roles such as
              Teaching and Programming. I have also served as a mentor in
              bootcamps, interned as a Web Development instructor, and worked as
              a teaching assistant and research assistant for campus projects. I
              am highly motivated to excel and committed to continuous
              self-development for career advancement. Currently, I am seeking
              opportunities to further enhance my expertise in Web Development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
