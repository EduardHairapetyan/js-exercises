const emailList = [
    "example@gmail.com",
    "somename@mail.ru",
    "testmail1@yandex.com",
    "testmail2@yandex.com",
];

const emailInput = document.querySelector('#email');

const randomIndex = Math.floor(Math.random() * emailList.length);
const placeholderEmail = emailList[randomIndex];

emailInput.placeholder = placeholderEmail;
