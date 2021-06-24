import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

export function StrengthIndicator({ value }) {
    const [strength, setStrength] = useState()
    const [strengthText, setStrengthText] = useState()

    useEffect(() => {
        const prog = [/[$@$!%*#?&]/, /[A-Z]/, /[0-9]/, /[a-z]/]
            .reduce((memo, test) => memo + test.test(value), 0);
        setStrength(prog)
        switch (prog) {
            case 1:
                setStrengthText('Low')
                break;
            case 2:
                setStrengthText('Medium')
                break;
            case 3:
                setStrengthText('Hard')
                break;
            case 4:
                setStrengthText('Excellent')
                break;
            default:
                break;
        }
    }, [value])

    return (
        <StyledContainer strength={strength}>
            <div className="low"></div>
            <div className="medium"></div>
            <div className="hard"></div>
            <div className="label">{
                strengthText
            }</div>
        </StyledContainer>
    )
}

StrengthIndicator.propTypes = {
    value: PropTypes.string
}

const lowCss = css`
.low {                        
    background: rgb(255,0,0);
    background: linear-gradient(90deg, rgba(255,0,0,0.7329306722689075) 60%, rgba(217,201,0,1) 100%);
 };
`

const mediumCss = css`
.medium {
    background: rgb(217,201,0);
    background: linear-gradient(90deg, rgba(217,201,0,0.7833508403361344) 69%, rgba(32,217,0,1) 100%);
 };
`

const hardCss = css`
.hard {
    background: rgb(32,217,0);
    background: linear-gradient(90deg, rgba(32,217,0,0.6685049019607843) 88%, rgba(255,255,255,1) 100%);
 };
`

const StyledContainer = styled.div`
    margin-top: 0.7em;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .low,
    .medium,
    .hard {
        min-width: 10px;
        width: 100%;
        height: 1em;
        background: #ddd;
        margin-right: 0.5em;
        animation: all 0.5s ease
    };
    .label {
        font-size: 14px;
        width: 200px;
    };
    ${({ strength }) => {
        const mapSchema = {
            4: {
                css: `
                    ${lowCss}
                    ${mediumCss}
                    ${hardCss}
                `
            },
            3: {
                css: `
                    ${lowCss}
                    ${mediumCss}
                    ${hardCss}
                `
            },
            2: {
                css: `
                    ${lowCss}
                    ${mediumCss}
                `
            },
            1: {
                css: `
                    ${lowCss}
                `
            }
        }

        return strength && css`${mapSchema[strength].css}`
    }}
`