import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="pt-16 flex flex-col justify-between bg-gradient-to-b from-black via-black to-black">
      <footer className="rounded-lg shadow text-center">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <ul className="mx-auto flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <a
                  href="https://www.linkedin.com/in/abdurrahmanziyad"
                  className="mr-1 hover:underline md:mr-6 "
                >
                  Linkedin
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/ziyad1412"
                  className="mr-1 hover:underline md:mr-6"
                >
                  Github
                </a>
              </li>
              <li>
                <a
                  href="mailto:abdurrahman.ziyad17@gmail.com"
                  className="mr-1 hover:underline md:mr-6 "
                >
                  Email
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/kajicode"
                  className="hover:underline"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center">
            Created by Abdurrahman Ziyad © {currentYear}
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
