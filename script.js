// detect your DOM, with an id/querySelector
// put in the variable

let showPassword = document.getElementById('password-text'); 
const button = document.getElementById('password-button');

// test out your DOM inside your console.log
// button.addEventListener('click', () => {
//     console.log('Hellllooo');
// })



// create a function

const generatePassword = () => {
    let length = 4;
    const letters = 'abcdefghijklmnopqrstuvwxz';
    const symbols = '!"#$%&()*+,-./:;<=>?@[]^_{|}~' ;
    const numbers = '1234567890';
    let newPass = '';
    for (let i=0; i<letters.length; i++) {
        if(i<4) {
            newPass += letters.toUpperCase().charAt(Math.random() *26);
            newPass += letters.toLowerCase().charAt(Math.random() *26);
            newPass += symbols.charAt(Math.random() *29);
            newPass += numbers.charAt(Math.random() *10);
        }
    }
    // get in the DOM and printout --> innerText
    showPassword.innerText = newPass;
}

// listen to my button when i click and do the function i created
button.addEventListener('click', generatePassword);

