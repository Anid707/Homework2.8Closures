// Задание 1
// Реализовать функционал модального окошка, которое открывается с затемнением фона при нажатии на кнопку и закрывается по нажатию на кнопку-крестик или на тёмную область вокруг окошка.

// ПОСЛЕДОВАТЕЛЬНОСТЬ РАБОТЫ:
// 1) HTML, CSS
// Посмотрите видео, как подготовить верстку: 
// 2) JS
// - Соберите в переменные необходимые элементы: кнопку для открытия окошка, само окошко вместе с фоном, окошко без фона, кнопку закрытия окошка.
// - Повесьте обработчик клика на кнопку открытия - к окошку должен добавляться класс, в котором через CSS задана видимость блока.
// Чтобы добавить класс к DOM-элементу, используется метод element.classList.add('classname')
// - Повесьте обработчик клика на кнопку закрытия окошка - при этом должен удаляться класс, который добавляли в предыдущем обработчике.
// Чтобы удалить класс из DOM-элемента, используется метод element.classList.remove('classname')
// - Повесьте обработчик клика на глобальный объект window, чтобы реализовать закрытие окошка по клику на тёмную область. Т.к. эта область является "оболочкой" окошка, мы должны проверить, была ли именно эта область целью клика (не центральная, основная часть окошка, а именно тёмная).
// Для обращения к элементу, на который пришелся клик, можно использовать свойство объекта события -
// event.target (event - это параметр функции-обработчика события,  и его свойство target точно указывает на тот элемент, на который кликнул пользователь).
const contactBtn = document.getElementById("contact-btn");
const popup = document.getElementById("pop-up");
const closeBtn = document.querySelector(".close-out");
const blackout = document.querySelector(".black-out");

contactBtn.addEventListener("click", openPopup);

closeBtn.addEventListener("click", closePopup);

window.addEventListener("click", (event) => {
    if (event.target.classList.contains("blacked-out")){
        closePopup();
    }
})

window.addEventListener("keydown", (event) => {
    console.log(event.key);
    if (event.key === "Escape") {
      closePopup();
    }
  });

function closePopup(){
    popup.classList.remove("active");
    blackout.classList.remove("blacked-out");
    document.body.style.overflow = "auto";
}

function openPopup(){
    popup.classList.add("active");
    blackout.classList.add("blacked-out");
    document.body.style.overflow = "hidden";
}