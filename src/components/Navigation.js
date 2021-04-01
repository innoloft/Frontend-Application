import React from 'react';
import { Link } from 'react-router-dom';
import NavItem from './NavItem';

const links = [{
   title: 'Main Menu',
   path: "/"
},
{
   title: 'Products',
   path: "/product"
}
]

const Navigation = () => {

   const renderList = links.map((link, i) => {
      return (
         <Link to={link.path} key={i.toString()}>
            <NavItem title={link.title} />
         </Link>
      )
   })

   return (
      <nav className='col-1-of-4'>
         <ul>
            {renderList}
         </ul>
      </nav>
   )
}

export default Navigation;
