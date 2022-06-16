const specifier = (data) => {
    return (data instanceof Array) ? data.slice() : Object.values(data);
}

const myEach = (arr,alert) => {
const newArr = specifier(arr);
for(let i = 0; i < newArr.length; i++) {
    alert(newArr[i]);
}
return arr;
}


const myMap = (arr, callback) => {
    const newArr = specifier(arr)
    const newArr1 = []
    for(let i = 0; i < newArr.length; i++) {
        newArr1.push(callback(newArr[i]));
}
return newArr1
}

//reduce
    const myReduce = (arr, callback, acc) => {
        let newArr = specifier(arr);
        if (acc === false || acc === undefined) {
            acc = newArr[0];
            newArr = newArr.slice(1);
          }
        for (let i = 0; i < newArr.length; i++) {
        acc = callback(acc, newArr[i], newArr);
        }
        return acc;
    }
//find
const myFind = (collection, predicate) => {
    const newCollection = specifier(collection);
    for(let i = 0; i < newCollection.length; i++){
        if(predicate(newCollection[i])){
            return newCollection[i];
        } 
    } return undefined;
    
}
//filter

const myFilter = (collection, predicate) => {
    const newCollection = specifier(collection);
    const newArr = [];
    for( let i = 0; i < newCollection.length; i++){
        if(predicate(newCollection[i])){
             newArr.push(newCollection[i]);
        }
    } return newArr;
}
//size
const mySize = (collection) => {
const newCollection =specifier(collection);
return newCollection.length
}


const myKeys =(object) => {
    const keys = [];
    for (let key in object){
      keys.push(key);
    }
    return keys;
  }

const myValues = (object) => {
  const values =[];
  for (let key in object){
    values.push(object[key]);
  }return values
}
const myFirst = (array, stop = false)  =>{
  return stop ? array.slice(0, stop) : array[0];
};

const myLast =  (array, start = false) =>{
  return start
    ? array.slice(array.length - start, array.length)
    : array[array.length - 1];
};
