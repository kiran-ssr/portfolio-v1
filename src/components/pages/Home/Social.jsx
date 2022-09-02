import React from "react";
import { FiGithub, FiGitlab, FiLinkedin } from "react-icons/fi";

const Social = () => {
  return (
    <div className="home_social">
      <FiGithub className="home_social-icon" />
      <FiGitlab className="home_social-icon" />
      <FiLinkedin className="home_social-icon" />
    </div>
  );
};

export default Social;
