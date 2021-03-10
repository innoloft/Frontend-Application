import React from 'react';
import Topbar from './topbar';
import Sidebar from './navigator';

export const BaseTemplate = (props) => {
   return (
      <div>
         <Topbar />
         <div className="layout">
            <Sidebar />
            <div className="content">
               <props.content />
            </div>
         </div>
      </div>
   );
};
