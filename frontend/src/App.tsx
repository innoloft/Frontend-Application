import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import styled, { StyledComponent } from "styled-components";
import { InitialRootReducer, RootActionEnums } from "./state/types";
import Header from "./components/shared/Header";
import MainLayout from "./components/shared/MainLayout";
import Dashboard from "./views/Dashboard";
import ButtonComponent from "./components/shared/Button";
import "./App.css";
import EnergieLoft from "./assets/energieloft.png";

const Popup: StyledComponent<any, any> = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`;

const Content: StyledComponent<any, any> = styled.div`
  width: 400px;
  position: absolute;
  padding: 40px 60px;
  background: #f3f3f3;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -20%);
  & img {
    width: 250px;
  }
  &.error {
    border: 4px solid red;
  }
  &.success {
    border: 4px solid green;
  }
`;

function App() {
  // Extracting out popup message and type from redux store
  const { popupType, popupMessage } = useSelector<
    InitialRootReducer,
    { popupType?: string; popupMessage: string }
  >((state) => {
    return {
      popupType: state.popupType,
      popupMessage: state.popupMessage,
    };
  });
  const dispatch: Dispatch = useDispatch<Dispatch<any>>();
  const handleClosePopup: () => void = () => {
    dispatch({ type: RootActionEnums.CLOSE_POPUP });
  };
  return (
    <div className="App">
      <Header />
      <MainLayout>
        <Dashboard />
      </MainLayout>
      {popupType && popupMessage && (
        <Popup>
          <Content className={popupType}>
            <img src={EnergieLoft} alt={"EnergieLoft Logo"} />
            <p>{popupMessage}</p>
            <ButtonComponent onClick={handleClosePopup}>Done</ButtonComponent>
          </Content>
        </Popup>
      )}
    </div>
  );
}

export default App;
