import React from 'react'
import { DetailPage, Main } from "./Details.styles";
import { Editor } from "@tinymce/tinymce-react";
import Button from '../../components/Button/Button';
import TextField from '../../components/input/Input';
import Label from '../../components/Label/Label';


function Details() {
  const [Title, setTitle]= React.useState('')
  const [type, setType] = React.useState("");
  
  const [editor, setEditor]=React.useState("")

  const handleTypeChange=(e)=>{
    setType(e.target.value)
  }
  const handleTitleChange=(e)=>{
    setTitle(e.target.value)
  }
  const handleEditorChange=(e)=>{
    setEditor(e.target.value)
  }

    return (
      <Main>
        <DetailPage>
          <h3>Edit product</h3>
          <Label>Title</Label>
          <TextField value={Title} onChange={handleTitleChange} />
          <Label>Type</Label>
          <TextField value={type} onChange={handleTypeChange} />
          <Label>Description</Label>
          <Editor>
            apiKey="3al5of8s7564q6j8nehf6qw4slayumeoke1r3f1roxzjorqg" init=
            initialValue="<p>Initial content</p>" init=
            {{
              height: 500,
              menubar: false,
              plugins: [
                "advlist autolink lists link image",
                "charmap print preview anchor help",
                "searchreplace visualblocks code",
                "insertdatetime media table paste wordcount",
              ],
              toolbar:
                "undo redo | formatselect | bold italic |alignleft aligncenter alignright | bullist numlist outdent indent | help",
            }}
            value={editor}
            onChange={handleEditorChange}
          </Editor>

          <Button>Update</Button>
        </DetailPage>
      </Main>
    );
}

export default Details
