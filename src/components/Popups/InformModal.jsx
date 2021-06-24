import React from "react";
import ReactDom from "react-dom";
import styled from "styled-components";
import colorfulLogo from "../../images/innoloft_color_logo.svg";

const ScreenOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 1000;
`;

const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 20px;
  z-index: 1000;
  border-radius: 5px;
  text-align: center;

  .colorful-logo {
    width: 80%;
  }

  .close-modal-btn {
    margin-top: 15px;
  }

  @media (max-width: 576px) {
    width: 80vw;
  }
`;

export default function InformModal({ open, closeModal }) {
  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <ScreenOverlay className="screen-overlay"></ScreenOverlay>
      <Modal className="modal all-center-column">
        <img src={colorfulLogo} alt="" className="colorful-logo" />
        <h2>Successfully updated!</h2>
        <button
          onClick={closeModal}
          className="btn btn-primary btn-md close-modal-btn"
        >
          Close
        </button>
      </Modal>
    </>,
    document.getElementById("portal")
  );
}
