console.log("start of the file")
setTimeout(function timer1() {
  console.log("timer 1 done");
},0);

for(let i = 0; i < 100000000; i++) {

}

let x = promise.resolve("sanket's promise");
x.then(function processPromise(value) {
    console.log("whose promise ?" , value);
});

setTimeout(function timer2() {
    console.log("timer 2 done");
},0);

console.log("End of the file");