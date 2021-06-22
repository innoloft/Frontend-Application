import passwordStrength from 'check-password-strength';

const validate = (formField) => {
    switch(formField.name) {
        case "firstName":
            return /^[a-zA-Z'\s]+$/.test(formField.value) ? '' : 'The name is not valid!';
        case "lastName":
            return /^[a-zA-Z'\s]+$/.test(formField.value) ? '' : 'The name is not valid!';
        case "address":
            return /^[a-zA-Z0-9-,.'/\s]+$/.test(formField.value) ? '' : 'The address is not valid';
        case "country":
            return formField.value !== '' ? '' : 'Please pick a country';
        case "emailAddress":
            return /^\S+@\S+\.\S+$/.test(formField.value) ? '' : 'The e-mail adress is not valid';
        case "password":
            return formField.value ? passwordStrength(formField.value) : 'Please enter a password';
        default: return null;
    }
};

export default validate;