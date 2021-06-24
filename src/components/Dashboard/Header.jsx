import React from "react";
import logo from "../../images/innoloft_white_logo.svg";
import { GoSearch } from "react-icons/go";
import { CgChevronDown } from "react-icons/cg";
import { IoMdNotificationsOutline } from "react-icons/io";
import { VscThreeBars } from "react-icons/vsc";
import profileAvatar from "../../images/avatar.jpg";

export default function Header() {
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <span className="navbar__menu-toggler btn all-center" type="button">
          <VscThreeBars />
        </span>

        <a className="navbar__brand" href="/">
          <img src={logo} alt="" className="logo-image" />
        </a>

        <form className="navbar__search">
          <div className="search-inner">
            <input
              className="search-inner__input-bar"
              type="text"
              placeholder="Enter interests, keywords, company name, etc..."
            />
            <button className="search-inner__search-btn btn" type="submit">
              <GoSearch />
            </button>
          </div>
        </form>

        <div className="navbar__content">
          <div className="language-toggler all-center">
            EN <CgChevronDown fontSize="1.2rem" />
          </div>

          <div className="notification all-center">
            <IoMdNotificationsOutline fontSize="1.5rem" />
          </div>

          <div className="profile all-center">
            <img src={profileAvatar} alt="" className="profile__image" />
          </div>
        </div>
      </div>
    </nav>
  );
}
