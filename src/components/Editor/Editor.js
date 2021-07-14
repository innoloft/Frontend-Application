import React, { Component } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Wrapper } from "./Editor.styled";

class MyEditor extends Component {
  onEditorStateChange = (editorState) => {
    this.props.setEditorState(editorState);
    // this.props.form.setFieldValue(this.props.field.name, editorState);
  };

  render() {
    const { editorState } = this.props;

    return (
      <Wrapper disable={!!this.props.readOnly}>
        <Editor
          toolbar={{
            options: [
              "inline",
              "blockType",
              "fontSize",
              "fontFamily",
              "list",
              "textAlign",
              "colorPicker",
              "link",
              "embedded",
              "emoji",
              "remove",
              "history",
            ],
            inline: { inDropdown: false },
            list: { inDropdown: false },
            textAlign: { inDropdown: false },
            link: { inDropdown: false },
            history: { inDropdown: false },
          }}
          editorState={editorState}
          wrapperClassName="demo-wrapper"
          editorClassName="demo-editor"
          onEditorStateChange={this.onEditorStateChange}
          // readOnly={this.props.readOnly ? true : false}
          readOnly={!!this.props.readOnly}
          placeholder={this.props.placeholder || "message"}
          toolbarClassName="toolbar-class"
        />
      </Wrapper>
    );
  }
}

export default MyEditor;

/**
 for working with this editor:
 1. import it

 import Editor from 'components/editor/Editor';

 2. create variable in form initial values for it:

 html: new EditorState.createEmpty(),//import {EditorState} from "draft-js";

 3. use it like this in your formik form:

 <Field
 name='html'
 editorState={values.html}
 component={Editor}
 />

 4. in on submit you need to convert editor state to html for sending it to server:

 const data = {...values};
 data.html = convertEditorStateToHtml(data.html);
 //import {convertEditorStateToHtml} from "helpers/editorHelpers";

 improve:write this component in way that it can be used without editor logic in step 2 (I mean
 just empty value) and without step 4

 */
