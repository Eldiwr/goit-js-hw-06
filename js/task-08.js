// Обработка отправки формы form.login-form должна быть по событию submit.
// При отправке формы страница не должна перезагружаться.
// Если в форме есть незаполненные поля, выводи alert с предупреждением о том, что все поля должны быть заполнены.
// Если пользователь заполнил все поля и отправил форму, собери значения полей в обьект,
//  где имя поля будет именем свойства, а значение поля - значением свойства.Для доступа к элементам формы используй свойство elements.
// Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset.

const loginForm = document.querySelector('.login-form');
const email = document.querySelector('input[type="email"]');
const password = document.querySelector('input[type="password"]');

const form = loginForm.addEventListener('submit', function (event) {
    
    event.preventDefault();

    if (email.value === "" || password.value === "") {
        return alert("Please fill in all the fields!");
    }
     
    const formElements = event.currentTarget.elements;

    const loginForm = formElements.email.value;
    const passwordForm = formElements.password.value;

    event.currentTarget.reset();
    
    console.log(loginForm,passwordForm);
});

