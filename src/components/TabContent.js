import React from 'react'
import AttributesTab from './AttributesTab'
import Card from './Card'
import DescriptionTab from './DescriptionTab'

const TabContent = ({ product, trl, activeTab, tabColor }) => {
   return (
      <Card tabColor={tabColor}>
         <div className="tabs__content">
            {
               activeTab === 'description' &&
               <DescriptionTab description={product?.description} />
            }
            {
               activeTab === 'attributes' &&
               <AttributesTab product={product ? product : null} trl={trl} />
            }
         </div>
      </Card>
   )
}

export default TabContent
