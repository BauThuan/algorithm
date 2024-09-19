function SelectionSort(arr){
    for(let i = 0; i < arr.length ; i++){
        var minIndex = i
        for(let j = i +1; j < arr.length ; j++){
            if(arr[j] < arr[minIndex]){
                minIndex = j
            }
        }
        if(i !== minIndex){
            var temp = arr[i]
            arr[i] = arr[minIndex];
            arr[minIndex] = temp
        }
    }
    return arr
}
console.log(SelectionSort([5,3,6,8,2,9,1, 10,11,12,9,6,7,8,4,5,2]));