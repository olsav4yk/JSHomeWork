/*Сделайте функцию `arrayFill`, которая будет заполнять массив заданными значениями. Первым параметром функция принимает значение, которым заполнять массив, 
а вторым — сколько элементов должно быть в массиве.

Функция должна содержать проверки:

- Первый параметр обязателен и может принимать только число, строку, объект, массив
- Второй параметр обязателен и может принимать только число

```javascript
arrayFill('x',5); // [x,x,x,x,x]*/
function arrayFill(item, length) {
    let arr = []
    if (typeof item !== 'number' && typeof item !== 'string' && !Array.isArray(item) && typeof item !== 'object') 
    throw new Error ('Первый параметр обязателен и может принимать только число, строку, объект, массив')
    if (typeof length !== 'number' /*&& length<1*/ ) throw new Error ('Второй параметр обязателен и может принимать только число')

    for (let i = 0; i < length; i++) {
        arr[i] = item
      }
      return arr
}

console.log(arrayFill('x',5))