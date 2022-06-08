const input = document.querySelector('#validation-input');
const LengthData = document.querySelector('input[data-length="6"]');
const inputLength = LengthData.dataset.length;


input.addEventListener('blur', function (event) {

    if (event.currentTarget.value.length == inputLength) {
        input.classList.remove('invalid');
        input.classList.add('valid');
        
    } else {
        input.classList.remove('valid');
        input.classList.add('invalid');    
    }
    
});