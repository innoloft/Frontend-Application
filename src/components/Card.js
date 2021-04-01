import React from 'react'

const Card = ({ children, active, tabColor }) => {
   return (
      <div className={`card ${active ? 'card--active' : ''} ${tabColor ? 'card--tabCard' : ''}`}>
         {children}
      </div>
   )
}

export default Card
