// arrays are also custom objects in js
// index of the element is the key and the element it self is the value
//["abc", "def","ghi"] --> {0: "abc",1: "def", 2: "ghi"}

function square(el) {
    return el*el;// return square
}

function cube(x) {
    return x*x*x;
}

function isEvenOrOdd(x) {
    if(x % 2 == 0) {
        return "even";
    }else {
        return "odd";
    }
}
const arr = [1,2,3,4,5];

const result = arr.map(square);

console.log(result);

const evenodd  = arr.map(isEvenOrOdd);
console.log(evenodd);