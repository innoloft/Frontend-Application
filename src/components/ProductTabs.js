import React, { useState } from 'react';

import Button from './Button';

const ProductTabs = ({details}) => {
  const [activeTab, setActiveTabState] = useState('Description');
  const handleOnClick = (tabName) => {
    setActiveTabState(tabName)
  }
  return (
    <>
      <div className="tabs">
        <Button activeTab={activeTab === 'Description'} onClick={e => handleOnClick('Description')} title="Description"/>
        <Button activeTab={activeTab === 'Attributes'} onClick={e => handleOnClick('Attributes')} title="Attributes"/>
      </div>

      <div id="Description" className={`tabcontent ${activeTab === 'Description' ? 'show' : ''}`}>
        <p>{details.description}</p>
      </div>
      <div id="Attributes" className={`tabcontent ${activeTab === 'Attributes' ? 'show' : ''}`}>
        <span className="label">Categories: </span>
        {details.categories && details.categories.map((cat) => (
          <span key={cat.id}>{cat.name}, </span>
        ))}
        <span className="label">Business Models: </span>
        {details.businessModels && details.businessModels.map((bm) => (
          <span key={bm.id}>{bm.name}, </span>
        ))}
        <span className="label">TRL: </span>
        {details.trl && <span>{details.trl.name}</span>}
      </div>
    </>
  )
}

export default ProductTabs;