const inputRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

inputRef.addEventListener('input', function (event) {
    textRef.style.fontSize = event.currentTarget.value + 'px';
});