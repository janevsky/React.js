const validateUsername = (username) => {
    let validation = {
        valid: true,
        errorMsg: '',
    };

    if (username === '') {
        validation.valid = false;
        validation.errorMsg = 'Username is required.';
        return validation;
    }

    if (username.length < 2) {
        validation.valid = false;
        validation.errorMsg = 'Username should contain minimum 2 characters.';
        return validation;
    }

    return validation;
};

const validatePassword = (password) => {
    let validation = {
        valid: true,
        errorMsg: '',
    };

    if (password === '') {
        validation.valid = false;
        validation.errorMsg = 'Password is required.';
        return validation;
    }

    if (password.length < 2 || password.length > 10) {
        validation.valid = false;
        validation.errorMsg = 'Password should be between 2 or 10 characters.';
        return validation;
    }

    return validation;
};

let validationFunctions = {
    validateUsername,
    validatePassword
};

export default validationFunctions;
