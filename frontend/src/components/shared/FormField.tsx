import React, { FC } from "react";
import styled, { StyledComponent } from "styled-components";
import { PASSWORD_STRENGTH_ENUM } from "../../utils/utils";

const FormFieldContainer: StyledComponent<any, any> = styled.div`
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Label: StyledComponent<any, any> = styled.label`
  font-weight: 600;
`;

const ErrorLabel: StyledComponent<any, any> = styled.label`
  color: red;
  font-size: 14px;
  font-style: italic;
  bottom: 8px;
  position: absolute;
`;

const getColor: (value: number, defaultColor: string) => string = (
  value,
  defaultColor
) => {
  if (value === 1) return "red";
  else if (value === 2) return "orange";
  else if (value === 3) return "#ffdd57";
  else if (value === 4) return "#3298dc";
  else if (value === 5) return "green";
  else return defaultColor;
};

const StrengthMeter: StyledComponent<any, any> = styled.div<{ value: number }>`
  position: absolute;
  bottom: 6px;
  height: 24px;
  width: 100%;
  font-size: 14px;
  color: ${({ value }) => getColor(value, "red")};
  overflow: hidden;
  & span {
    position: absolute;
    top: 0;
    left: 0;
    height: 6px;
    width: ${({ value }) => 20 * value}%;
    background-color: ${({ value }) => getColor(value, "#F3F3F3")};
  }
  & i {
    position: absolute;
    bottom: 0;
  }
`;

const Input: StyledComponent<any, any> = styled.input<IProps>`
  background-color: #f3f3f3;
  border: 0;
  border-bottom: ${(props: IProps): string =>
    props.errorText ? "2px solid red" : "2px solid #a5a5a5"};
  padding: 10px;
  margin: ${(props: IProps): string =>
    props.name === "password" ? "15px 0 25px 0" : "15px 0"};
  outline: 0;
`;

const Select: StyledComponent<any, any> = styled.select<IProps>`
  background-color: #f3f3f3;
  border: 0;
  border-bottom: ${(props: IProps): string =>
    props.errorText ? "2px solid red" : "2px solid #a5a5a5"};
  padding: 10px;
  margin: ${(props: IProps): string =>
    props.name === "password" ? "15px 0 25px 0" : "15px 0"};
  outline: 0;
`;

interface IProps {
  value: string | number;
  name: string;
  type: string;
  label: string;
  placeholder: string;
  errorText?: string;
  options?: Array<{ key: string; value: string }>;
  passwordStrength?: PASSWORD_STRENGTH_ENUM;
  passwordTip?: string;
  onChangeHandler: (e: any) => void;
}

const FormField: FC<IProps> = ({
  value,
  name,
  type,
  label,
  placeholder,
  errorText,
  options,
  passwordStrength,
  passwordTip,
  onChangeHandler,
}) => {
  return (
    <FormFieldContainer>
      <Label>{label}</Label>
      {type === "select" && options ? (
        <Select
          value={value}
          name={name}
          placeholder={placeholder}
          onChange={onChangeHandler}>
          {options &&
            options.map((option: { key: string; value: string }) => {
              return <option key={option.key}>{option.value}</option>;
            })}
        </Select>
      ) : (
        <Input
          value={value}
          name={name}
          type={type}
          placeholder={placeholder}
          onChange={onChangeHandler}
        />
      )}
      {name === "password" && (
        <StrengthMeter value={passwordStrength}>
          <span />
          <i>{passwordTip}</i>
        </StrengthMeter>
      )}
      {errorText && <ErrorLabel>{errorText}</ErrorLabel>}
    </FormFieldContainer>
  );
};

export default FormField;
