//Дан массив с числами: `[1,2,3,-5,-2,1,-4]` Найдите сумму положительных элементов массива. В результате вы должны получить число `7`
const arr = [1,2,3,-5,-2,1,-4];
let sum = 0
for (let i=0; i<arr.length; i++){
    if (0<arr[i]){
        sum += arr[i]
    }      
}
console.log(sum)