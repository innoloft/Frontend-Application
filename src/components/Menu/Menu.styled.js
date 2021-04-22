import styled from 'styled-components';

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: #f6f6f6;
  height: 100vh;
  text-align: left;
  position: absolute;
  top: 0;
  left: 0;
  padding-left: 10px;
  transition: transform 0.3s ease-in-out;

  @media (max-width: 789px) {
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
    justify-content: center;
    background-color: #fff;
  }

  a {
    font-size: 16px;
    text-transform: uppercase;
    padding: 10px 20px;
    font-weight: bold;
    color: #272e71;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 789px) {
      font-size: 1.5rem;
    }

    &:hover {
      color: #212529;
      background-color: #ddd;
    }
  }
`;
