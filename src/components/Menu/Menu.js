import React from 'react';
import { Link } from 'react-router-dom';
import { StyledMenu } from './Menu.styled';

const Menu = ({ open, setOpen, ...props }) => {

  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;

  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
      <Link to="/" tabIndex={tabIndex} onClick={() => setOpen(!open)}>
        Home
      </Link>
      <Link to="/product" tabIndex={tabIndex} onClick={() => setOpen(!open)}>
        Product
      </Link>
    </StyledMenu>
  );
}

export default Menu;