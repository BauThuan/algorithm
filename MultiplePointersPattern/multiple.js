function MultiplePointers(arr){
    let left = 0;
    let right = arr.length - 1
    arr.sort((a, b) => a - b)
    let result = []
    while(left < right){
        let sum = arr[left] + arr[right]
        if(sum === 0){
            result.push([arr[left], arr[right]]); // Lưu cặp tìm thấy vào mảng kết quả
            left++;
            right--;
        }else if(sum > 0){
            right--
        }else{
            left++
        }
    }
    console.log(">>> check data", result)
}

MultiplePointers([1,2,3,-1,0,5,6,-2])