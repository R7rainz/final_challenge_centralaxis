import React from "react";
import Logo from "../assets/logo.webp";

const Footer = () => {
  return (
    <footer className="bg-[#0c0c0d] border-t border-[#2e2e2e] py-6">
      <div className="container mx-auto px-4">
        <div className="flex items-center space-x-2">
          <img src={Logo} alt="Logo" className="w-5 h-5" />
          <p className="text-sm text-gray-400">Copyright © 2025</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
