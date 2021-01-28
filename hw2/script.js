/* Повторить функции, типы данных, преобразование типов

1) Написать функцию getSum, которая принимает в себя 2 числа (в аргументы) и вернуть их сумму. (Написать 2 способа. Через стрелочную функцию и обычную)
2) Напишите функцию hello2(), которая при вызове будет принимать переменную (в аргументы) name (например, «Василий») и выводить строку (в нашем случае «Привет, Василий»).
В случае отсутствующего аргумента выводить «Привет, гость»

3) Есть строка 'Hello, my name is'

Написать функцию, которая принимает в себя 2 аргумента, и возвращает индекс найденного по второму агрументу слова в первом аргументе:

function getIndex(str, targetString) {
	...
};

- str - сама строка, в которой хотим искать слово
- targetString - слово, индекс которого хотим найти

const index = getIndex('Hello, my name is', 'is'); // 15
const index2 = getIndex('Hello, my name is', 'name'); // 10

4) Написать функцию stringValidation, которая принимает в себя 1 аргумент. 
Функция должна проверить является ли переданный аргумент строкой. 
Если это строка, то проверям размер этой строки. Если он больше чем 3 символа, то выводим на экран это слово. Если меньше чем 3 символа, то выводим слово 'Ошибка. Минимальная длина - 3'.
Если это не строка, то выводим тип данных этого значения и слово 'Ошибка. Не тот тип данных' */

// HW_1
let getSum = (a, b) => {
   return a + b;
};
console.log(getSum(2, 7));

let getSum2 = function (a, b) {
   return a + b;
};
console.log(getSum2(1, 5));

// HW_2
function hello2(name = 'гость') {
   console.log ('Привет, ', name)
};

hello2 ('Василий');

// HW_3
function getIndex(str, targetString) {
  return str.indexOf(targetString);
};

const index = getIndex("Hello, my name is", "is");
const index2 = getIndex("Hello, my name is", "name");

console.log(index);
console.log(index2);

// HW_4
function stringValidation(arg) {
  if (typeof arg === "string" && arg.length > 3) {
    console.log(arg);
  } else if (arg.length <= 3) {
    console.log("Ошибка. Минимальная длина - 3");
  } else {
    console.log("Ошибка. Не тот тип данных");
  }
}

stringValidation("Hello");