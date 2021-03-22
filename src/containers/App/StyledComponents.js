import styled from "styled-components";

export const AppWrapper = styled.section`
  background: #f6f6f6;
  width: 100%;
  .app_all_section {
    width: 80%;
    margin: auto;
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    .left_section {
    }
    @media (min-width: 901px) {
      .left_section,
      .right_section {
        display: inline-block;
      }
      grid-template-columns: 1fr 2fr 1fr;
    }
    @media (max-width: 900px) {
      .left_section,
      .right_section {
        display: none;
      }
      grid-template-columns: auto;
      width: 100%;
      padding: 0 1rem;
    }
  }
`;
