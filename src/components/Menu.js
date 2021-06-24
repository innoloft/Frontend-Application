import React from 'react';
import styled, { css } from 'styled-components';
import { useSelector } from 'react-redux';
import { Cell } from "styled-css-grid";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import STATIC_MAP_SITE, { device } from '../const';
import { useActions } from '../hooks/useActions';

export function Menu() {
    const actions = useActions()
    const isMenuOpen = useSelector(state => state.application.isMenuOpen)

    return (
        <StyledMenu isMenuOpen={isMenuOpen}>
            <div onClick={() => actions.setIsMenuOpen(false)} className="close-button">
                <FontAwesomeIcon icon="times"/>
            </div>
            <ul>
                {STATIC_MAP_SITE.SIDEMENU_ITEMS.map(item => {
                    return (
                        <li key={item.name}>
                            <a href="#">
                                <div>
                                    <FontAwesomeIcon icon={item.icon} /> <span>{item.name}</span>
                                </div>
                            </a>
                        </li>
                    )
                })}
            </ul>
        </StyledMenu>
    )
}

const StyledMenu = styled(Cell)`
    > ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        a {
            display: flex;
            align-items: center;
            padding-left: 0.5em;
            width: 100%;
            height: 100%;
            > div > svg {
                margin-right: 1em;
            }
            text-decoration: none;
            color: inherit;
            &:hover {
                background: #ddd;
            }
        }
        li {
            height: 44px;
        }
    }
    padding-top: 4em;
    .close-button {
        display: none;
    }
    @media ${device.tabletL} {
        background: #444;
        position: absolute;
        z-index: 2;
        width: 100vw;
        display: flex;
        justify-content: center;
        height: calc(100vh - 4em);
        left: -30px;
        color: #fff;
        transition: left 500ms ease;
        ${props => !props.isMenuOpen && css`
            left: -101vw;
        `}
        a {
            font-size: 18px;
        }
        .close-button {
            display: block;
            position: absolute;
            top: 1em;
            right: 1em;
            font-size: 32px;
        }
    }
`