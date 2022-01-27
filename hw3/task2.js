//Создать имплементацию функции `filter`, логика работы такая же как и у родного метода.

//Функция должна содержать проверки:

//- Первый параметр обязателен и может принимать только массив
//- Второй параметр обязателен и может принимать только функцию

function myFilter(arr, cb) {
    if (!Array.isArray(arr)) throw new Error('Первый параметр обязателен и может принимать только массив')
    if (typeof cb !== 'function') throw new Error('Второй параметр обязателен и может принимать только функцию')
    let arr1 = []
    for (let i = 0; i < arr.length; i++) {
        if (cb(arr[i], i, arr)){
            arr1.push(arr[i])
        }
       
    }
    return arr1
  }
  
  const arr = [1, 2, 3]
  const filteredArr = myFilter(arr, function (item, i, arr) {
        return item>2
  })
  console.log(filteredArr)
//const arr = [1,2,3];
//filter(arr, function(item, i, arr) {});