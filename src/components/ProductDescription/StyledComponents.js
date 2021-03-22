import styled from "styled-components";

export const ProductDescriptionWrapper = styled.section`
  padding: 1rem;
  .product_image {
    border: 1px solid lightgray;
    width: 100%;
    height: 300px;
    img {
      height: 100%;
      width: 100%;
    }
  }
  .product_info {
    padding: 0.5rem;
    width: 100%;
    border: 1px solid lightgray;
  }
  .product_tabs {
    padding: 0.5rem;
    width: 100%;
    border: 1px solid lightgray;
    .tabs {
      display: flex;
      justify-content: space-evenly;
    }
  }
  .product_tab_panel {
    padding: 0.5rem;
  }
`;
