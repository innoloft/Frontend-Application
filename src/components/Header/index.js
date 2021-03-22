import { VscSearch } from "react-icons/vsc";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";

import { HeaderWrapper } from "./StyledComponents";
import { useState } from "react";
import NavBar from "components/Navbar";

const url =
  "https://anvkgjjben.cloudimg.io/width/400/x/https://img.innoloft.de/innoloft-no-white-space.svg";

const Header = (props) => {
  const [showNavbar, setShowNavBar] = useState(false);
  const toggleNavbarShow = () => {
    setShowNavBar(!showNavbar);
  };
  return (
    <HeaderWrapper>
      <div className="container">
        {showNavbar && (
          <div className="header_navbar">
            <NavBar
              toggleNavbarShow={toggleNavbarShow}
              navStyle={{
                position: "absolute",
                top: "3.5rem",
                left: "0",
                width: "20%",
              }}
            />
          </div>
        )}{" "}
        <div className="left_header">
          <img className="logo" src={url} alt="innoloft log"></img>
          <div className="hamburger" onClick={toggleNavbarShow}>
            &#9776;
          </div>
        </div>
        <div className="middle_header">
          <input
            className="search_box"
            type="text"
            placeholder="Enter interest, keyword, company name, etc...."
          />

          <VscSearch className="search_icon" />
        </div>
        <div className="right_header">
          <div className="one_section">
            {" "}
            EN
            <RiArrowDropDownLine className="icon_down" />
          </div>
          <IoIosNotificationsOutline className="notification" />
          <FaUserCircle className="user" />
        </div>
      </div>
    </HeaderWrapper>
  );
  //   return <>hello</>;
};

export default Header;
