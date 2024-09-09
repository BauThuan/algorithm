function SameFrequency(num1, num2){
    if(typeof num1 !== 'number' || typeof num2 !== 'number') return false 
    let resultNum1 = {}
    let resultNum2 = {}
    const num1String = num1.toString();
    const num2String = num2.toString();

    for(let index of num1String){
        resultNum1[index] = (resultNum1[index] || 0) + 1
    }

    for(let index of num2String){
        resultNum2[index] = (resultNum2[index] || 0) + 1
    }

    for(let item in resultNum1){
        if(resultNum1[item]  !== resultNum2[item]){
            console.log('false')
            return false
        }
    }
    console.log('true:', resultNum1, resultNum2)
    return true
}
SameFrequency(123, 123)