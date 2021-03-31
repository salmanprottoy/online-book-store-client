import React from "react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <div className="text-info p-3">
      &copy; {new Date().getFullYear()} Developed by{" "}
      <a className="text-info" href="https://github.com/salmanprottoy">
        {" "}
        <FontAwesomeIcon icon={faGithub} /> Salman Prottoy{" "}
      </a>
      {"."} All Rights Reserved.
    </div>
  );
};

export default Footer;