import React from "react";
import profileAvatar from "../../images/avatar.jpg";
import { FaFacebookF, FaTwitter, FaXing, FaLinkedinIn } from "react-icons/fa";
import { IoMdExit } from "react-icons/io";

const sidebarLinks = [
  { icon: "", text: "Home", path: "/" },
  { icon: "", text: "Members", path: "/" },
  { icon: "", text: "Marketplace", path: "/" },
  { icon: "", text: "Matching", path: "/" },
  { icon: "", text: "News", path: "/" },
  { icon: "", text: "Startups", path: "/" },
  { icon: "", text: "Companies", path: "/" },
  { icon: "", text: "Ecosystem", path: "/" },
  { icon: "", text: "Events", path: "/" },
  { icon: "", text: "Tools", path: "/" },
];

const footerLinks = [
  { text: "Contact", path: "/" },
  { text: "Data Privacy", path: "/" },
  { text: "Imprint", path: "/" },
  { text: "Terms of use", path: "/" },
  { text: "Blog", path: "/" },
];

const footerSocialIcons = [
  { icon: <FaFacebookF />, path: "https://www.facebook.com/innoloft/" },
  { icon: <FaTwitter />, path: "https://twitter.com/innoloft_net" },
  {
    icon: <FaXing />,
    path: "https://www.xing.com/companies/innoloftgmbh%2Fenergieloft",
  },
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/company/innoloft-gmbh/",
  },
];

export default function Sidebar() {
  return (
    <div className="dashboard__sidebar">
      <div className="sidebar-inner">
        <div className="sidebar-inner__profile">
          <img src={profileAvatar} alt="" className="image" />
          <button className="btn btn-primary btn-sm all-center">
            <IoMdExit className="btn__exit-icon" />
            Login
          </button>
        </div>

        {sidebarLinks.map((link) => (
          <a href={link.path} key={link.text} className="sidebar-inner__link">
            {link.text}
          </a>
        ))}
      </div>

      <div className="footer">
        <div className="footer__links all-center">
          {footerLinks.map((footerLink) => (
            <a
              href={footerLink.path}
              key={footerLink.text}
              className="footer-link"
            >
              {footerLink.text}
            </a>
          ))}
        </div>

        <div className="footer__copyright">&copy; 2020 Innoloft GmbH</div>

        <div className="footer__social-icons">
          {footerSocialIcons.map((socialIcon) => (
            <a
              key={socialIcon.path}
              className="social-icon"
              href={socialIcon.path}
              target="_blank"
              rel="noopener noreferrer"
            >
              {socialIcon.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
