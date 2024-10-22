function createPromise() {
    return new Promise(function exec(resolve,reject) {
        console.log("resolving the promise");
        resolve("done");
    });
}

setTimeout(function process () {
    console.log("timer completed");
},0);

let p = createPromise();
p.then(function fulfillHandler1(value) {
    console.log("we fulfilled1 with a value", value);
}, function rejectionHandler () {});
p.then(function fulfillHandler2(value) {
    console.log("we fulfilled2 with a value", value);
}, function rejectionHandler () {});
p.then(function fulfillHandler3(value) {
    console.log("we fulfilled3 with a value", value);
}, function rejectionHandler () {});

for(i = 0; i < 100000000; i++) {}

console.log("ending");