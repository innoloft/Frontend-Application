import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled, { css } from 'styled-components';
import { Cell } from "styled-css-grid";
import STATIC_MAP_SITE, { device } from '../const';
import { useActions } from '../hooks/useActions';

export function Header() {
    const actions = useActions()
    return (
        <StyledHeader width={3}>
            <div>
                <div onClick={() => actions.setIsMenuOpen(true)} className="menu-button">
                    <FontAwesomeIcon icon="bars" />
                </div>
                <img alt="brand-logo" src={STATIC_MAP_SITE.HEADER.img_src}></img>
                <IconsContainer>
                    <Icon className="globe"><FontAwesomeIcon icon="globe-americas" /> <span>EN</span></Icon>
                    <Icon notify={true}><FontAwesomeIcon icon="envelope" /> </Icon>
                    <Icon notify={true}><FontAwesomeIcon icon="bell" /> </Icon>
                </IconsContainer>
            </div>
        </StyledHeader>
    )
}

const IconsContainer = styled.div`
    color: #fff;
    display: flex;
    > div {
        margin-left: 1.5em;
        font-size: 20px;
        span {
            font-size: 18px;
        }
    }
`

const Icon = styled.div`
    position: relative;
    cursor: pointer;
    ${props => props.notify && css`
        &:after {
            content: '';
            width: 10px;
            height: 10px;
            background: yellow;
            position: absolute;
            border-radius: 50%;
            bottom: 0;
            right: -6px;
            border: 1px solid white;
        }    
    `}
`

const StyledHeader = styled(Cell)`
    > div {
        display: flex;
        width: 80vw;
        padding: 0 2rem;
        margin: 0 auto;
        height: inherit;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    > div > img {
        width: 140px;
    };
    .menu-button {
        display: none;
    }
    height: 55px;
    background: #272e71;
    box-shadow: 1px 1px 6px 0 rgba(0,0,0,.2);
    left: 0;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 2;
    @media ${device.tabletL} {
        > div {
            width: 90vw;
            padding: 0 0.5rem;
        }
        .menu-button {
            display: block;
            color: white;
            font-size: 32px;
            margin-right: 5px;
        }
    }
    @media ${device.mobileL} {
        .globe {
            display: none;
        }
    }
`