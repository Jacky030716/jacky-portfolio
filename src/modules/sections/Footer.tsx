import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="mx-auto mt-6 flex flex-col items-center">
      <p className="text-secondary">
        &copy; {new Date().getFullYear()} | Made with ❤️ by{" "}
        <span className="font-medium">Jacky</span>
      </p>
      <div className="flex gap-2 items-center mt-2 text-secondary">
        <Link
          href="https://github.com/Jacky030716"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </Link>
        <Link
          href="https://www.linkedin.com/in/loh-chee-huan-679122268/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
