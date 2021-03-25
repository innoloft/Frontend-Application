import React, { useState } from "react";
import Navigation from "../Navigation/Navigation";
import { Icon } from "@iconify/react";
import menuIcon from "@iconify-icons/mdi/menu";

import "./Header.scss";
import Backdrop from "../Backdrop/Backdrop";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const openSidebar = () => {
    setIsOpen(true);
  };
  const closeSidebar = () => {
    setIsOpen(false);
  };
  return (
    <nav>
      <div>
        <Icon icon={menuIcon} onClick={openSidebar} className="menu-icon" />
        <img src={"https://img.innoloft.de/logo.svg"} alt="innoloft" />
      </div>
      <div className="navs">
        <Navigation show={isOpen} onClick={closeSidebar} />
      </div>
      {isOpen && <Backdrop onClose={closeSidebar} />}
    </nav>
  );
}

export default Header;
