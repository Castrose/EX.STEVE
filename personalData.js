var firstNameSession = sessionStorage.getItem('firstName');
var lastNameSession = sessionStorage.getItem('lastName');
var userNameSession =  sessionStorage.getItem('userName');
var emailSession = sessionStorage.getItem('emailInput');
var addressSession = sessionStorage.getItem('addressInput');
var ZipSession = sessionStorage.getItem('zipInput');

document.getElementById('firstName').innerHTML = firstNameSession;
document.getElementById('lastName').innerHTML = lastNameSession;
document.getElementById('userName').innerHTML = userNameSession;
document.getElementById('email').innerHTML = emailSession;
document.getElementById('address').innerHTML = addressSession;
document.getElementById('zip').innerHTML = ZipSession;
