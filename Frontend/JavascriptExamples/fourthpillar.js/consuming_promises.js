 /*setTimeout(function exec() {
    console.log("done");
 },3000);*/

 function getRandomInt(max) {
    return Math.floor(Math.random() * max);
 }
 function createPromiseWithTimeout() {
    return new Promise(function executor(resolve, reject) {
        console.log("Entering the executor callback in the promise constructor");
        setTimeout(function () {
            let num = getRandomInt(10);
            if (num % 2 == 0) {
                resolve(num);
            } else {
                reject(num);
            }
        }, 10000);

    console.log("Exitting the executor callback in the promise constructor")
    });
}


console.log("starting....");
const p = createPromiseWithTimeout();
console.log("we are now waiting for the promise to complete");
console.log("currently my promise object is like...", p);
console.log("going to register my 1st set of handlers");
p
.then(
    function fulfillHandler1(value) {
        console.log("inside fulfill handler 1  with value",value);
        console.log("promise after fulfillment is", p);
    },
    function rejectionHandler1(value) {
        console.log("inside rejection handler 1 with value",value);
        console.log("promise after rejection is", p);
    },
);
console.log("going to register my 2nd set of handlers");
p
.then(
    function fulfillHandler2(value) {
        console.log("inside fulfill handler 2 with value",value);
        console.log("promise after fulfillment is", p);
    },
    function rejectionHandler2(value) {
        console.log("inside rejection handler 2 with value",value);
        console.log("promise after rejection is", p);
    },
);

console.log("ending");