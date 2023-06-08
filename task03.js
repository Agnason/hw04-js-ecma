// ""Изменение стиля элемента через заданное время""

// Напишите функцию changeStyleDelayed, которая принимает идентификатор элемента и время задержки(в миллисекундах) в качестве аргументов.Функция должна изменить стиль элемента через указанное время.

const btnEl = document.createElement('button');
const bodyEl = document.querySelector('body');

console.log(bodyEl);
bodyEl.append(btnEl);
btnEl.id = 'myElement';
btnEl.textContent = 'КНОПКА ДО ИЗМЕНЕНИЯ';

btnEl.style.cssText =
    `color: red;
    background-color: yellow;
    width: 150px;
    text-align: center;
  `;

function changeStyleDelayed(id, delay) {

    const element = document.querySelector(`#${id}`);

    setTimeout(function () {
        element.textContent = 'КНОПКА ПОСЛЕ ИЗМЕНЕНИЯ';
        element.style.cssText =
            `color: yellow;
            background-color: red;
            width: 150px;
            text-align: center;
            `;
    }, delay);

}

changeStyleDelayed('myElement', 3000);