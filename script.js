var firstName = document.getElementById('firstName');
var firstNameInput = document.getElementById('fNameInput');
var lastName = document.getElementById('lastName');
var lastNameInput = document.getElementById('lNameInput');
var userName = document.getElementById('userName');
var userNameInput = document.getElementById('userNameInput');
var email = document.getElementById('email-input');
var emailInput = document.getElementById('emailInput');
var address = document.getElementById('address-input');
var addressInput = document.getElementById('addressInput');
var zipCode = document.getElementById('zipInput');
var zipCodeInput = document.getElementById('zipCodeInput');

function validate() {
    const array = [
        'firstName',
        'lastName',
        'userName',
        'email',
        'address',
        'zipCode'
    ]

    var test = [];

    array.forEach((field) => {
        console.log("test 0:", this.validator(field))
        test.push(this.validator(field))
    })
    console.log("test 1:", this.allAreTrue(test))
    if(this.allAreTrue(test)){
        console.log(test)
        document.getElementById('form').submit()
    }

};

function validator(field) {
    var validateField = document.getElementById(`validateField${capitalizeFirstLetter(field)}`);
    var canNext = [];
        switch (field) {
            case 'firstName':
                if (firstName.value.length <= 3) {
                    validateField.textContent = 'Invalid Name';
                    validateField.style.color = '#FF0000';
                    canNext.push(false);
                } else {
                    firstName.classList.add('valid')
                    validateField.textContent = 'Valid Name';
                    validateField.style.color = '#00FF09';
                    canNext.push(true);
                    sessionStorage.setItem('firstName', firstName.value);
                }
                break;
            case 'lastName':
                if (lastName.value.length <= 3) {
                    validateField.textContent = 'Invalid Last Name';
                    validateField.style.color = '#FF0000';
                    canNext.push(false);
                } else {
                    lastName.classList.add('valid')
                    validateField.textContent = 'Valid Last Name';
                    validateField.style.color = '#00FF09';
                    canNext.push(true);
                    sessionStorage.setItem('lastName', lastName.value);
                }
                break;
            case 'userName':
                if (userName.value.length <= 4) {
                    validateField.textContent = 'Invalid username';
                    validateField.style.color = '#FF0000';
                    canNext.push(false);
                } else {
                    userName.classList.add('valid')
                    validateField.textContent = 'Valid username';
                    validateField.style.color = '#00FF09';
                    canNext.push(true);
                    sessionStorage.setItem('userName', userName.value);  
                }
                break;
            case 'email':
                if (email.value.includes('@') && email.value.includes('.com')) {
                    email.classList.add('valid')
                    validateField.textContent = 'Valid email';
                    validateField.style.color = '#00FF09';
                    canNext.push(true);
                    sessionStorage.setItem('emailInput', email.value);
                } else {
                    validateField.textContent = 'Invalid email';
                    validateField.style.color = '#FF0000';
                    canNext.push(false);
                };
                break;
            case 'address':
                if (/^\d{1,5}\s\w.\s(\b\w*\b\s){1,2}\w*/.test(address.value)) {
                    address.classList.add('valid')
                    validateField.textContent = 'Valid address';
                    validateField.style.color = '#00FF09';
                    canNext.push(true);
                    sessionStorage.setItem('addressInput', address.value);
                } else {
                    validateField.textContent = 'Invalid email';
                    validateField.style.color = '#FF0000';
                    canNext.push(false);
                }
                break;
            case 'zipCode':
                if (/^\d{5}[-\s](?:\d{3})$/.test(zipCode.value)) {
                    zipCode.classList.add('valid')
                    validateField.textContent = 'Valid zip code';
                    validateField.style.color = '#00FF09';
                    canNext.push(true);
                    sessionStorage.setItem('zipInput', zipCode.value);
                } else {
                    validateField.textContent = 'Invalid zip code';
                    validateField.style.color = '#FF0000';
                    canNext.push(false);
                }
        }
        return this.allAreTrue(canNext);
}

function cep(event) {
    console.log(event.keyCode);
    if (event.keyCode != 46 && event.keyCode != 8) {
        var i = document.getElementById("zipInput").value.length;
        if (i === 5) {
            document.getElementById("zipInput").value = document.getElementById("zipInput").value + "-";
        }
    }
};

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

function allAreTrue(arr) {
    return arr.every(element => element === true);
};