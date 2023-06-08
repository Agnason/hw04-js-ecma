// ""Получение данных о пользователе""
// Реализуйте функцию getUserData, которая принимает идентификатор пользователя(ID) в качестве аргумента и использует fetch для получения данных о пользователе с заданным ID с удаленного сервера.Функция должна возвращать промис, который разрешается с данными о пользователе в виде объекта.Если пользователь с указанным ID не найден, промис должен быть отклонен с соответствующим сообщением об ошибке.

//     Подсказка, с последовательностью действий:
// getUserData использует fetch для получения данных о пользователе с удаленного сервера.Если запрос успешен(с кодом 200), функция извлекает данные из ответа с помощью response.json() и возвращает объект с данными о пользователе.Если запрос неуспешен, функция отклоняет промис с сообщением об ошибке.

function getUserData(url, id) {

    fetch(url)
        // получить ресурс, расположенный по адресу url. Проверить его на null и выполнение
        .then((response) => {
            if ((response != null) && response.ok) {
                return response.json();
            } else {
                console.log(
                    `We have some problems! Look, response status is ${response.status}.`
                );
            }
        })
        // находим пользователя с заданным id. Если его нет, возвращаем null
        .then((users) => {
            let userCurrentId = null;
            users.forEach(element => {

                if (element.id === id) {
                    userCurrentId = element;
                }
            });
            return userCurrentId;
        })
        //  выводим в консоль данные об польователе, либо пишем что не найден
        .then((userCurrentId) => {
            if (userCurrentId != null) {
                console.log(userCurrentId);
                return userCurrentId;
            } else {
                console.log(`Пользователь с указанным id равным ${id} не найден`);
            }
        })
}

getUserData('https://jsonplaceholder.typicode.com/users', 3);


// почему не полуается задать в переменную userIdWith3 результат функции getUserData('https://jsonplaceholder.typicode.com/users', 3); пишет что undefined ????????

// const userIdWith3 = getUserData('https://jsonplaceholder.typicode.com/users', 3);
// console.log(userIdWith3);
