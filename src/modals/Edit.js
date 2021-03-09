import React from 'react'
import { Editor } from "@tinymce/tinymce-react";
import { Modal } from './modal.styles'
import TextField from '../components/input/Input';

function Edit() {
    return (
      <Modal>
          <TextField />
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
          {/* onChange={this.handleEditorChange} */}
        </Editor>
      </Modal>
    );
}

export default Edit
