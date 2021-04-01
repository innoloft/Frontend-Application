import React from 'react'
import Card from './Card'

const TabNames = ({ activeTab, setActiveTab }) => {

   return (
      <div className='tabs__title'>
         <ul>
            <div onClick={() => setActiveTab('description')}>
               <Card setActiveTab={setActiveTab} active={activeTab === 'description'}>
                  <li><h3>Description</h3></li>
               </Card>
            </div>
            <div onClick={() => setActiveTab('attributes')}>
               <Card active={activeTab === 'attributes'}>
                  <li><h3>Attributes</h3></li>
               </Card>
            </div>
         </ul>
      </div>
   )
}

export default TabNames
