// Add your functions here

function map(sourceArray, fn){
 let mappedArray = [] 
 sourceArray.forEach(index => {
   mappedArray.push(fn(index))
 })
 return mappedArray
}

function reduce(sourceArray, startingPoint = 0){
  reduceFn = function(a, c){
    return a + c
  }
  return sourceArray.reduce(reduceFn, startingPoint)
}