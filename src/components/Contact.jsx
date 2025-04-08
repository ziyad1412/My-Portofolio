import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="pt-32 w-full h-auto min-h-screen bg-gradient-to-b from-gray-800 via-black to-black flex justify-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/6e211088-a16e-4a32-82e0-94bd5098aa9d"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-100">
          <p className="text-4xl font-bold inline border-b-4 border-sky-600 text-gray-300">
            Contact Me
          </p>
          <p className="text-gray-300 py-4">
            Submit the form below or shoot me an email :
            <a href="mailto:abdurrahman.ziyad17@gmail.com">
              abdurrahman.ziyad17@gmail.com
            </a>
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#ccd6f6] p-2"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="text-white border-2 hover:bg-sky-600 hover:border-sky-600 px-4 py-3 my-8 mx-auto flex items-center">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
