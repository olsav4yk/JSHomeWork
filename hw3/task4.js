//Создать имплементацию функции `some`, логика работы такая же как и у родного метода.

//Функция должна содержать проверки:

//- Первый параметр обязателен и может принимать только массив
//- Второй параметр обязателен и может принимать только функцию
//const arr = [1,2,3];
//some(arr, function(item, i, arr) {});
function mySome(arr, cb) {
    if (!Array.isArray(arr)) throw new Error('Первый параметр обязателен и может принимать только массив')
    if (typeof cb !== 'function') throw new Error('Второй параметр обязателен и может принимать только функцию')
    
    for (let i = 0; i < arr.length; i++) {
        if (cb(arr[i], i, arr)) {
            return true
        }
        else {
            return false
        }
    }
  
   // return true
   }
  
  const arr = [1, 2, 3]
  const someArr = mySome(arr, function (item, i, arr) {
        return item<0
  })
  console.log(someArr)