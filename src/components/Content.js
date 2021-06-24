import React from 'react';
import styled from 'styled-components';
import { Cell } from "styled-css-grid";
import STATIC_MAP_SITE, { device } from '../const';
import { AccountSettings } from './Forms/AccountSettings';
import { UserInformation } from './Forms/UserInformation';
import { Tabs } from './Tabs';

export function Content() {
    return (
        <StyledContent>
            <Tabs tabs={STATIC_MAP_SITE.TABS.titles}>
                <StyledTab>
                    <AccountSettings />
                </StyledTab>
                <StyledTab>
                    <UserInformation />    
                </StyledTab>
            </Tabs>
        </StyledContent>
    )
}

const StyledTab = styled.div`
    width: 100%;
    height: 100%;
    form {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        button {
            height: 4em;
            min-width: 45%;
            background: #272e71;
            border: none;
            color: white;
        }
    }
`

const StyledContent = styled(Cell)`
    padding-top: 4em;
    @media ${device.mobileS} {
        padding-top: 2em;
    }
`