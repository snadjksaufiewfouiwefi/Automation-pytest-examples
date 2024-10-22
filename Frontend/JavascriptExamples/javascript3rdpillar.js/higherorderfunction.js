function f(x, fn) {
    console.log(x);
    fn();
}

f(10, function exec() {
    console.log("i am an expression passed to a HOF");
});

let arr = [1,10,9,1000,5,62,135,25,14,7,235];
 

const newArr =[9,8,7,6,5];
function print(element , idx) {
    return `element at index ${idx} is ${element}`;
}
//here map is looping over every elemnt
//and then passing element, index in the function print

const result2 = newArr.map(print)
console.log(result2);


function customMapper(arr, func) {
    let result = [];
    for(let i =0; i < arr.lenght; i++) {
        result.push(func(arr[i], i));
    }
    return result;
}

const value = customMapper(newArr, print);
console.log(value);

//sort b in increasing order
let b = [1,10,12,9,1000,11,12,1,3,14,2,3];


b.sort(function (a,b) {
    return a-b;
});

console.log(b);