import React from 'react';
import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css'; 
import './textEditor.css'

const TextEditor = ({placeholder, defoultValue=false, hideEditor}) => {
    return (
        <SunEditor
        defaultValue={`${defoultValue?defoultValue:''}`}
        hide={false}
        showToolbar={false}
        height="100%" 
        // placeholder={placeholder}
        />
    )
}

export default TextEditor