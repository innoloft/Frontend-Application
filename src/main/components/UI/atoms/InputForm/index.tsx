import * as React from "react";
import "./index.css";

interface InputProps {
    inputType: string;
    inputRequired?: boolean;
    inputClassName: string;
    inputPlaceholder?: string;
    containerClassName?: string;
    inputName: string;
    inputValue: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    errorrLabel?: string;
    displayError?: boolean;
    labelName?: string;
    labelClass?: string;
    errorClass?: string;
}

export const InputForm = (props: InputProps) => {
    return (
        <>
            <div
                className={`input-form__container ${props.containerClassName}`}
            >
                {props?.labelName && (
                    <label
                        className={props.labelClass}
                        htmlFor={props.inputName}
                    >
                        {props.labelName}
                    </label>
                )}
                <input
                    type={props.inputType}
                    className={`input-form__input ${props.inputClassName}`}
                    placeholder={props.inputPlaceholder}
                    name={props.inputName}
                    required={props.inputRequired}
                    value={props.inputValue}
                    onChange={props.onChange}
                />
                {props.displayError && (
                    <p
                        className={
                            props?.errorClass ? props.errorClass : "input-error"
                        }
                    >
                        {props.errorrLabel}
                    </p>
                )}
            </div>
        </>
    );
};

export default InputForm;
