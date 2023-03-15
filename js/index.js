/***********************************
 Цикл з лічильником 

for (let i = 0; i < 100; i = i + 1) {
  console.log(i);
}

i = i + 1 same i++

for (let i = 100; i > 0; i--) {
  console.log(i);
}

for (let i = 100; i > 0; i--) {
  console.log(i);
}

for (let i = 100; i > 0; i--) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

i -= 2
for (let i = 100; i > 0; i = i - 2) {
  console.log(i);
}
******************************************/

// Цикл з передумовою
// let i = 0;
// while (i < 100) {
//   console.log(i);
//   i++;
// }

//Цикл з передумовою
// let num = NaN;
// while (Number.isNaN(num)) {
//   num = parseFloat(prompt('Enter number'));
// }
// alert(num);

//Цикл з постумовою
// let num;
//   num = parseFloat(prompt('Enter number'));
// } while (Number.isNaN(num));

// alert(num);

let products = [];
products[0] = 'Nissan Leaf';
products[1] = 'Audi A4';
products[2] = 'Lexus NX200';
products[10] = 'BMW i3';
products.push('Toyota Corolla');
console.log(products);
console.log(products.length);

//products.reverse();

// for (let i = 0; i < products.length; i++) {
//   console.log(products[i]);
// }

// Вивести всі елемнти масиву у зворотньому порядку
// for (let i = products.length - 1; i >= 0; i--) {
//   console.log(products[i]);
// }

// products.forEach(printElement);
// function printElement(el) {
//   console.log(el);
// }

// Крок 1 - переношу функцію в аргумент forEach
// products.forEach(function printElement(el) {
//   console.log(el);
// });

// Крок 2 - видаляю ім'я
// products.forEach(function (el) {
//   console.log(el);
// });

//Крок 3 - роблю стрілочну функцію
// products.forEach((el) => {
//   console.log(el);
// });

products.sort();

//Крок 4 - спрощую написання стрілочної функції
products.forEach((el) => console.log(el));

const nums = [10, 20, 1, 12, 22, 222, 30, 200, 300];
nums.sort((a, b) => a - b);
console.log(nums);

// Проходження по масиву та додавання парних і не парних чисел
function pickIt(arr) {
  const odd = [],
    even = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      even.push(arr[i]);
    } else {
      odd.push(arr[i]);
    }
  }
  return [odd, even];
}
