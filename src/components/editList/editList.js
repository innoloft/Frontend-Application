import React, { useState } from 'react'
import TextEditor from '../textEditor/textEditor'

const EditList = ({ content, placeHolder }) => {

    const [editMode, setEditMode] = useState(false)
    return (
        <>
            {
                editMode ?
                    <TextEditor defoultValue={content} />
                    :
                    <div onDoubleClick={()=>{setEditMode(true)}}>
                        {content}
                    </div>
            }
        </>
    )
}

export default EditList