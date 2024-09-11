function linearSearch(arr, item){
    if(!arr.length) return false
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === item){
            console.log(`Tìm thành công item ${arr[i]} vị trí ${i}`)
            return i
        }
    }
    console.log("Tìm kiếm thất bại")
    return -1
}

linearSearch([1,2,3], 5)