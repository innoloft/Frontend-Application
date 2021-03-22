import styled from "styled-components";

export const AvatarWrapper = styled.div`
  width: 100%;
  height: 3rem;
  margin-bottom: 2rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 0 1rem;
  .avatar_image {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin-right: 1rem;
  }
  @media (min-width: 901px) {
    display: flex;
  }
  @media (max-width: 900px) {
    display: none;
  }
`;
