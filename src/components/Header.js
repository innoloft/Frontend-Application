import React from 'react';
import Logo from './Logo';
import '../sass/layout/_grid.scss';
import '../sass/components/_Header.scss';

const Header = () => {
   return (
      <header>
         <div className='row'>
            <div className="header">
               <Logo src={process.env.PUBLIC_URL + ' /logo.svg'} alt="Innoloft Logo" />
            </div>
         </div>
      </header>
   )
}

export default Header
