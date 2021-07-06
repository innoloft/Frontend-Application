import React, { FC } from "react";
import styled, {
  keyframes,
  Keyframes,
  StyledComponent,
} from "styled-components";

const rotation: Keyframes = keyframes`
 0% { transform: rotate(0deg); }
 100% { transform: rotate(359deg); }
`;

const Button: StyledComponent<any, any> = styled.button`
  padding: 12px 30px;
  margin-top: 30px;
  background-color: transparent;
  border-color: #27306d;
  color: #27306d;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    background: #27306d;
    color: white;
  }
  &:disabled {
    background: grey !important;
    cursor: not-allowed;
    color: white;
  }
  & svg {
    animation: ${rotation} 2s infinite linear;
  }
`;

const ButtonComponent: FC<any> = ({ children, disabled, ...rest }) => {
  return (
    <Button disabled={!!disabled} {...rest}>
      {children}
    </Button>
  );
};

export default ButtonComponent;
