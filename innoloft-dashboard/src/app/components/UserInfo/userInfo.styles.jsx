import styled from "styled-components";

export const UIStyle = styled.div`
  width: 100%;
  height: 350px;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    height: 175px;
    border-radius: 50%;
    border: 2px solid white;
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.3);
    margin: 20px;
  }

  .name {
    font-weight: bold;
    padding: 10px;
  }

  .email {
    padding: 10px;
  }

  @media (max-width:1280px) {
    margin: 10px auto;
    width: 50%;
  }

  @media (max-width: 700px) {
    width: 100%;
  }
`;
