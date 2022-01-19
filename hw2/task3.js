//Сделайте функцию `f`, которая отнимает от первого числа второе и делит на третье. 
//Данная функция должна обязательно содержать проверку входных параметров, потому что принимать она может только числа.

function f(n1,n2,n3){
    let total
    if(typeof n1==='number'&&typeof n2==='number'&&typeof n3==='number'){
        total = (n1-n2)/n3
    }
    else {
        throw new Error ('all parameters type should be a Number')
    }
    return total
}
f(9,3,2); // 3
f('s',9,3) // Error: all parameters type should be a Number