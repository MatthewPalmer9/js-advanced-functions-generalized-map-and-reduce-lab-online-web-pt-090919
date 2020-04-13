// Add your functions here

function map(sourceArray, fn){
 let mappedArray = [] 
 sourceArray.forEach(index => {
   mappedArray.push(fn(index))
 })
 return mappedArray
}

function reduce(sourceArray, startingPoint = 0){
  
}