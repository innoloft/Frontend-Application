import styled from 'styled-components';
import { device } from '../../Theme/BreakPoints';

export const Container = styled.div`
    width: 83vw;
    height: 100vh;
    display: flex;
    flex-direction: row;
    padding: 15px 15px 15px 15px;

    @media only screen and ${device.tablet} { 
        flex-direction: column;
        overflow: scroll;
        padding-bottom: ${props => props.theme.metrics.doubleBaseMargin}px;
    }
`;

export const ProductContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 55vw;
    height: 100vh;

    @media only screen and ${device.tablet} { 
        width: 83vw;
        flex-direction: column;
    }
`;

export const UserContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 30vw;
    height: 100vh;
    margin-left: ${props => props.theme.metrics.baseMargin}px;
    margin-bottom: ${props => props.theme.metrics.doubleBaseMargin}px;

    @media only screen and ${device.tablet} { 
        width: 83vw;
        margin-left: 0px;
        margin-right: ${props => props.theme.metrics.baseMargin}px;
    }
`;

export const ProductImage = styled.img`
    width: 100%;
    height: 33vh;
    resize-mode: cover;
`;

export const MainInfo = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 8vh;
    background-color: ${props => props.theme.colors.gray[2]};
    border-radius: 8px;
    margin-top: ${props => props.theme.metrics.baseMargin}px;
    padding-left: ${props => props.theme.metrics.baseMargin}px;
    padding-right: ${props => props.theme.metrics.baseMargin}px;
    font-weight: bold;
    font-size: ${props => props.theme.fonts.size.medium};
`;

export const Tab = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 8vh;
    border-radius: 8px;
    margin-top: ${props => props.theme.metrics.baseMargin}px;
`;

export const TabItem = styled.div`
    width: 10vw;
    height: 8vh;
    background-color: ${props => (props.active === true ? props.theme.colors.secondary : props.theme.colors.gray[0])};
    border-top-right-radius	: 4vh;
    margin-left: ${props => props.margin}px;
    color: ${props => (props.active === true ? props.theme.colors.white : props.theme.colors.gray[1])};
    text-align: center;
    font-weight: bold;
    font-size: ${props => props.theme.fonts.size.medium};
    word-wrap: break-word;
    @media only screen and ${device.tablet} { 
        width: 20vw;
    }
`;

export const TabContainer = styled.div`
    height: 35vh;
    background-color: ${props => props.theme.colors.gray[2]};
    border-radius: 8px;
    padding-left: ${props => props.theme.metrics.baseMargin}px;
    overflow: scroll;
`;

export const AvatarContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 45vh;
    background-color: ${props => props.theme.colors.gray[2]};
    border-radius: 8px;
    padding-left: ${props => props.theme.metrics.baseMargin}px;
    font-size: ${props => props.theme.fonts.size.large};
`;

export const Avatar = styled.img`
    width: ${props => props.theme.metrics.images.large}px;
    height: ${props => props.theme.metrics.images.large}px;
    border-radius: calc(${props => props.theme.metrics.images.large}px * 0.5);
    resize-mode: cover;
    overflow: hidden;
`;

export const MapContainer = styled.div`
    background-color: ${props => props.theme.colors.gray[2]};
    border-radius: 8px;
    margin-top: ${props => props.theme.metrics.baseMargin}px;
`;