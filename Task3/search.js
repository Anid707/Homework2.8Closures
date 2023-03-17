// Задание 3
// Самостоятельно реализовать меню, открывающееся по клику на бургер, который тут же превращается в крестик.
// Образец - devby.io, или можно посмотреть здесь: https://ucarecdn.com/aeb69a87-...
// Внутри открывающегося по клику на бургер блока сначала идет строка поиска, при клике в нее (фокусное состояние) фон всей строки, включая кнопку, меняется на белый.
// Все нужные иконки скачать с сайта dev.by, из кода в инспекторе.

// ПОДСКАЗКИ. Вы можете изначально сверстать открытое меню, при этом кнопка "крестик" будет расположена в точности на месте кнопки "бургер". Скрыть выпадающий блок с помощью CSS. При открытии меню кнопка "бургер" будет исчезать, при закрытии - появляться.

const burgerBtn = document.getElementById("burger");
const search = document.getElementById("search");
const closeBtn = document.getElementById("close");
const input = document.getElementById("search-input");

burgerBtn.addEventListener("click", searchToggle);

closeBtn.addEventListener("click", searchToggle);

function searchToggle(){
    burgerBtn.classList.toggle("active");
    closeBtn.classList.toggle("active");
    search.classList.toggle("search-active");
}

input.addEventListener("focusin", () => {
    search.classList.toggle("search-focus");
    input.classList.toggle("search__input-focus");
})

input.addEventListener("focusout", () => {
    search.classList.toggle("search-focus");
    input.classList.toggle("search__input-focus");
    searchToggle();
})
