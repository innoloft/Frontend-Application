import htmlToDraft from "html-to-draftjs";
import { ContentState, convertToRaw, EditorState } from "draft-js";
import draftToHtml from "draftjs-to-html";
import ReactHtmlParser from "react-html-parser";

const convertHtmlToEditorState = (html) => {
  const blocksFromHtml = htmlToDraft(html);
  const { contentBlocks, entityMap } = blocksFromHtml;
  if (contentBlocks) {
    const contentState = ContentState.createFromBlockArray(
      contentBlocks,
      entityMap
    );
    const editorState = EditorState.createWithContent(contentState);
    return editorState;
  }
};

const convertEditorStateToHtml = (editorState) => {
  return draftToHtml(convertToRaw(editorState.getCurrentContent()));
};

/**
 * the raw html that we get from server will be shown with this method.
 */
const showHtml = (html) => {
  return ReactHtmlParser(html);
};
/**
 * we use this method when we want simple text for using in sms
 * @param editorState
 * @returns {string}
 */
const convertEditorStateToSimpleText = (editorState) => {
  const blocks = convertToRaw(editorState.getCurrentContent()).blocks;
  const body = blocks
    .map((block) => (!block.text.trim() && "\n") || block.text)
    .join("\n");
  return body;
};

export {
  convertHtmlToEditorState,
  convertEditorStateToHtml,
  showHtml,
  convertEditorStateToSimpleText,
};
