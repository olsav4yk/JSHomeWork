//Напишите функцию `f` которая возвращает сумму всех параметров. Количество параметров может быть любым. 
//Данная функция должна обязательно содержать проверку входных параметров, потому что принимать она может только числа.

function f(){
    
        let sum = 0
        for (let i=0; i<arguments.length; i++){
            if (typeof arguments[i] === 'number'){
            sum += arguments[i]   
            }
            else {
               throw new Error ('all parameters type should be a Number') 
            }
        }
      
        return sum
}



f(1,2,3); // 6
f(1,1,1,1,1,1,1,1); // 8
f(1,2,'s',4); // Error: all parameters type should be a Number