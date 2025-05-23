import React from 'react';
import { GrFacebookOption, GrLinkedinOption, GrTwitter } from "react-icons/gr";


const socialMediaLinks = [
  {
    href: "#",
    icon: <GrFacebookOption />,
    label: "Facebook"
  },
  {
    href: "#",
    icon: <GrTwitter />,
    label: "Twitter"
  },
  {
    href: "#",
    icon: <GrLinkedinOption />,
    label: "LinkedIn"
  }
]
const Footer = () => {
  return (
    <footer className="bg-accent-1000 text-white py-4">
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex space-x-5">
          {/* Social Media Icons */}
          {socialMediaLinks.map(({ href, icon, label }, idx) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="text-accent-1000 bg-yellow-400 flex items-center justify-center rounded-full size-8"
            >
              {icon}
            </a>
          ))}
        </div>
        <div className="text-xs font-medium mt-8 text-accent-100 space-x-4">
          <span>2023 All Rights Reserved</span> <span> | </span> <a href="mailto:youremail@gmail.com">Contact youremail@gmail.com</a> <span> | </span> <span>MOM</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
