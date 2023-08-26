// const menu = document.querySelector(".menu");
// const menuItems = document.querySelectorAll(".menuItem");
// const hamburger = document.querySelector(".hamburger");
// const closeIcon = document.querySelector(".closeIcon");
// const menuIcon = document.querySelector(".menuIcon");

// function toggleMenu() {
//     if (menu.classList.contains("showMenu")) {
//         menu.classList.remove("showMenu");
//         closeIcon.style.display = "none";
//         menuIcon.style.display = "block";
//     } else {
//         menu.classList.add("showMenu");
//         closeIcon.style.display = "block";
//         menuIcon.style.display = "none";
//     }
// }

// hamburger.addEventListener("click", toggleMenu);

// menuItems.forEach(
//     function(menuItem) {
//         menuItem.addEventListener("click", toggleMenu);
//     }
// )




// const menuItems = document.querySelectorAll('.menu-item');

// menuItems.forEach(item => {
//     item.addEventListener('mouseenter', function() {

//         // Добавление класса 'active' 
//         item.classList.add('active');

//         // Удаление класса 'active' 
//         menuItems.forEach(menuItem => {
//             if (menuItem !== item) {
//                 menuItem.classList.remove('active');
//             }
//         });
//     });

//     item.addEventListener('mouseleave', function() {
//         // Удаление класса 'active' у всех элементов при уходе курсора
//         menuItems.forEach(menuItem => {
//             menuItem.classList.remove('active');
//         });
//     });
// });



//массивы
const numbers = [1, 2, 3, 4, 5];

// копии массива намберс 
const numbersCopy = [...numbers];

// Добавление нового числа 
numbers.push(6);

// Выводит оюоих массивов 
console.log("Массив numbers:", numbers);
console.log("Массив numbersCopy:", numbersCopy);



Напишите функцию sum с использованием rest параметра, которая принимает любое количество аргументов(чисел) и возвращает их сумму.
Вызовите функцию sum несколько раз с разным количеством аргументов.
Выведите результаты вызовов функции sum в консоль.
Это задание позволит ученикам понять, как использовать операторы spread и rest для работы с массивами и аргументами функций.Они смогут увидеть, как spread позволяет копировать данные, а rest параметр собирать их в массивы.



function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

// Вызов функции sum с разным количеством аргументов и вывод результатов в консоль
console.log(sum(1, 2, 3)); // Вывод: 6
console.log(sum(10, 20, 30, 40)); // Вывод: 100
console.log(sum(2, 4, 6, 8, 10)); // Вывод: 30