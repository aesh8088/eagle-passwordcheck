let input = document.getElementById('password');
let output = document.getElementById('output');

input.addEventListener('input' , () => {
    let password = input.value;

    if(password.length < 8){
        output.innerText = 'Password is too short';
        output.style.color = 'red';
    } else {
        if(password.search(/[a-z]/) == -1){
            output.innerText = 'Atleast One lowercase letter is required';
            output.style.color = 'red';
        } else if(password.search(/[A-Z]/) == -1){
            output.innerText = 'Atleast One UpperCase letter is required';
            output.style.color = 'red';
        } else if(password.search(/[0-9]/) == -1){
            output.innerText = 'Atleast One number is required';
            output.style.color = 'red';
        } else if(password.search(/[!\@\#\$\&\-\_]/) == -1){
            output.innerText = 'Atleast One special character is required';
            output.style.color = 'red';
        } else {
            output.innerText = 'Password is valid and strong';
            output.style.color = 'green';
        }
    }
})