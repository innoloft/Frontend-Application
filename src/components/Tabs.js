import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { device } from '../const';

export function Tabs({
    tabs,
    children
}) {
    const [selectedTab, setSelectedTab] = useState(0)

    return (
        <StyledTabs>
            <div>
                {
                    tabs.map((tabName, index) => (
                        <StyledTab active={selectedTab === index} onClick={() => setSelectedTab(index)} key={index}>
                            <span>{tabName}</span>
                        </StyledTab>
                    ))
                }
            </div>
            <StyledContent>
                {children[selectedTab]}
            </StyledContent>
        </StyledTabs>
    )
}

Tabs.propTypes = {
    tabs: PropTypes.arrayOf(PropTypes.string),
    children: PropTypes.arrayOf(PropTypes.element)
}

const StyledContent = styled.div`
    background: #fff;
    height: 55vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2em;
    @media ${device.tabletL} {
        height: 100%;
    }
`

const StyledTab = styled.div`
    cursor: pointer;
    width: 100%;
    height: 100%;
    background: #ddd;
    display: flex;
    justify-content: center;
    align-items: center;
    ${props => props.active && css`
        background: #fff
    `}
`

const StyledTabs = styled.div`
    min-width: 500px;
    width: 60%;
    margin: auto;
    margin-left: 10%;
    box-shadow: 1px 1px 6px 0 rgba(0,0,0,.1);
    border-radius: 5px;
    color: #454d4b;
    > div:first-child {
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 44px;
    }
    @media ${device.tabletL} {
        width: 100%;
        margin-left: 0;
        min-width: unset;
    }
`
