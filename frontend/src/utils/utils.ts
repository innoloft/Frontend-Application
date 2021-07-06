const EMAIL_REGEX: RegExp = new RegExp("^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$");
const DIGIT_REGEX: RegExp = new RegExp("^(?=.*[0-9])");
const LOWERCASE_REGEX: RegExp = new RegExp("^(?=.*[a-z])");
const UPPERCASE_REGEX: RegExp = new RegExp("^(?=.*[A-Z])");
const SYMBOL_REGEX: RegExp = new RegExp("^(?=.*[!@#$%^&*])");

export enum PASSWORD_STRENGTH_ENUM {
  empty,
  too_short,
  casing,
  digit,
  symbol,
  strong,
}

export const isEmailValid: (email: string) => boolean = (email) => {
  return EMAIL_REGEX.test(email);
};

export const isEmptyField: (value: string) => boolean = (value) => {
  return value.length === 0;
};

export const getPasswordStrength: (
  password: string
) => { strength: PASSWORD_STRENGTH_ENUM; text: string } = (password) => {
  if (password.length === 0) {
    return {
      strength: PASSWORD_STRENGTH_ENUM.empty,
      text: "Password is empty",
    };
  }
  if (password.length < 8) {
    return {
      strength: PASSWORD_STRENGTH_ENUM.too_short,
      text: "Password is too short",
    };
  }
  if (!LOWERCASE_REGEX.test(password)) {
    return {
      strength: PASSWORD_STRENGTH_ENUM.casing,
      text: "Please include atleast one lowercase letter",
    };
  }
  if (!UPPERCASE_REGEX.test(password)) {
    return {
      strength: PASSWORD_STRENGTH_ENUM.casing,
      text: "Please include atleast one uppercase letter",
    };
  }
  if (!DIGIT_REGEX.test(password)) {
    return {
      strength: PASSWORD_STRENGTH_ENUM.digit,
      text: "Please include atleast one digit",
    };
  }
  if (!SYMBOL_REGEX.test(password)) {
    return {
      strength: PASSWORD_STRENGTH_ENUM.symbol,
      text: "Please include atleast one symbol",
    };
  }
  return {
    strength: PASSWORD_STRENGTH_ENUM.strong,
    text: "Password is strong enough",
  };
};

export const CountryOptionList: Array<{ key: string; value: string }> = [
  { key: "germany", value: "Germany" },
  { key: "austria", value: "Austria" },
  { key: "switzerland", value: "Switzerland" },
];
