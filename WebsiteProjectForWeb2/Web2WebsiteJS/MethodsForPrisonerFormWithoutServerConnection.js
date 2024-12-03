// Error message for height
document.getElementById('height').addEventListener('input', function () {
    validateHeightRange.call(this);
});

function validateHeightRange(input) {
    const height = parseFloat(this.value);
    const errorRangeMessage = document.getElementById('heightError');

    if (height < 1 || height > 8) {
        errorRangeMessage.style.display = 'block';
        this.value = '';
    } else {
        errorRangeMessage.style.display = 'none';
    }
}

document.getElementById('height').addEventListener('input', function () {
    validateNumberInputForHeight(this);
});

function validateNumberInputForHeight(input) {
    const value = input.value;
    const numberErrorMessage = document.getElementById('heightTypeError');

    if (isNaN(value)) {
        numberErrorMessage.style.display = 'block';
        input.value = ''; // Clear the input
    } else {
        numberErrorMessage.style.display = 'none';
    }
}

// Error message for weight
document.getElementById('weight').addEventListener('input', function () {
    validateWeightRange.call(this);
});

function validateWeightRange(input) {
    const weight = parseFloat(this.value);
    const errorRangeMessage = document.getElementById('weightError');

    if (weight < 0 || weight >= 900) {
        errorRangeMessage.style.display = 'block';
        this.value = '';
    } else {
        errorRangeMessage.style.display = 'none';
    }
}

document.getElementById('weight').addEventListener('input', function () {
    validateNumberInputForWeight(this);
});

function validateNumberInputForWeight(input) {
    const value = input.value;
    const numberErrorMessage = document.getElementById('weightTypeError');

    if (isNaN(value)) {
        numberErrorMessage.style.display = 'block';
        input.value = ''; // Clear the input
    } else {
        numberErrorMessage.style.display = 'none';
    }
}

// Error message for first name
document.getElementById('prisoner_fname').addEventListener('input', function () {
    validateTextInputForName(this);
});

function validateTextInputForName(input) {
    const value = input.value;
    const typeErrorMessage = document.getElementById('firstNameTypeError');

    if (/\d/.test(value)) {
        typeErrorMessage.style.display = 'block';
        input.value = ''; // Clear the input
    } else {
        typeErrorMessage.style.display = 'none';
    }
}

// Error message for last name
document.getElementById('prisoner_lname').addEventListener('input', function () {
    validateTextInputForLastName(this);
});

function validateTextInputForLastName(input) {
    const value = input.value;
    const typeErrorMessage = document.getElementById('lastNameTypeError');

    if (/\d/.test(value)) {
        typeErrorMessage.style.display = 'block';
        input.value = ''; // Clear the input
    } else {
        typeErrorMessage.style.display = 'none';
    }
}

// Error message for the whole form
document.querySelector('form').addEventListener('submit', function (event) {
    validateForm(event);
});

function validateForm(event) {
    const inputs = document.querySelectorAll('input[type=text], input[type=number], textarea, input[type=date], select');
    let formIsValid = true;

    inputs.forEach(input => {
        if (input.value.trim() === '') {
            showErrorMessage(input);
            formIsValid = false;
        } else {
            hideErrorMessage(input);
        }
    });

    if (!formIsValid) {
        event.preventDefault();
    }
}

function showErrorMessage(input) {
    const errorMessage = input.nextElementSibling;
    if (errorMessage) {
        errorMessage.style.display = 'block';
    }
}

function hideErrorMessage(input) {
    const errorMessage = input.nextElementSibling;
    if (errorMessage) {
        errorMessage.style.display = 'none';
    }
}
