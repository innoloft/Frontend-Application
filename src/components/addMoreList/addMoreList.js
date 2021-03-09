import React, { useState } from 'react';
import { addIcon } from '../../assets/bootstrapIcon/index';
import TextEditor from '../textEditor/textEditor';


const AddMoreList = ({ name }) => {
    const [editMode, setEditMode] = useState(false)
    return (
        <>
            {
                editMode ?
                    <TextEditor />
                    :
                    <div style={{ display: "flex", alignItems: "center", cursor:"pointer", height:"35px" }} onClick={()=>{setEditMode(true)}}>
                        <span style={{ marginBottom: "-6px" }}>{addIcon}</span>
                        <small><b>{name}</b></small>
                    </div>
            }
        </>
    )
}

export default AddMoreList