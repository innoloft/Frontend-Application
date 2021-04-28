import styled from 'styled-components';
import { device } from '../../../Theme/BreakPoints';

export const AppBar = styled.section`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    background-color: ${props => props.theme.colors.primary};
    height: 75px;
    z-index: 1;
    border: 1px solid ${props => props.theme.colors.secondary};
    display: flex;
    justify-content: 'space-between';
    align-items: center;
`;

export const Logo = styled.img`
    width: ${props => props.theme.metrics.images.logo}px ;
    height: auto;
    padding: 7px 7px 7px 7px;
    margin-left: 5px;
    margin-top: 5px;
    background-color: white;
    border-radius: 4px;
    align-self: center;

    @media only screen and ${device.tablet} { 
        padding: 4px 4px 4px 4px;
        width: ${props => props.theme.metrics.images.large}px ;
        height: 40px;
        transform: translateX(-80);
        -webkit-transition: 1s ease-in-out;
        -moz-transition: 1s ease-in-out;
        -o-transition: 1s ease-in-out;
        transition: 1s ease-in-out;
    }
`;