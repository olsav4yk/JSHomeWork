//Сделайте функцию `f`, которая принимает параметром число от 1 до 7, а затем возвращает день недели на русском языке. 
//Данная функция должна обязательно содержать проверку входного параметра, потому что принимать она может только числа от 1 до 7.

function f(a){
    if (typeof a !== 'number'){
        throw new Error ('parameter type is not a Number')
    } else if (a<1 || a>7){
        throw new Error ('parameter should be in the range of 1 to 7')
    }
    else {
        switch (a){
            case 1:
                a = 'Воскресенье'
                break
            case 2:
                a ='Понедельник'
                break
            case 3:
                a ='Вторник'
                break  
            case 4:
                a ='Среда'
                break
            case 5:
                a ='Четверг'
                break
            case 6:
                a ='Пятница'
                break
            case 7:
                a ='Суббота'
                break
        }
    }
    return a
}
f(1); // Воскресенье
f(2); // Понедельник
f(8); // Error: parameter should be in the range of 1 to 7
f('1'); // Error: parameter type is not a Number