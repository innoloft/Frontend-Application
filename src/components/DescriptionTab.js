import React from 'react'

const DescriptionTab = ({ description }) => {

   function createMarkup() {
      return { __html: description.toString() };
   }

   return (
      <div className="tabs__content--description">
         <p dangerouslySetInnerHTML={createMarkup()} />
      </div>
   )
}

export default DescriptionTab
