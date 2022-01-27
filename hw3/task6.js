//Создать имплементацию функции `reduceRight`, логика работы такая же как и у родного метода.

//Функция должна содержать проверки:

//- Первый параметр обязателен и может принимать только массив
//- Второй параметр обязателен и может принимать только функцию
//- Третий параметр обязателен и может принимать только строку или число

//const arr = [1,2,3];
//const acc = 0;
//reduceRight(arr, function(acc, item, i, arr) {}, acc);
function myReduceRight(arr, cb, acc) {
    if (!Array.isArray(arr)) throw new Error('Первый параметр обязателен и может принимать только массив')
    if (typeof cb !== 'function') throw new Error('Второй параметр обязателен и может принимать только функцию')
    if (typeof acc !== 'string' && typeof acc !== 'number') throw new Error('Третий параметр обязателен и может принимать только строку или число')
    
    for (let i = arr.length-1; i >= 0 ; i--) {
        acc= cb(acc, arr[i], i, arr)
      }
  
    return acc
   }
  
  const arr = [1, 2, 3]
  const acc = 0
  const reducedArrRight = myReduceRight(arr, function (acc, item, i, arr) {
        return acc+item
  }, acc)
  console.log(reducedArrRight)