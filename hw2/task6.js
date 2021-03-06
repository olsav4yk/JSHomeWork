//Сделайте функцию `isEven()`, которая параметром принимает целое число и проверяет: чётное оно или нет. 
//Если чётное — функция возвращает `true`, если нечётное — `false`. 
//Данная функция должна обязательно содержать проверку входного параметра, потому что принимать она может только число.
//*Чётные числа могут делится на 2 без остатка.*

function isEven(a) {
    if (typeof a === 'number'){
        if (a % 2 === 0){
            return true
        }
        else {
            return false
        }
    }
    else {
        throw new Error('parameter type is not a Number')
    }
}
isEven(3); // false
isEven(4); // true
isEven('Content'); // Error: parameter type is not a Number