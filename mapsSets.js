// Quick Question #1
new Set([1,1,2,2,3,4]) //returns {1, 2, 3, 4}

// Quick Question #2

[...new Set("referee")].join("") //returns 'ref'

// Quick Questions #3
let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false); //returns Map of size 2: [1,2,3]: true, [1,2,3]: false;

//hasDuplicate
function hasDuplicate(arr){
    const newSet = new Set(arr);
    console.log(newSet.size, arr.length)
    if(newSet.size === arr.length){
        return false
    } return true
}

//vowelCount
function vowelCount(str){
    vowels = 'aeiou';
    let vowelsMap = new Map();
    for (let i = 0; i<str.length; i++){
        if(vowels.includes(str[i])){
            if(vowelsMap.has(str[i])){
            let k = vowelsMap.get(str[i]);
            vowelsMap.set(str[i], k+1);
        }
        else{
            vowelsMap.set(str[i], 1);
        }
    }
        
    }
    return vowelsMap
}