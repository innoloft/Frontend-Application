import React, { useState } from "react";
import styled from "styled-components/macro";
import Editor from "components/Editor/Editor";
import { EditorState } from "draft-js";
import {
  convertHtmlToEditorState,
  convertEditorStateToHtml,
} from "components/Editor/utils";
const TabMenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;
const DescriptionTab = styled.div`
  text-align: center;
  background-color: grey;
  flex: 1;
`;
const DescriptionTabContent = styled.div`
  background-color: grey;
  padding: 8px;
`;
const AttributesTab = styled.div`
  text-align: center;
  background-color: grey;
  flex: 1;
  margin-left: 16px;
`;

const Title = styled.h3`
  color: white;
`;
type Props = {
  data: any;
};

const Tabs: React.FC<Props> = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const [editorState, setEditorState] = useState(
    convertHtmlToEditorState(data.description)
  );
  console.log(editorState);
  const submit = () => {
    const valueForSendToServer = convertEditorStateToHtml(editorState);
    console.log(valueForSendToServer);
  };

  return (
    <div>
      <TabMenuContainer>
        <DescriptionTab onClick={() => setActiveIndex(0)}>
          Description tab
        </DescriptionTab>
        <AttributesTab onClick={() => setActiveIndex(1)}>
          Attributes tab
        </AttributesTab>
      </TabMenuContainer>
      {activeIndex === 0 && (
        <DescriptionTabContent>
          {" "}
          <div
            dangerouslySetInnerHTML={{
              __html: data.description,
            }}
          ></div>
        </DescriptionTabContent>
      )}

      {activeIndex === 1 && (
        <DescriptionTabContent>
          <Title>Cats:</Title>
          {data.categories.map((cat: any) => {
            return <div>{cat.name}</div>;
          })}
          <Title>businessModels:</Title>
          {data.businessModels.map((bus: any) => {
            return <div>{bus.name}</div>;
          })}
          <Title>trl:</Title>
          <div> {data.trl.name}</div>
        </DescriptionTabContent>
      )}

      <Editor editorState={editorState} setEditorState={setEditorState} />
    </div>
  );
};

export default Tabs;
