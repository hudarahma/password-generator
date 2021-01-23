let showPassword = document.getElementById('password-text');
const button = document.getElementById('password-button');




const generatePassword = () => {
    let length = 4;
    const letters = 'abcdefghijklmnopqrstuvwxz';
    const symbols = '!"#$%&()*+,-./:;<=>?@[]^_{|}~' ;
    const numbers = '1234567890';
    let newPass = '';
    for (let i=0; i<letters.length; i++) {
        if(i<length) {
            newPass += letters.toUpperCase().charAt(Math.random() *2);
            newPass += letters.toLowerCase().charAt(Math.random() *2);
            newPass += symbols.charAt(Math.random() *5);
            newPass += numbers.charAt(Math.random() *6);
        }
    }
    showPassword.innerText = newPass;
}


button.addEventListener('click', generatePassword);