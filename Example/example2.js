function averagePair(arr, num){
    let left = 0
    let right = arr.length - 1
    while(left < right){
        let sum = arr[left] + arr[right]
        if(sum / 2 === num){
            console.log('>>> success', [arr[left], arr[right]])
            return true
        }else{
            left++
        }

    }
    console.log(">>> error")
    return false

}
averagePair([1,2,1,7,5,6,8], 5.5)