import React from 'react'
import Attributes from './Attributes'
import Card from './Card'
import Selection from './Selection'


const AttributesTab = ({ product, trl }) => {

   return (
      <div className="tabs__content--attributes">
         <Card>
            <Selection trls={trl?.data} selectedTRL={product?.trl.id} />
         </Card>
         <Card>
            <Attributes names={product?.categories} objectKey={'categories'} title={'Categories'} />
         </Card>
         <Card>
            <Attributes names={product?.businessModels} objectKey={'businessModels'} title={'Bussines Models'} />
         </Card>

      </div>


   )
}

export default AttributesTab
