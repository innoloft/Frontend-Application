import React from 'react';
import { CategoriesEntityOrBusinessModelsEntityOrTypeOrTrl } from '../../types/Product';
import {produce} from 'immer';
interface UpdatebleInputProps{
    item: CategoriesEntityOrBusinessModelsEntityOrTypeOrTrl
    setItem: React.Dispatch<React.SetStateAction<any>>

}

// TODO: safely type this

export const UpdatebleInput: React.FC<UpdatebleInputProps> = props => {
    
    const onChange: React.ChangeEventHandler<HTMLInputElement> = e => {
        props.setItem((items: any) => {
            return produce(items, (draftItems: any)=>{
                const item = draftItems.find((item: any) =>  item.id === props.item.id);
                item.name = e.target.value;
            })
        })
    }
    return (
        <div className="updateble-input">
            <input type="text" value={props.item.name} onChange={onChange}/>
        </div>
    )
}