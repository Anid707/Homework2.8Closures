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


// Задание 2
// Реализовать вертикальное меню, которое "выезжает" по клику на кнопку-бургер и закрывается по клику на кнопку-крестик.
// Пример, как это должно выглядеть и работать:  https://ucarecdn.com/eef643a8-...

// ПОСЛЕДОВАТЕЛЬНОСТЬ РАБОТЫ:
// 1) HTML, CSS
// В разметке предусмотреть два блока: боковую панель и main.
// Боковая панель имеет фиксированное позиционирование, занимает определенную ширину (например, 250px) и 100% высоты экрана. Укажите для нее стиль overflow-x: hidden, чтобы при сворачивании панели (ширина ее будет становиться 0) все ее содержимое скрывалось.
// Задать фоновый цвет, внутри сверстать навигацию (ссылки). Кнопку закрытия разместить в правом верхнем углу панели с помощью position: absolute.
// Main расположен по центру экрана, но когда боковая панель открыта - имеет margin-left по размеру ширины боковой выезжающей панели. Внутри main разместите кнопку-бургер, которая будет открывать боковую панель, а также заголовок и какой-то контент.

// 2) JS
// Создайте переменные для обеих кнопок, для боковой панели и для main.
// Повесьте на кнопки обработчики кликов:
// - при клике на бургер должна увеличиться ширина боковой панели (с 0 до например 250px), а у main должен появится слева отступ. Сам бургер при открытии боковой панели должен исчезать.
// - при клике на крестик ширина боковой панели должна становиться равной нулю, также должен исчезать левый отступ у main и должна появляться кнопка-бургер.


// Задание 3
// Самостоятельно реализовать меню, открывающееся по клику на бургер, который тут же превращается в крестик.
// Образец - devby.io, или можно посмотреть здесь: https://ucarecdn.com/aeb69a87-...
// Внутри открывающегося по клику на бургер блока сначала идет строка поиска, при клике в нее (фокусное состояние) фон всей строки, включая кнопку, меняется на белый.
// Все нужные иконки скачать с сайта dev.by, из кода в инспекторе.

// ПОДСКАЗКИ. Вы можете изначально сверстать открытое меню, при этом кнопка "крестик" будет расположена в точности на месте кнопки "бургер". Скрыть выпадающий блок с помощью CSS. При открытии меню кнопка "бургер" будет исчезать, при закрытии - появляться.


// Задание 4
// Реализовать функционал мини таск-менеджера.
// Функционально должно работать так: https://ucarecdn.com/a2aeaed4-...
// Затем стилизовать (написать CSS) на свое усмотрение.

// ПОСЛЕДОВАТЕЛЬНОСТЬ РАБОТЫ:
// 1) Описать в html форму с полем input и кнопкой отправки формы. Под формой предусмотреть пустой список ul.
// 2) На событие отправки формы добавлять в список ul элемент li со значением инпута. Сам инпут при этом очищать.
// 3) Внутри добавляющегося li перед текстом должен также добавляться чекбокс.
// Для добавления элемента внутрь в начало используйте метод element.prepend(element).
// 4) При отметке чекбокса задача должна перечеркиваться (становиться выполненной) и перемещаться вниз списка. Если отметку снять - перечеркивание убирается и задача помещается в начало списка.
// Отмеченный чекбокс - js-свойство .checked
// Перечеркнутый текст - CSS-свойство text-decoration: line-through
// 5) К каждой задаче добавить кнопку для удаления, реализовать само удаление.
// Для удаления элементов используется метод element.remove().
// 6) Пропишите CSS, чтобы ваш таск-менеджер выглядел получше: уберите маркеры у списка, оформите кнопки.

