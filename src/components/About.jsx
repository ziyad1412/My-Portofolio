import React from "react";
const About = () => {
  return (
    <div
      name="about"
      className="w-full h-auto bg-gradient-to-b from-gray-800 via-black to-gray-800 text-gray-300 pt-10"
    >
      <div className="flex flex-col justify-center items-center w-full h-full px-4">
        {/* Title Section */}
        <div className="max-w-[1000px] w-full mb-8">
          <p className="text-4xl font-bold inline border-b-4 border-sky-600">
            About Me
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-[1000px] w-full">
          {/* Intro Text */}
          <div className="text-4xl font-bold mb-6">
            <p>Hi, I'm Abdurrahman Ziyad</p>
          </div>

          {/* Description */}
          <div className="font-medium mb-6">
            <p>
              I'm a fresh graduate in Informatics Engineering with over 2 years
              of experience as a full-stack developer. I specialize in creating
              websites and applications and am passionate about learning new
              technologies. I’ve worked with diverse teams and on multiple
              projects, constantly improving my technical and soft skills.
            </p>
          </div>

          {/* Work Experience Section */}
          <div className="text-lg font-bold mb-4">
            <p className="flex text-xl mb-4">Work Experience</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <p>
                    <strong>Web Developer</strong> - Freelance
                  </p>
                  <p className="text-sm text-gray-400">Apr 2021 – Present</p>
                </li>
                <li>
                  <p>
                    <strong>Web Developer</strong> - Indonesia Quran Foundation
                  </p>
                  <p className="text-sm text-gray-400">Jun 2021 – Jun 2022</p>
                </li>
                <li>
                  <p>
                    <strong>Instructor</strong> - PT Nurul Fikri Cipta Inovasi
                  </p>
                  <p className="text-sm text-gray-400">Aug 2022 – Jan 2023</p>
                </li>
              </ul>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <p>
                    <strong>Fullstack Web Developer</strong> - LPPM STT NF
                  </p>
                  <p className="text-sm text-gray-400">Feb 2023 – Feb 2024</p>
                </li>
                <li>
                  <p>
                    <strong>Web Developer</strong> - PT Bermuda Corporindo
                  </p>
                  <p className="text-sm text-gray-400">Feb 2024 – Aug 2024</p>
                </li>
                <li>
                  <p>
                    <strong>IT Engineer</strong> - PT Enkripa Teknologi
                  </p>
                  <p className="text-sm text-gray-400">Aug 2024 – Apr 2025</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
