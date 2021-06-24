import React from 'react';
import { useSelector } from 'react-redux';
import styled, { keyframes } from 'styled-components';

export function LoaderSupervisor() {
    const loader = useSelector(state => state.application.isLoading)
    if(!loader) return null
    
    return (
        <>
            <StyledNotification>
                <span>loading...</span>
            </StyledNotification>
        </>
    )
}

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const StyledNotification = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
    z-index: 999999;
    right: 0;
    bottom: 0;
    background: #000;
    opacity: 0.6;
    display: flex;
    justify-content: center;
    align-items: center;
    span {
        animation: ${rotate} 1000ms ease;
    }
`
