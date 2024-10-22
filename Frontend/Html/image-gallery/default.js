console.log(2-9); // -7
console.log(2-null);// 2-null --> 2-0 --> 2
console.log(2-undefined); //2- undefined --> 2-NaN --> NaN

// new toprimitive

let obj = {
    toString() {
        //by default gives [object object]
        return "98";
    }

    valueOf() {
        //by default it returns the same object
    }
}

//NEW

let obj = {};

console.log(10-obj); // obj.valueOf --> object, toString --> [object object]


let obj1 = {x: 9, y: 8};

console.log(100 - obj1);

let obj2 = {x: 7, valueOf() {return 99}};
console.log(100 - obj2);

let obj3 = {x: 8, toString() {return "88"}};
console.log(90 - obj3);

let obj4 = {x: 7, toString() {return{}}};
console.log(100 - obj4);

//new eqality

let obj = {};

console.log(obj);

console.log("18" + obj);//"18" [object object]  --> "18[object object]"

console.log(18 + obj);// "18"[object object]"

//new boolian 

let x = 10;
console.log(!x);
let y = undefined;
console.log(!y);

if(y) {
    console.log("it is truely");

} else {
    console.log("it is falsy");
}

// abstracteqality.js

console.log(null == undefined);
console.log(12 == "0");// false

console.log(false == "0");//true

/*x --> boolean --> fasle --> 0
 x = 0, y= "0", x == y
y --> ToNumber --> 0
0 == 0 --> true */

console.log(null == false);
/**
 *y --> is a boolean --> ToNumber --> 0 
 * null == 0
 * false
 */

 //new file strictequality
 console.log(NaN === NaN);//false
 console.log(0 === -0)//true

 let obj = {x: 10, valueOf() {return 100;}}

 console.log(99 == obj);
 console.log(100 == obj);

//stricteqality new file

console.log(NaN === NaN);
console.log(0 === -0);


let obj1 = {x: 10};
let obj2 = {x: 10};
let obj3 = {y: 10};
console.log(obj1 === obj2);//false
console.log(obj1 === obj3);//false
console.log(obj1 === obj1);//true
console.log({x: 10} === {x: 10});//false

//Tostring new

//ToString --> "" + value
console.log("" + 0);//0 --> "0"
console.log("" + (-0)); // -0 --> "0"

console.log("" + []); // [] --> ""
console.log("" + {});

console.log("" + [1,2,3]);

console.log("" + [null,undefined]);

console.log("" + [1,2,null,4]);

//ToNumber part of above
console.log(0 - "010");// decimal number
console.log(0 - "o10");
console.log(0 - 010);// octal number
console.log(0 - "0xb");//hexadecimal no
console.log(0 - 0xb);

console.log([] - 1);
console.log([""] - 1);
console.log(["0"] - 1);
//coercionexamples.js

let obj = {x: 10, y: 20};
let nun = 10;
console.log(`my object is ${nun}`);
console.log("my object is"+obj);

//new coercion

console.log(1 < 2 < 3);// --> (1 < 2) = true < 3 --> 1 < 3 --> true
console.log(3 > 2 > 1); // --> (3 > 2) --> true --> true > 1 --> 1 > 1 --> false

//explicitypeconversion new
console.log(Boolean(""));
console.log(String(123));

// nan.js new

console.log(Number("123"));
console.log(Number("abcd"));
console.log(Number("0xa"));

let x = NaN;

console.log(x == NaN);

console.log(isNaN(x));

console.log(isNaN("sanket"));// isnan converts the incoming input to a number

console.log(Number.isNaN("sanket"));
console.log(Number.isNaN(x));


if(typeof(x) == 'number' && x != x) {// === --> not equal to
    console.log(true);
}

//negativezero new

 let x = -0;
 console.log(x === 0);
 console.log(Object.is(x, -0));
 console.log(Object. is(x,  0));

 console.log(Math.sign(-3));
 console.log(Math.sign(2));
 console.log(Math.sign(-0));
 console.log(Math.sign(0));

 console.log(x < 0);

 /*can we write a custom function that can give a sign to a number*/

//gobalscope.js new file

let name = "sanket";
function fun() {
    console.log(name);
}
fun();
console.log(name);

//new 
console.log(name);
//let name = "sanket";
var name = "sanket";
function fun() {
    console.log(name);
}
fun();
console.log(name);

//blockscope.js

if(false){             
    var x = 10;
}

console.log(x);

function gun() {
    console.log(y);
    let y = 10;
}

console.log(y);

//new js scopes
"use strict";
var teacher = "sanket";
function fun() {
    var teacher = "pulkit";
    content = "js";
    console.log(teacher);
    console.log(content);
}
function gun() {
    var student = "sarthak";
    console.log(student);
}

console.log(content);
fun();
gun();
console.log(teacher);

//nestedscopes.js new

function fun() { // fun --> global scope
    var x = 10; // x --> fun scope
    function gun() { // gun --> fun scope
        var y = 20; // y --> gun scope
        console.log(x); //10
        console.log(y); //20
    }
    gun();
    console.log(x); // 10
    console.log(y); // error

}

fun();

//lexicalvsdynamicscopes.js new
var teacher = "sanket"; // teacher --> global --> sanket
function ask(question) { // ask --> global , question --> ask
    console.log(teacher, question); // sanket ask
}

function fun() { // fun --> global
    var teacher = "pulkit"; // teacher --> fun --> pulkit
    ask("why");
}
fun();

// function in blocks.js
{
    function fun() {
        return "123";
    }
}

console.log(fun);

// let block scoping.js
var teacher = "sanket"; // global
function fun () { // global
    console.log(teacher); // no error will be given
    console.log(content); // throw an error
    var teacher = "pulkit"; // scope fun
    let content = "js"; // content will be access only post declaration
    if(content == "js") {
        let hours = "120+";
        console.log(hours);
    }
    console.log(teacher, content, hours);
}

fun();
console.log(teacher);
console.log(content);

// var in block.js new
function fun () {
    var i = 5;
    while(i < 10) {
        var x = i;
        i++;
    }
    console.log(x);
}
fun();
let i = 1;
console.log(y);
while(i < 5) {
    var y = 10;
    i++;
}

console.log(y);

//usecasevar.js new

function fun() {
    var i;
    if(x %2 == 0) {
        i = 0;
    } else {
        i = 1;
    }

}

function gun(x) {
    if(x %2 ==0) {
        var i = 0;
    } else {
        var i = 0;
    }
    console.log(i);
}
gun(10);

//usecaselet.js new

function fun () {
    for(var i = 0; i <10; i++) {
        // do something
    }
    console.log(i);
}

function process (x, y) {
    if(x > y) {
        // var temp = x;
        let temp = x ;
        x = y;
        y = temp;
    }
    return y - x;
}

fun();

//constdemo.js new

const obj = {x: 10};
obj.y = 9;
obj = {};

//functionexpression.js new 
function fun() { // function declaration
    //some impl
}

let f = function gun() { // named function expression
 // some impl
}

let a = function() {// anonymous function expression
// okk some more impl
}

(function x() {
    //can you stop it ?
}) // function expression

(function() {
    // i am done
})

let y = () ==> {

}

//iife new

(function x(y) {
    console.log("hi", y);
}) ("sanket");

//scopeoffunctionexpression.js new
const f = function fun() {
    console.log("how much fun ???");
}
f();
fun();

//usecaseofnamefunctionexpression.js
function fun(fn) {
    console.log("welcome to fun");
    fn();
}
fun(function askingaboutfun() {
    console.log("wow so much fun");
    console.trace();
})

//for recursive cases named function expression are also helpful

// callbacks.js new
//higher order function --> there are function which take another function as agrgument
// these are called higher order function

function f(x, fn) {
    /**
     * x --> number
     * fn --> function
     */
    console.log(x);
    console.log(fn);
    fn();
}

f(10, function exec() {
    console.log("i am an expression passed to a HOF")
});

let arr = [1,10,100,1000,11,12,13,14,2,3];//unsorted Array

arr.sort(); // it sorts the given array // [expectation] --> this might arrange element in inc. order
// default impletation of arr.sort() is going to sort my array in lexicographical order
/**
 * 0 --> A
 * 1 --> B
 * 2 --> C
 * 3 --> D
 * AND SO ON....
 * [B, BA, BAA, BAAA, BB, BC, C, D]// IF WE ARRANGE IT ACCORDING TO DICTIONARY
 * [B, BA, BAA, BAAA, BB, BC, BD, ....]
 * 
 */
console.log(arr); 

let b = [1,10,100,1000,11,12,13,14,2,3];
 
//sort b in increasing order

b.sort(function cmp(a, b){
    // if a<b --> a-b will be negative --> if cmp function gives neagtive then a is placed before b (a<b)
    // if a > b --> will be positive --> if cmp function gives positive then b is placed before a (b<a)
    return a-b; 
});//sort is a HOF .. the sort function takes a camparator function as argument

console.log(b);

 //ARRAYFUNCTION.JS NEW
 // arrays are also custom object in js
 /*index of the element is the key and the element it self is the value
 ["abc", "def", "ghi"] --> {0: "abc" , 1: "def" , 2: "ghi"}*/
 /**
  * map function
  * map is a higher order function available with arrays
  * it takes a function as an argument --> f
  * it returns an array in which every value is actaully populated by calling
  * function f with original array element as argument
  * 
  * every element of the original array is passed one by one in the argument function f
  * whatever is the output for each individual element, we populated that output in
  * an array
  * 
  * map internally iterates/loops over every element of the original array
  * pass the element in the argument function f and then store the returned
  * value inside an array 
  */

 function square(el) {
    return el*el; // return square
 }

function cube(x) {
    return x*x*x;
}

function isEvenOrOdd(x) {
    if(x % 2 == 0) {
        return"Even";
    } else {
        return "Odd";
    }
}
 const arr = [1,2,3,4,5];// original array

 const result = arr.map(square);//square is function passed as an argument

/**
 * square(1) --> 1
 * square(2) --> 4
 * square(3) --> 9
 * square(4) --> 16
 * square(5) --> 25
 */

console.logg(result);

const cubeResult = arr.map(cube);
console.logg(cubeResult);

const evenodd = arr.map(isEvenOrOdd);
console.log(evenodd);

/**
 * WHEN TO USE MAP ?
 * in any situation when we have to do an operation on every element of the array
 * and store the result of each operation
 * MAP can be a good option
 * 
 * for example:
 * array of product objects.
 * 
 */

const newArr = [9,8,7,6,5];

/**
 * if the function that we are passing in map takes two arguments
 * then first argument will be accessign the actual value
 * second argument will be accessing index of that value
 *
 */
function print(element, idx) {
    return `Element at index ${idx} is ${element}`;
}
/**
 * here map is looping over every element
 * and then passing element, index in the function print
 */

const result2 = newArr.map(print)
console.log(result2);


function customMapper(arr, func) {
    let result = [];
    for(let i = 0; i < arr.lenght; i++) {
        result.push(func(arr[i], i));
    }
    return result;
}

const value = customMapper(newArr, print);
console.log(value);

// arrayfunction2.js

/**
 * filter function
 * filter is also a higher order function
 * filter is also loops over the array element
 * there is one special thing about filter, i.e. the argument function f which we have to pass inside
 * filter should always return a boolean , otherwise output will be converted to a boolean
 * 
 * filter loops over every element, passes that element in the argument function and ythen if the output
 * of the this function call is true , then it stores the original element in a new array otherwise
 * dosen`t add this add element to the array
 */

function oddOrEven(x) { // x = 3 --> 3%2 ==> 1 , 1 == 0 no
    return ( x % 2 == 0); //returning a boolean 
}

let arr = [1,2,3,4,5,6,7,8,9]; 

const result = arr.filter(oddOrEven);

console.log(result);

//new higher order function.js new
/**
 * reduce is a higher order function available for arrays
 * reduces also takes a function f as an argument,
 * what reduce does is, it one by one goes to every element of the array,
 * say the current element is arr[i]
 * reduce will pass this element to the function f, and accumulate the result of further function calls
 * with this particular resulty
 */

const arr = [1,2,3,4,5,6];
function sum(prevResult, currValue) {
    console.log(prevResult, currValue);
    return prevResult + currValue;// * for product (+) for sum
}

const result =  arr.reduce(sum);
console.log(result);

/**
 * first element --> 2
 * second elemenet --> 3
 * third element --> 4
 * fourth element --> 5
 * fifth element --> 6
 */

/**
 * cart --> [iphone{price: 100000, name:"iphone"}, case{price: 500, name: "baackcover"}, 
 * tempered glass{price: 300, name:"tempered glass"}]
 */
function addPrices(prevResult, currValue) {
    console.log(prevResult, currValue);
    let newPrice = prevResult.price + currValue.price;
    return {price: newPrice};
}

let cart =  [{price: 100000, name:"iphone"},{price: 500, name: "baackcover"}, 
 {price: 300, name:"tempered glass"}]
 const tottalprice = cart.reduce(addThePrice);
console.log(totalprice, totalprice.price);

//callbaks.js new

/**
 *fun --> HOF ? --> it takes fn (which is a function) as argument 
 *
 * x --> number
 * fn --> function
 */
function fun (x, fn) {
  for(let i = 0; i < x; i++) {
    console.log(i);
  }

  fn();
}

fun(10, function exec() { // callback
    console.log("i am executed also");
})

//callbacksdemo.js

setTimeout(function exec() {
    console.log("running after sometime")
}, 4000);

//new

function fun (x, fn) {
    for(let i = 0; i < x; i++) {
      console.log(x);
    }
  
    fn(x*x);
  }
  
  fun(10, function exec(num) { 
      console.log("num");
  }); // calling fun

  //problemwithcallbacks.js new

  /**
   * 1. inversion of control
   * 2. callback hell --> readability problem
   */


 /* let arr = [1,10,1000,9,2,3,11];

  arr.sort(function cmp(a,b) {
    return a-b;
  })

  console.log(arr);*/
  function doTask(fn, x){
    //whole implimentation is done by team A

    fn(X*X); // calling my callback with sqare of x
  } // team A

  // here team b tries to use it
  doTask(function exec(num){ // due to callbacks, i am passing control of how exec should be called to doTask
    //this is inversion of control
    console.log("wow num is", num);
  },9);

  //sync.js new

  console.log("hi we are starting");

  for(let i = 0; i < 100000000; i++) {
    // some task
  }

  console.log("done");

  //async.js new

  console.log("hi");
  setTimeout(function () { console.log("time done");}, 5000);
  console.log("by");

 // Demo.js new

function timeConsumingByLoop() {
    console.log("loop starts");
    for(let i = 0; i < 100000000; i++){

    }
    console.log("loop ends");
}

function timeConsumingByRuntimeFeature0() {
    console.log("starting timer");
    setTimeout(function exec() {
        console.log("completed the timer0");
        for(let i = 0; i < 100000000; i++){
     // some task
        }
    }, 5000); // 5 sec timer
}

function timeConsumingByRuntimeFeature1() {
    console.log("starting timer");
    setTimeout(function exec() {
        console.log("completed the timer1");
    }, 0); //0 s timer
}

function timeConsumingByRuntimeFeature2() {
    console.log("starting timer");
    setTimeout(function exec() {
        console.log("completed the timer2");
    }, 200); //200 ms timer
}

 console.log("Hi");
 timeConsumingByLoop();
 timeConsumingByRuntimeFeature0();
 timeConsumingByRuntimeFeature1();
 timeConsumingByRuntimeFeature2();
 timeConsumingByLoop();
 console.log("By");

//asyncexample1.js new

console.log("Hello world");
setTimeout(function exec() {
    console.log("Timer done");
}, 0);
console.log("End");

//new
console.log("Hello world");
setTimeout(function exec() {
    console.log("Timer done");
}, 0);
for(let i = 0, i < 10000000; i++) {
    //some task //10 s
}
console.log("End");

//example new.js
console.log("Hello world");
for(let i = 0, i < 3; i++){ // i = 0,1,2,3
setTimeout(function exec() {
    console.log("Timer done");
}, 10);
}
for(let i = 0, i < 10000000; i++) {
    //some task //10 s
}
console.log("End");

//setintervalfunction.js new

x = setInterval(function () {console.log("another secondone")}, 500);
y = setInterval(function () {console.log("another one")}, 1000);

clearInterval(x);//(y) to stop the excecution  

// randomynteger.js new

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function createPromiseWithLoop() {
    return new Promise(function executor(resolve, reject) {
        for(let i = 0; i < 100000000; i++) {}
        let num = getRandomInt(10);
        if (num % 2 == 0) {
            //if the no. is even we fullfill
            resolve(num);
        } else {
            //if the no. is odd we reject
            reject(num);
        }
    });
}

x = createPromiseWithLoop();

//or 
 let x = createPromiseWithLoop();
 console.log(x);

 // new as same above
 function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function createPromiseWithTimeout() {
    return new Promise(function executor(resolve, reject) {
        setTimeout(function () {
        let num = getRandomInt(10);
        if (num % 2 == 0) {
            //if the no. is even we fullfill
          console.log("fulfilling");
          resolve (num);
          console.log("completed resolving");
          resolve(10);
          console.log("resolving again");
          return num;
        } else {
            //if the no. is odd we reject
            console.log("rejecting");
          reject (num);
          console.log("completed rejecting");
          reject(11);
          console.log("rejecting again");
          return num;
        }
    }, 10000);
});
}
//or 
 let y = createPromiseWithTimeout();
 console.log(y);

 //consuming-promise.js new

 setTimeout(function exec() {
    console.log("done");
 }, 3000);

 //new 
 function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function createPromiseWithTimeout() {
    return new Promise(function executor(resolve, reject) {
        console.log("Entering the executor callback in the promise constructor");
        setTimeout(function () {
        let num = getRandomInt(10);
        if (num % 2 == 0) {
            //if the no. is even we fullfill
         
          resolve (num);
         
        } else {
            //if the no. is odd we reject
            
          reject (num);
          
        }
    }, 10000);
    console.log("Exitting the executor callback in the promise constructor");

});
}

console.log("starting...");
const p = createPromiseWithTimeout();
console.log("we are now waiting for the promise to complete");
console.log("currently my promise object is like ...", p);
console.log("Going to register my 1st set of handlers");
p
.then(
    function fullfillHandler1(value) {
        console.log("inside fulfill handler 1 with value", value);
        console.log("promise after fullfillment is", p);
        setTimeout(function t() {console.log("Ended 0s timer")}, 0);
        console.log("exitting the full handler 1");
    },
    function rejectionHandler1(value) {
         console.log("inside rejection handler 1 with value", value);
         console.log("promise after rejection is", p);
         setTimeout(function t() {console.log("Ended 0s timer")}, 0);
         console.log("exitting the reject handler 1");
        }
        
);
console.log("Going to register my 2nd set of handlers");

p
.then(
    function fullfillHandler(value) {
        console.log("inside fulfill handler 2 with value", value);
        console.log("promise after fullfillment is", p);
    },
    function rejectionHandler(value) {
         console.log("inside rejection handler 2  with value", value);
         console.log("promise after rejection is", p);
        }
        
);
console.log("Ending...");
setTimeout(function (){console.log("Global timer of 0s")}, 0);

// createpromise cromewindowinspect.js new
function createPromise(){
    return new Promise(function execute(resolve, reject){
        let x = setTimeout(function giveValue(){
            return 2;
        }, 3000);
        if(x%2===0){
            resolve("successfull");
        } else {
            resolve("rejected");
        }
    })
}
y = createPromise();
//new js
function createPromise() {
    return new Promise(function exec(resolvee, reject){
        console.log("resolving the promise");
        resolve("done");
    });
}

setTimeout(function process() {
    console.log("Timer completed");
}, 0);

let p = createPromise();
p.then(function fullfillHandler1(value) {
    console.log("we fulfilled1 with a value", value);
}, function rejectionHandler(){});
p.then(function fullfillHandler2(value) {
    console.log("we fulfilled2 with a value", value);
}, function rejectionHandler(){});
p.then(function fullfillHandler3(value) {
    console.log("we fulfilled3 with a value", value);
}, function rejectionHandler(){});

for(let i = 0; i < 100000000; i++) {}

console.log("ending");

//new fetchdata.js
function fetchData(url) {
    return new Promise(function (resolve, reject){
        console.log("started downloading from", url);
        setTimeout(function processDownloading() {
            let data = "dummy data";
            console.log("download completed");
            resolve(data);
        }, 7000);
    });
}
console.log("start");
let promiseObj = fetchData("skfhjhefhio");
promiseObj.then(function A(value) {
    console.log("value is", value);
})
console.log("end");

// same as above but in between insert console.log
//resolve(data);
//console.log("download completed");
//}, 7000);


//new demo.js
setTimeout(function timer1() {
    console.log("timer 1 done");
}, 0);

for(let i = 0; i < 100000000; i++) {
    // something
  }
/*function f() {
    return new Promise(function exec(res, rej) {
        result("sanket's promise");
    })
}*/
let x = promise.resolve("sanket's promise");
x.then(function processPromise(value) {
    console.log("whose promise ?", value);
});

setTimeout(function timer2() {
    console.log("timer 2 done");
}, 0);

console.log("End of the file");

//callbackdownloaderdummy.js new

function download(url, cb) {
    console.log("started downloading from url", url);
    setTimeout(function exec() {
        console.log("completed downloading after 5s");
        const content = "ABCDEF";
       // cb(content);
        //cb(content);
},5000);
}

download("www.xyz.com", function processDownload(data) {
    console.log("download data is", data);
})


//new file.js

function download(url) {
    console.log("started downloading from", url)
    return new Promise(function exec(res, rej) {
    setTimeout(function p() {
        console.log("completed downloading data in 5s");
        const content = "ABCDEF";
       res(content);
        
  }, 5000);
})
}

download("www.xyz.com")
.then(function fullfillHandler(value) {
    console.log("content downloaded is", value);
    
})
// do the same but in lower section a litle bit change
x = download("www.xyz.com")
x
.then(function fullfillHandler1(value) {
    console.log("content downloaded is1", value);
    return "new promise string";
},
function rejectionHandler1(value) {
    console.log("rejected with", value);
}
)
.then(
    function fullfillHandler2(value) {
        console.log("value from chained then promise", value);
    }
)


/*x = download("www.xyz.com")
x.then(function fullfillHandler2(value) {
    console.log("content downloaded is2", value);
});*/


    //promisechangingmdn.js example new

    promise.resolve("foo")
    .then(function p1(string) {
    return new promise((resolve, reject)==> {
        setTimeout(() ==> {
            string += "bar";//foobar
            resolve(string);
        }, 10000);
    }),
    )
    .then(function p2(string)  {
        setTimeout(()==>  {
            string += "baz";
        console.log(string);//foobarbaz
        
    }, 1);
    return string;
})
.then(function p3(string)  {
    console.log(string); //foobar
});

{
    value: "foo",
    state: fullfilled,
    onFulfilled: [p1]
    onReject: []
}
{
    value: foobar,
    state: fullfilled,
    onFulfilled: [p2]
   
}
{
    value: foorbar,
    state: fullfilled,
    onFulfilled: [p3]
    
}
//new callbacklmpl.js

function download(url, cb) {
    /**
     * download content from the given url and passed the
     * downloaded content to the given callback cb
     */
    console.log("starting to download data from", url);
    setTimeout(function down() {
        console.log("downloading completed");
        const content = "ABCDF"; // ASSUME DUMMY DOWNLOAD CONTENT
        cb(content);
    }, 4000);
}

function writefile(data, cb) {
    // writes the given data into a new file
    console.log("started writing a file with", data);
    setTimeout(function write() {
        console.log("completed writing the data in a file");
        const filename = "file.txt";
        cb(filename);
    }, 5000);
}

function upload(url, file, cb) {
    //uploads the data from a file to a given url
    console.log("started uplaoding", file,"on", url);
    setTimeout(function up() {
        console.log("upload completed");
        const responce = "SUCCESS";
        cb(responce);
    }, 2000);
}

download("www.xyz.com", function processDownload(content) {
    console.log("we are now going to process the download data");
    writefile(content, function processWrite(filename) {
        console.log("we have downloaded and written the file, now will upload");
        upload("www.upload.com", filename, function processUplaod(responce){
            console.log("we have uploaded with", response);
        })
    })
})

/*download("www.xyz.com", function processDownload(content) {
    console.log("Downloaded data is", content);
})*/

/*writefile("abcdef", function process(name) {
    console.log("file wrtten with name", name);
})*/


// new promiseimpl.js

function download(url) {
    return new promise(function exec(resolve, reject) {
        console.log("starting to download data from", url);
        setTimeout(function down(){
            console.log("downloading completed");
            const content = "ABCDEF"; // assume dummy download content
            resolve(content);
        }, 6000);
    })
}

function writefile(dat) {
    return new promise(function exec(resolve, reject) {
        console.log("started writting a file with", data);
        setTimeout(function write() {
            console.log("completed writing the data in a file");
            const filename = "file.txt";
          resolve(filename);
        }, 5000);
    
    })
}

function uploadData(file, url) {
    return new promise(function exec(resolve, reject){
        console.log("started uplaoding", file,"on", url);
        setTimeout(function up() {
            console.log("upload completed");
            const responce = "SUCCESS";
            resolve(responce);
        }, 2000);
    })

}

download("www.xyz.com")
.then(function processDownload(value){
    console.log("downloading done with following value", value);
    return writefile(value);
})
.then(function processWrite(value){
    console.log("data written in the file with name", value);
    return uploadData(value, "www.upload.com");
})
.then(function processUplaod(value) {
    console.log("we have uploaded with", value);
})

// new js file
function process() {
    let i = 0;
    function innerProcess() {
        i += 1;
        return i;
    }
    return innerProcess; // we are not calling the function, we are just returning
}

let res = process();

console.log(res);

console.log("first time calling res", res());
console.log("second time calling res", res());
console.log("third time calling res", res());

// clousures demo.js

setTimeout(func(){
    let i = 0;
    console.log(i);
}, 2000);

//new file for same
function DO(task) {
    setTimeout(functionexec(){
        console.log(task);
    }, 2000);
}

DO();
console.log("end");

// iterators self demo.js
function fetchNextElement(array) {
    let idx = 0;
    function next() {
        if(idx == array.lenght) {
            return {value: undefined, done: true};
        }
        const nextElement = array(idx);
        idx++;
        return {value:nextElement, done: false};
    }
    return {next};
}

//somewhere we consume it

const automaticFetcher = fetchNextElement(99,11,12,13,0,1,2,3,4); // inside automatic fetcher variable we can store next function
console.log(automaticFetcher.next());
console.log(automaticFetcher.next());
console.log(automaticFetcher.next());
console.log(automaticFetcher.next());
console.log(automaticFetcher.next());

//generator demo.js

function* fetchNextElement() {
    console.log("i am inside the generator function");
    yield 1;
    yield 2;
    console.log("somwhere in the middle");
    yield 3;
    return 10;
    yield 4;
}

const iter = fetchNextElement();

console.log("1st" ,iter.next());
console.log("2nd" ,iter.next());// repeat no. of times

// generator advance demo.js new
function* fetchNextElement() {
    console.log("inside generator");
    const x = 10;
    yield 11;
    console.log("entering after a yield");
    const y = x + (yield 30);
    console.log("value of y is", y);
}

console.log("start");
const iter = fetchNextElement();
console.log("called generator")
console.log("first", iter.next());
console.log("second", iter.next());
console.log("third", iter.next());

//promiseall.js new
function download(url, time) {
    return new promise(function exec(resolve, reject) {
        console.log("starting to download data from", url);
        setTimeout(function down(){
            console.log("downloading completed");
            const content = "ABCDEF"; // assume dummy download content
            resolve(content);
        }, time > 3000);{
            reject("err")
        
    } else 
    resolve(content);
}, time);
};


const p1 = download("www.abc1.com", 5000);
const p2 = download("www.abc1.com", 1000);
const p3 = download("www.abc1.com",2000);
promise.all([p1,p2,p3]).then(function fullfillHandler(value){
    console.log(values);
})


// piller 6
// class demo new js
class product {
    name; // no need of let var const
    price;
    discount;
    desc;

    display() {
        // no need of function keyword
    }

    buy() {

    }

    wishlist() {

    }
}

// syntex to create an object
const p = new product();

// objects new
let iphone = {
    name: "iphone 13 pro",
    price: 100000,
    description: "the new apple iphone 13 pro",
    rating: 4.8,

    display() {
        console.log("first display", this);
    }
}

let macbook = {
    name: "macbook M2",
    price: 125000,
    description: "the new apple macbook m2",
    rating: 4.9,

    display() {
        console.log("second display", this);
    }
}

iphone.name();
//console.log(iphone, macbook);
console.log(this);

//new file js
let products = {
    arr : [
        {
            name: "iphone",
            price: 100000,
            description: "the new apple iphone 13 pro",
            rating: 4.8,
            getCategory:() ==> {
                console.log(this.category);
            }
        },
        {
            name: "macbook M2",
            price: 125000,
            description: "the new apple macbook m2",
            rating: 4.9, 
            getCategory: () ==> {
                console.log(this.category);
            }

        }
    ],
    category: "Electronics",
    getProducts: function() {
        return this.arr;

    }
}


products.getProducts[0].getCategory();

// new demofile3
const iphone = {
    name: "iphone",
    price: 100000,
    rating: 4.8,
    display: function () {

        let iphoneRed = {
            name: "iphone red",
            price: 110000,
            print: () ==> {
                console.log(this);
            }
        }
        iphoneRed.print();
    }
}

iphone.display();

// new keywords demo.js new

class Product {
    name;
    price;
    description;

    constructor(n, p, d) {
        this.name = n;
        this.price = p;
        this.description = d;
        //return "10"; //  primitive --> no effect
        //return {};/{x : 10};
       // return this; // if you dont return anything, it is equal to saying return this;
    }
     set name(n) {
        if(typeof(n) ==/ 'string') {
            console.log("invalid name passed");
            return;
        }
        this.#name = n;
     }

     setPrice(p) {
        if(p < 0) return;
        this.#price = p;
     }

     get name() {
        return this.#name;
     }

    display() {
        // print the product
        console.log(this.#name, this.#price, this.description);
    }
}

const p = new product("bag", 100, "a cool bag");
//console.log(p);

//functionconstructor.js new
function products(n, p, d) {
    this.name = n;
    this.price = p;
    thid.discription = d;
   
}
const p = new product("bag", 100, "cool new bag");

console.log(p);

//new in chrome.js
class category {
    constructor(c) {
        this.cateroryname = c;
    }
}

class product extends category {
    constructor(n,c ) {
        super(c);
        this.name = n;
    }
}

//demo.js

var obj = {
    name: "sanket",
    company: "google",
    display: () ==> {
        console.log(this.name, "works in", this.company);
    }
}

var obj1 = {
    name: "jd",
    company: "Microsoft",
    display: () ==> {
        setTimeout(() ==> {
            console.log(this.name, "works in", this.company);
        }, 3000);
    }
}

var obj2 = {
    name: "sarthak",
    company: "phonepe",
    display: function () {
        setTimeout(() ==> {
            console.log(this.name, "works in", this.company);
        }, 3000);
    }
}

obj.display();
console.log(this);

//binddemo.js new
const player = {
    firstname: 'virat',
    lastname: 'kohli',
    numberToBat: 3,
    canBowl: false,
    getDetails: function(){
        console.log(this.firstname, this.lastname, "comes at no.", this.numberToBat);
    }
}

/*const obj = function(){
    console.log(this.getDetails());
}

let x = obj.bind(player1);

x();*/

const obj = function(x,y) {
    console.log(x+y);
    this.getDetails();
}

obj.call(player1, 2, 45);

///objectdemo.js new

let arr = [1,2,3,4];

console.log(typeof arr);

let obj = {
    x: 10,
    y: 20
};
Object.freeze(obj);// neither we can add a new property not update old one
obj.x = 20;

console.log(obj);

let obj1 = {
    x: 10,
    y: 20
}
Object.seal(obj1); // we cannot add new property but we can update old ones
obj1.x = 30;
obj1.z =99;

console.log(obj1);

const obj2 = {
    x: 1, y: 2
}

obj2.x = 10;
obj2.z = 99;
obj2 = 99;
console.log(obj2);

// inheritance.js new

function Product(n,p) {
    this.nmae = n;
    this.price = p;

    category.call(this, c);
}

function Category(c) {
    this.CategoryName = c;
    this.getCategoryName = function() {
        console.log(this.cateroryname);
    }
}

product.prototype = object.create(category.prototype);

let p = new product("iphone", 100000, "Electronics");
p.getCategoryName();