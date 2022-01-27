//Создать имплементацию функции `forEach`, логика работы такая же как и у родного метода.

//Функция должна содержать проверки:

//- Первый параметр обязателен и может принимать только массив
//- Второй параметр обязателен и может принимать только функцию
function myForEach(arr, cb) {
    if (!Array.isArray(arr)) throw new Error('Первый параметр обязателен и может принимать только массив')
    if (typeof cb !== 'function') throw new Error('Второй параметр обязателен и может принимать только функцию')
  
    for (let i = 0; i < arr.length; i++) {
      cb(arr[i], i, arr)
    }
  }
  
  const arr = [1, 2, 3]
  myForEach(arr, function (item, i, arr) {
    console.log(item, i, arr)
  })
  