import React from "react";
import Header from "components/Header";
import Sidebar from "components/Sidebar";
import { Page, Content } from "components/Shared";

type Props = {};

const Main: React.FC<Props> = () => {
  return (
    <div>
      <Header />
      <Page>
        <Sidebar />
        <Content>content</Content>
      </Page>
    </div>
  );
};
export default Main;
