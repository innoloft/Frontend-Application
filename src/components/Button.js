import React from 'react'

const Button = ({ children, onClick }) => {
   return (
      <div onClick={onClick} className='button'>
         {children}
      </div>
   )
}

export default Button
