const counter = {
    value: 0,

    increment() {
        this.value += 1;
    },

    decrement() {
        this.value -= 1;
    },
};


const incrementBtn = document.querySelector('button[data-action="increment"]');
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const valueRef = document.querySelector('#value');

let counterValue = 0;

decrementBtn.addEventListener('click', function () {

    counter.decrement();

    valueRef.textContent = counter.value;

});

incrementBtn.addEventListener('click', function () {

    counter.increment();

    valueRef.textContent = counter.value;

});

