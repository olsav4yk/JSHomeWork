/*Создать имплементацию функции `reverse`, которая принимает массив в качестве параметра, а возвращает массив только в обратном порядке.

Функция должна содержать проверки:

- Первый параметр обязателен и может принимать только массив
- Генерировать ошибку если был передан пустой массив

```javascript
const arr = [3,2,1];
reverse(arr); // [1,2,3]*/
function myReverse(arr) {
    if (!Array.isArray(arr) && arr.length === 0) throw new Error('Первый параметр обязателен и может принимать только не пустой массив')
    //if (typeof cb !== 'function') throw new Error('Второй параметр обязателен и может принимать только функцию')
    const arr2 = []
    for (let i = arr.length-1; i >= 0 ; i--) {
        arr2.push(arr[i])
    }
  
   return arr2
   }
  
  const arr = [3,2,1]
  
  console.log(myReverse(arr))