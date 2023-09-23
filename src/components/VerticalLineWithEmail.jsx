import React from 'react';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';
const VerticalLineWithEmail = () => {
    return (
        <>
         <div className="fixed bottom-0 left-4 z-10 flex flex-col items-center">
      {/* GitHub Icon */}
      <a href="https://github.com/namantoo" target="_blank" rel="noreferrer" className="p-2 hover:translate-y-[-3px] transition-transform">
        <FaGithub className="w-5 h-5 text-white" />
      </a>
      {/* Twitter Icon */}
      <a href="https://twitter.com/namantoo" target="_blank" rel="noreferrer" className="p-2 hover:translate-y-[-3px] transition-transform">
        <FaTwitter className="w-5 h-5 text-white" />
      </a>
      {/* LinkedIn Icon */}
      <a href="https://www.linkedin.com/in/naman-33751713a/" target="_blank" rel="noreferrer" className="p-2 hover:translate-y-[-3px] transition-transform">
        <FaLinkedin className="w-5 h-5 text-white" />
      </a>
      <div className="w-[1px] h-24 bg-gray-300 mt-2"></div>
    </div>


    <div className="fixed bottom-0 right-4 z-10 flex flex-col items-center">
      {/* Example Social Circle Placeholders */}
      <div className="p-2 hover:translate-y-[-3px] transition-transform">
        <div className="w-5 h-5 bg-black rounded-full border-2 border-white"></div>
      </div>
      <div className="p-2 hover:translate-y-[-3px] transition-transform">
        <div className="w-5 h-5 bg-black rounded-full border-2 border-white"></div>
      </div>
      <div className="p-2 hover:translate-y-[-3px] transition-transform">
        <div className="w-5 h-5 bg-black rounded-full border-2 border-white"></div>
      </div>
      {/* Add more social circle placeholders as needed */}
      <div className="w-[1px] h-24 bg-gray-300 mt-2"></div>
    </div>

        </>
    );
};

export default VerticalLineWithEmail;
