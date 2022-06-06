const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');


nameInput.addEventListener('input', function (event) {

    event.currentTarget.value === ''
        ? nameOutput.textContent = 'Anonymous'
        : nameOutput.textContent = event.currentTarget.value;
  
});
