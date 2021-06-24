import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { Tooltip } from './tooltip';

export function TabInput({
    name,
    type,
    label,
    value,
    error,
    onChange,
    onBlur,
    StrengthIndicator,
    touched,
    options
}) {
    return (
        <StyledInput>
            {error && <Tooltip message={error} />}
            <label htmlFor={name}>{label}:</label>
            {
                type === 'select' ? (
                    <Select value={value} placeholder={label} error={error} touched={touched} name={name} onChange={onChange} onBlur={onBlur}>
                        <option value="">Please select an Option</option>
                        {
                            options.map(item => (
                                <option key={item} value={item}>{item}</option>
                            ))
                        }
                    </Select>
                ) : (
                        <Input error={error} touched={touched} name={name} type={type} value={value} onChange={onChange} onBlur={onBlur} />
                    )
            }
            {StrengthIndicator && <StrengthIndicator />}
        </StyledInput>
    )
}

TabInput.propTypes = {
    name: PropTypes.string,
    type: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    error: PropTypes.string,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    StrengthIndicator: PropTypes.func,
    touched: PropTypes.bool,
    options: PropTypes.array
}

const GeneralInputStyle = (props) => css`
    ${props.touched && !props.error && props.value && css`
        border-color: #92ed44;
    `}
    ${props.error && props.value && css`
        border-color: #ed4444;
    `}
`

const Input = styled.input`
    ${props => GeneralInputStyle(props)}
`

const Select = styled.select`
    background-image:
        linear-gradient(45deg, transparent 50%, gray 50%),
        linear-gradient(135deg, gray 50%, transparent 50%),
        linear-gradient(to right, #ccc, #ccc);
    background-position:
        calc(100% - 20px) calc(1em + 2px),
        calc(100% - 15px) calc(1em + 2px),
        calc(100% - 2.5em) 0.5em;
    background-size:
        5px 5px,
        5px 5px,
        1px 1.5em;
    background-repeat: no-repeat;
    &:focus {
        background-image:
        linear-gradient(45deg, green 50%, transparent 50%),
        linear-gradient(135deg, transparent 50%, green 50%),
        linear-gradient(to right, #ccc, #ccc);
        background-position:
            calc(100% - 15px) 1em,
            calc(100% - 20px) 1em,
            calc(100% - 2.5em) 0.5em;
        background-size:
            5px 5px,
            5px 5px,
            1px 1.5em;
        background-repeat: no-repeat;
        border-color: green;
        outline: 0;
    }
    &:-moz-focusring {
        color: transparent;
        text-shadow: 0 0 0 #000;
    }
    ${props => GeneralInputStyle(props)}
`

const StyledInput = styled.div`
    position: relative;
    margin-bottom: 2em;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    label {
        margin-bottom: 0.5em;
    }
    input, select {
        padding: 0 0.6em;
        height: 2.5em;
        font-size: 16px;
    }
    select {
        margin: 0;      
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        -webkit-appearance: none;
        -moz-appearance: none;
        background-color: white;
    }
`