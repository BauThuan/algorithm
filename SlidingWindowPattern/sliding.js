function Sliding(arr, num) {
    // arr -> mảng
    // num -> tổng số lượng phần
    let maxNum = 0;
    let tempNum = 0;
    if(arr.length < num) return null
    for(let i = 0; i < num; i++){
        maxNum += arr[i]
    }
    tempNum = maxNum
    for(let i = num; i < arr.length; i++){
        // tổng của 3 số đầu tiên tempNum
        // tempNum - đi số đầu tiên của tổng cũ + với số mới tiếp theo
        tempNum = tempNum - arr[i - num] + arr[i]
        maxNum = Math.max(maxNum, tempNum)
    }
    console.log(">>> check", maxNum)
    return maxNum
}

Sliding([1,2,3,4,1,2,3,4,5,6,7,1,2,2,1], 3)