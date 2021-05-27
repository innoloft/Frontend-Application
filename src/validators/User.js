import {string,ref} from "yup";

export const FirstName= string()
    .required("First name is required.")
    .min(5, "First name must be at least 5 characters.");

export const LastName= string()
    .required("Last name is required.")
    .min(5, "Last name must be at least 5 characters.");

export const Address= string()
    .required("Address is required.")
    .min(10, "Address must be at least 10 characters.");

export const Country= string()
    .required("Country is required.");

export const Email= string()
    .required("Email is required.")
    .email("Invalid email.")
    .min(12, "Email must be at least 12 characters.");

export const Password = string()
    .required("Password is required.")
    .test(
        'lowPassChars', (value) => (
            "Password must be at least 6 characters."
        ),
        (value) => {

            if (!value) {
                return false;
            }
            if (value.toString().length < 6) {
                return false;
            }

            return true;
        }
    )
 /*   .test(
        'specialChars', (value) => (
            "Password must includes special characters:!@#$%^&*... "
        ),
        (value) => {
           return passwordSpecialChars(value)
        }
    )
    .test(
        'uppercase', (value) => (
            "Password must includes uppercase characters"
        ),
        (value) => {
            return passwordUppercase(value);
        }
    )
    .test(
        'number', (value) => (
            "Password must includes numeric characters"
        ),
        (value) => {
           return passwordNumeric(value);
        }
    )*/;

export const ConfirmPassword = string()
    .required("Password confirmation is required.")
    .test(
        'lowPassChars1', (value) => (
            "Password confirmation must be at least 6 characters."
        ),
        (value) => {

            if (!value) {
                return false;
            }
            if (value.toString().length < 6) {
                return false;
            }

            return true;
        }
    )/* .test(
        'specialChars', (value) => (
            "Password confirmation must includes special characters:!@#$%^&*... "
        ),
        (value) => {
           return passwordSpecialChars(value);
        }
    ) .test(
        'uppercase', (value) => (
            "Password confirmation must includes uppercase characters"
        ),
        (value) => {
            return passwordUppercase(value);
        }
    )
    .test(
        'number', (value) => (
            "Password confirmation must includes  numeric characters"
        ),
        (value) => {
            return passwordNumeric(value);
        }
    )*/
    .oneOf([ref('Password'), null], 'Password and password confirmation dose not match.');

export const passwordNumeric=(value)=>{
    if(!value){
        return true;
    }
    let format = /[1-9]/;
    return format.test(value);
};
export const passwordUppercase=(value)=>{
    if(!value){
        return true;
    }
    let format = /[A-Z]/;
    return format.test(value);
};
export const passwordSpecialChars=(value)=>{
    if(!value){
        return true;
    }
    let format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    return format.test(value);
};
