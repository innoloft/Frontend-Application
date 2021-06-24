import React from 'react';
import styled from 'styled-components';

export function Tooltip({message}) {
    return (
        <StyledTooltip className="tooltip">
            {message}
            <div className="arrow"></div>
        </StyledTooltip>
    )
}

const StyledTooltip = styled.div`
    position: absolute;
    background: #000;
    right: 50%;
    bottom: 80%;
    width: 40%;
    min-height: 20px;
    transform: translate(50%);
    color: #fff;
    border-radius: 4px;
    padding: 8px;
    font-size: 12px;
    .arrow {
        position: absolute;
        bottom: -12px;
        left: 50%;
        transform: translate(-50%);
        width: 0;
        height: 0;
        border-left: 8px solid transparent;
        border-right: 8px solid transparent;
        border-top: 12px solid #000;
        border-radius: -2px;
    }
`