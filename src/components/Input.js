import React from 'react'

const Input = ({ setItem, item }) => {

   return (
      <div>
         <input value={item}
            onChange={(e) => { setItem(e.target.value) }}
            type="text" />
      </div>
   )
}

export default Input
