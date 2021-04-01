import React, { useState } from 'react';
import Card from './Card';
import TabContent from './TabContent';
import TabNames from './TabNames';

const Tabs = ({ product, trl }) => {
   const [activeTab, setActiveTab] = useState('attributes');
   const tabColor = true

   return (
      <Card>
         <div className="tabs">
            <TabNames activeTab={activeTab} setActiveTab={setActiveTab} />
            <TabContent tabColor={tabColor} product={product ? product : null} trl={trl} activeTab={activeTab} setActiveTab={setActiveTab} />
         </div>
      </Card>
   )
}

export default Tabs
