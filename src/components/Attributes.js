import React, { Fragment, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addAttribute } from '../actions';
import Button from './Button';
import Input from './Input';

const Attributes = (props) => {
   const [item, setItem] = useState('')
   const attributeNames = props?.names
   const dispatch = useDispatch()

   const renderNames = attributeNames?.map((name) => {
      return (
         <li key={name?.name}>
            <p>{name?.name}</p>
         </li>
      )
   })

   function onClick() {
      dispatch(addAttribute(item, props.objectKey,))
   }

   return (
      <Fragment>
         <h4>{props.title}</h4>
         <ul>
            {renderNames}
         </ul>
         <Input setItem={setItem} attribute={item} />
         <Button onClick={onClick}>Add</Button>
      </Fragment>
   )
}

export default Attributes
