import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled, { keyframes } from 'styled-components';
import { useActions } from '../hooks/useActions';

export function NotificationSupervisor({ _notifications }) {
    const { deleteNotification } = useActions()
    
    return (
        <>
        {_notifications.items && _notifications.items.map((notification, id) => {
            return (
                <StyledNotification index={id} key={id} onClick={() => deleteNotification(id)} type={notification.type}>
                    <div>
                      <FontAwesomeIcon icon={notification.type === 'success' ? 'check-circle' : 'question-circle'} />
                      <span>{notification.message}</span>
                    </div>
                </StyledNotification>
            )
        })}
        </>
    )
}

const appear = (index) => keyframes`
  from {
    transform: translate(0, -100vh);
  }

  to {
    transform: translate(0, -${index * 10}vh);
  }
`;

const StyledNotification = styled.div`
    > div {
      width: 100%;
      padding: 0.4em;
      display: flex;
      justify-content: end;
      align-items: center;
      >svg {
        margin-right: 1em;
      }
    }
    position: absolute;
    width: 320px;
    height: 3em;
    z-index: 99999;
    right: 2em;
    bottom: 2em;
    background: #fff;
    border: 1px solid ${props => props.type === 'success' ? 'black' : 'red'};
    border-left: 5px solid ${props => props.type === 'success' ? 'black' : 'red'};
    display: flex;
    justify-content: center;
    align-items: center;
    animation: ${props => appear(props.index)} 1000ms ease;
    animation-fill-mode: forwards;  
`
