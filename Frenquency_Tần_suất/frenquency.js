function Frenquency(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false
    }
    let frenquencyResultArr1 = {}
    let frenquencyResultArr2 = {}
    
    for(let index of arr1){
        frenquencyResultArr1[index] = (frenquencyResultArr1[index] || 0) + 1
    }

    for(let index of arr2){
        frenquencyResultArr2[index] = (frenquencyResultArr2[index] || 0) + 1
    }

    for(let item in frenquencyResultArr1){
        if(frenquencyResultArr1[item] !== frenquencyResultArr2[item]){
            return false
        }
    }
    console.log("data", frenquencyResultArr1, frenquencyResultArr2)
    return true

}
Frenquency([1,2,1], [1,2,1])