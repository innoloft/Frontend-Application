import * as React from "react";

interface ButtonProps {
    buttonText: string | JSX.Element;
    buttonImg?: string;
    buttonClass: string;
    buttonId?: string;
    buttonDisabled?: boolean;
    buttonImgAlt?: string;
    buttonImgClass?: string;
    buttonImgMob?: string;
    buttonType?: "button" | "submit" | "reset";
    handleClick?: (e: React.TouchEvent | React.MouseEvent) => void;
    buttonImgHeight?: string;
    buttonImgWidth?: string;
    buttonAriaLabel?: string;
    buttonAriaExpanded?: boolean;
    buttonTextClass?: string;
    buttonAriaControl?: string;
    buttonJsx?: JSX.Element;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    (props, ref?) => {
        return (
            <button
                className={`button-container ${props.buttonClass}`}
                id={props.buttonId}
                type={props.buttonType ?? "button"}
                disabled={props.buttonDisabled ?? false}
                onClick={props.handleClick}
                aria-label={props.buttonAriaLabel}
                ref={ref}
                aria-expanded={props?.buttonAriaExpanded}
                aria-controls={props?.buttonAriaControl}
            >
                <span className={`${props.buttonTextClass}`}>
                    {props.buttonText}
                </span>
                {props.buttonImgMob && (
                    <>
                        <picture>
                            <source
                                media="(max-width: 745px)"
                                srcSet={props.buttonImgMob}
                                className={props.buttonImgClass}
                            />
                            <source
                                media="(min-width: 745px)"
                                srcSet={props.buttonImg}
                                className={props.buttonImgClass}
                            />
                            <img
                                src={props.buttonImg}
                                alt={props.buttonImgAlt}
                                className={props.buttonImgClass}
                                height={props.buttonImgHeight}
                                width={props.buttonImgWidth}
                            />
                        </picture>
                    </>
                )}

                {props.buttonImg && !props.buttonImgMob && (
                    <img
                        src={props.buttonImg}
                        alt={props.buttonImgAlt}
                        className={props.buttonImgClass}
                    />
                )}

                {props.buttonJsx}
            </button>
        );
    }
);
