function binarySearch(arr, target){
    let start = 0
    let end = arr.length - 1
    while(start <= end){
        let mid = Math.floor((start + end) / 2)
        if(arr[mid] === target) {
            return mid
        }else if(arr[mid] < target){
            start = mid + 1
        }else{
            end = mid - 1
        }
    }
    console.log('Error')
    return -1
   
}
console.log(
    binarySearch(
        [5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99] , 10)
    );

function productOfArray(arr) {
    if(arr.length === 0) return 1;
    return arr[0] * productOfArray(arr.slice(1));
}

console.log(productOfArray([1, 2, 3]));
console.log(productOfArray([1, 2, 3, 10]));

function recursiveRange(num){
    if(typeof num !== 'number') return false
    if(num === 0) return 0
    return num + recursiveRange(num - 1)
   
}
console.log(recursiveRange(6));
