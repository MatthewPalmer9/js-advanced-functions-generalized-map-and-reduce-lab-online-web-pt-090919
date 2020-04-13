// Add your functions here

function map(sourceArray, fn){
 let mappedArray = [] 
 sourceArray.forEach(index => {
   mappedArray.push(fn(index))
 })
 return mappedArray
}

function reduce(sourceArray, fn, startingPoint) {
    let acc
    let ind
    
    if (!!startingPt) {
        acc = startingPt
        ind = 0
    } else {
        acc = fn(arr[0], arr[1])
        ind = 2
    }
    for(ind; ind < arr.length; ind++) {
        acc = fn(acc, arr[ind])
    }
    return acc
}