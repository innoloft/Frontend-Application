import React from 'react';
import '../sass/components/_Header.scss'

const Logo = ({ src, alt }) => {
   return (
      <div className='header__logo'>
         <img src={src} alt={alt} />
      </div>
   )
}

export default Logo
