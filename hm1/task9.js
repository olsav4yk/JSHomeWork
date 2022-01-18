const arr = [1,2,3,4,5,6];
let sort = 0
for (let end = arr.length - 1; end >= 1; end--){
    for (let i=0; i<end; i++){
        if (arr[i] < arr[i+1]){
            sort = arr[i]
            arr[i] = arr[i+1]
            arr[i+1] = sort
    
        }
    }
}
console.log(arr)
