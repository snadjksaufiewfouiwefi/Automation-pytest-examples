function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function createPromiseWithLoop() {
    return new Promise(function executor(resolve, reject) {
        for (i = 0; i < 10000000; i++) { }
        let num = getRandomInt(10);
        if (num % 2 == 0) {
            resolve(num);
        } else {
            reject(num);
        }
    });
}

x = createPromiseWithLoop();
console.log(x);

// another example of promise

function createPromiseWithTimeout() {
    return new Promise(function executor(resolve, reject) {
        setTimeout(function () {
            let num = getRandomInt(10);
            if (num % 2 == 0) {
                resolve(num);
            } else {
                reject(num);
            }
        }, 10000);


    });
}

y = createPromiseWithLoop();
console.log(y);