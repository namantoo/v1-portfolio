import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const VerticalLineWithEmail = () => {
  return (
    <div className="fixed bottom-0 left-4 z-10 flex flex-col items-center">
      <a
        href="https://github.com/namantoo"
        target="_blank"
        rel="noreferrer"
        className="p-2 text-[#aaa6c3] hover:text-[#64ffda] hover:translate-y-[-3px] transition-all duration-200"
        aria-label="GitHub"
      >
        <FaGithub className="w-5 h-5" />
      </a>
      <a
        href="https://www.linkedin.com/in/naman-33751713a/"
        target="_blank"
        rel="noreferrer"
        className="p-2 text-[#aaa6c3] hover:text-[#64ffda] hover:translate-y-[-3px] transition-all duration-200"
        aria-label="LinkedIn"
      >
        <FaLinkedin className="w-5 h-5" />
      </a>
      <div className="w-[1px] h-24 bg-[#aaa6c3] mt-2" />
    </div>
  );
};

export default VerticalLineWithEmail;
