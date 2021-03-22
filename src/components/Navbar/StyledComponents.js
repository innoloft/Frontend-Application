import styled from "styled-components";

export const NavBarWrapper = styled.div`
  width: 100%;
  min-width: 14rem;
  height: 100vh;
  display: flex;
  background: #f6f6f6;
  flex-direction: column;

  .single_route {
    padding: 0 1rem;
    color: #262a2e;
    display: flex;
    align-items: center;
    text-decoration: none;
    border-bottom: 1px solid #dfdfdf;
    .route_icon {
      margin-right: 1rem;
      color: #262a2e;
    }
  }
  .single_route:hover {
    background: #dfdfdf;
  }
  @media (max-width: 900px) {
    box-shadow: 1px 1px 6px 0 rgb(78 78 78 / 50%);
  }
`;
