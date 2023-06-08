// ""Отправка данных на сервер""

// Реализуйте функцию saveUserData, которая принимает объект с данными о пользователе в качестве аргумента и использует fetch для отправки этих данных на удаленный сервер для сохранения.Функция должна возвращать промис, который разрешается, если данные успешно отправлены, или отклоняется в случае ошибки.


const user = {
    name: 'John Smith',
    age: 30,
    email: 'john@example.com'
}



fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'POST', // Здесь так же могут быть GET, PUT, DELETE
    body: JSON.stringify(user), // Тело запроса в JSON-формате
    headers: {
        // Добавляем необходимые заголовки
        'Content-type': 'application/json; charset=UTF-8',
    },
})

    .then((response) => response.json())

    .then((data) => {
        console.log(data)
    })

    .then(() => {
        console.log('User data saved successfully');
    })

    .catch(error => {
        console.log(error.message);
    })

// ВОПРОС!!!!!!! если сделать вот так
// --------------------------------------------

// function saveUserData(user) {

//     fetch('https://jsonplaceholder.typicode.com/users', {
//         method: 'POST', // Здесь так же могут быть GET, PUT, DELETE
//         body: JSON.stringify(user), // Тело запроса в JSON-формате
//         headers: {
//             // Добавляем необходимые заголовки
//             'Content-type': 'application/json; charset=UTF-8',
//         },
//     })

//         .then((response) => response.json())

//         .then((data) => {
//             console.log(data)
//         })
// }

// saveUserData(user)
//     .then(() => {
//         console.log('User data saved successfully');
//     })

//     .catch(error => {
//         console.log(error.message);
//     })

// -------------------------------------------

// то в консоли появляется вот така ошибка
// Uncaught TypeError: Cannot read properties of undefined(reading 'then')
// рещение так и не нашёл :((
