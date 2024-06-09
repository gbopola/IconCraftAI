import React from "react";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
const Footer = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <p>Terms and conditions</p>
        <p>Privacy Policy</p>
      </div>
      <EnvelopeIcon className="h-5 w-5" />
    </div>
  );
};

export default Footer;
