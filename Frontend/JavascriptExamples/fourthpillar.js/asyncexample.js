console.log("hello world");
setTimeout(function exec() {
    console.log("timer done");
}, 0);
for (let i = 0; i < 100000000; i++) {
    //some code
}

console.log("end");

//interview question
console.log("hello world");
for (let i = 0; i < 3; i++) {
    setTimeout(function exec() {
        console.log("timer done");
    }, 10);
}
for (let i = 0; i < 100000000; i++) {
    //some code
}

console.log("end");