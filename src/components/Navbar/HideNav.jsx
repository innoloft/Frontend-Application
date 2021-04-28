import { useState, useEffect } from 'react';

const HideNav = () => {
  const [hideSideBar, sethideSideBar] = useState('toggle-side-bar');
  const [hiddenNav, sethiddenNav] = useState('hide-navbar-icon');

  const resetState = () => {
    if (window.innerWidth > 1128) {
      sethideSideBar('toggle-side-bar');
      sethiddenNav('hide-navbar-icon');
    } else {
      sethideSideBar('hide-navbar-icon');
      sethiddenNav('toggle-side-bar');
    }
  };

  const handleResize = () => {
    resetState();
  };

  useEffect(() => {
    resetState();
    window.addEventListener('resize', handleResize);
  }, []);

  return {
    hideSideBar, hiddenNav,
  };
};

export default HideNav;
