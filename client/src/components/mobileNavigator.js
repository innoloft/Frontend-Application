import React, { useState } from 'react';
import '../css/mobileNavigator.css';
import '../css/layout.css';
import { Link } from 'react-router-dom';

const MobileNavigator = ({ history }) => {
   const [sidebar, setsidebar] = useState(false);
   const showSidebar = () => {
      setsidebar(!sidebar);
   };
   return (
      <div className="mobilebar">
         <div>
            <Link
               to="#"
               onClick={showSidebar}
               className="menu-bars1 mr-4 ml-0 btn-green"
            >
               <i onClick={showSidebar} className="fas fa-bars"></i>
            </Link>
         </div>
         <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <div>
               <Link to="#" className="menu-bars ">
                  <i onClick={showSidebar} className="fas fa-times"></i>
               </Link>
               <ul className="sidelist">
                  <div className="sideitem">
                     <Link to="/">
                        <i class="fas fa-home"></i> Main Page
                     </Link>
                  </div>
                  <div className="sideitem">
                     <Link to="/product">
                        <i class="fas fa-users"></i> Product
                     </Link>
                  </div>
               </ul>
            </div>
         </nav>
      </div>
   );
};

export default MobileNavigator;
