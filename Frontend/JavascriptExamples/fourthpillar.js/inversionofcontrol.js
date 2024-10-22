let arr = [1,10,1000,9,2,3,11];

arr.sort(function cmp(a,b) {
    return a-b;
})

console.log(arr);

function doTask(fn, x) {
    fn(x*x);
}

doTask(function (num) {
    console.log("Woah num is", num);
}, 9);

// async nature of js
console.log("hii");
setTimeout(function (){console.log("time done");}, 5000);
console.log("bye");