function areThereDuplicates() {
    let collection = {}
    for(let val in arguments){
      collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
    }
    for(let key in collection){
      if(collection[key] > 1){
        console.log('>>> success')
        return true
      }
    }
    console.log('>>> error')
    return false;
  }

areThereDuplicates(1,2,1)