import React from 'react'
import Logo from '../../assets/logo.svg'
import Button from '../../components/Button/Button'
import {AppBar, Navbar, Brand, BrandImage} from './Header.styles'



function Header() {
    return (
      <AppBar>
        <Navbar>
          <Brand>
            <BrandImage src={Logo} alt="Logo" />
          </Brand>
          <Button>Get started</Button>
          {/* <Button>Get started</Button> */}
        </Navbar>
      </AppBar>
    );
}

export default Header
