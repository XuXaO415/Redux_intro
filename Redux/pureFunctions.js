// impure function returns a new array

function addToImpure(arr, val) {
    arr.push(val);
    return arr;
}

let nums = [1, 2, 3];
addToImpure(nums, 4);
nums;

// pure function returns a new array
function addToPure(arr, val) {
    return [...arr, val];
}
let numbers = [1, 2, 3];
addToPure(numbers, 4);
numbers;

// impure function returns a new object
function addToObjImpure(obj, key, val) {
    obj[key] = val;
    return obj;
}

let dog = { name: "Kona" };
addToObjImpure(dog, "favFood", "hamburgers");
dog;

// pure function returns a new object
function addToObjPure(obj, key, val) {
    return { ...obj, [key]: val };
}
let doggo = { name: "Kona" };
addToObjPure(doggo, "favFood", "hamburgers");
dog;