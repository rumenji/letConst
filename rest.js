// function filterOutOdds() {
//     var nums = Array.prototype.slice.call(arguments);
//     return nums.filter(function(num) {
//       return num % 2 === 0
//     });
//   }

const filterOutOdds = (...args) => args.filter(arg => arg % 2 === 0);

// findMin(1,4,12,-3) // -3
// findMin(1,-1) // -1
// findMin(3,1) // 1

const findMin = (...args) => Math.min(...args);

// mergeObjects({a:1, b:2}, {c:3, d:4}) // {a:1, b:2, c:3, d:4}

// mergeObjects({a:1, b:2}, {c:3, d:4}) // {a:1, b:2, c:3, d:4}

function mergeObjects(a,b){
    return {
        ...a,
        ...b
    }
}

// doubleAndReturnArgs([1,2,3],4,4) // [1,2,3,8,8]
// doubleAndReturnArgs([2],10,4) // [2, 20, 8]
const doubleAndReturnArgs = (first, ...rest) => [...first, ...rest.map(arg => arg *2)]


/** remove a random element in the items array
and return a new array without that item. */

// function removeRandom(items) {
//     const i = Math.floor(Math.random() * items.length);
//     return [...items.slice(0,i), ...items.slice(i+1)]
// }

const removeRandom = (items) => {const i =  Math.floor(Math.random() * items.length);
return [...items.slice(0,i), ...items.slice(i+1)]}

/** Return a new array with every item in array1 and array2. */

// function extend(array1, array2) {
//     return [...array1, ...array2]
// }
const extend = (array1, array2) => ([...array1, ...array2]);

/** Return a new object with all the keys and values
from obj and a new key/value pair */

// function addKeyVal(obj, key, val) {
//     let newObj = {...obj};
//     newObj[key] = val;
//     return newObj
// }

const addKeyVal = (obj, key, val) => {
    let newObj = {...obj};
    newObj[key] = val;
    return newObj
};

/** Return a new object with a key removed. */

// function removeKey(obj, key) {
//     let newObj = {...obj};
//     delete newObj[key];
//     return newObj
// }
const removeKey = (obj, key) => {
    let newObj = {...obj};
    delete newObj[key];
    return newObj
}


/** Combine two objects and return a new object. */

// function combine(obj1, obj2) {
//     let newObj = {...obj1, ...obj2};
//     return newObj
// }
const combine = (obj1, obj2) => {
    let newObj = {...obj1, ...obj2};
    return newObj
}

/** Return a new object with a modified key and value. */

// function update(obj, key, val) {
//     let newObj = {...obj};
//     newObj[key] = val;
//     return newObj
// }
const update = (obj, key, val) => {
    let newObj = {...obj};
    newObj[key] = val;
    return newObj
}