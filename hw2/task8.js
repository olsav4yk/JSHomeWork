//Дан массив с числами `[1, 2, 3]`. Создайте функцию `f`, которая принимает данный массив в качестве параметров, а затем последовательно выводит на экран его элементы. 
//Обязательно нужно использовать рекурсию. Использовать цикл запрещено. 
//Данная функция должна обязательно содержать проверку входного параметра, потому что принимать она может только не пустой массив.

const arr = [1, 2, 3]
let i = 0
function f(arr) {
    if (Array.isArray(arr)){
        if (arr.length === 0){
            throw new Error ('parameter can\'t be an empty')
        }
        else {
            if (i === arr.length) return
            console.log(arr.slice(i, i+1))
            i++
            f(arr)

        }

    }
    else{
        throw new Error ('parameter type should be an array')
    }

}
f([1,2,3]);
// 1
// 2
// 3
f(1,2,3) // Error: parameter type should be an array
f('Content') // Error: parameter type should be an array
f([]) // Error: parameter can't be an empty