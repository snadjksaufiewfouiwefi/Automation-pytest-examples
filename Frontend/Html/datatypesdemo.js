var marks = 100;
var name = "Sanket";
var age;
var company = null;
var salary = undefined;
var isStudent = false
console.log("Marks = ", marks);
console.log("Name = ", name);
console.log("age = ", age);
console.log("Company = ", company);
console.log("Salary = ", salary);
console.log("Is A Student ? = ", isStudent);
var user = {name: "sanket" ,age: 24,company: "Google",isAStudent: false};



var user2 = {
    name: "Sarthak",
    age: 24,
    company:"phonepe",
    isAStudent: false
};
//primitive
//object
console.log("Details of the user is", user);
console.log("another user is", user2);

// write  some commnt
/* this is multiline comment
some thing written*/
// arithmetic operations
let x = 10;
let y = 3;
console.log(x + y);//addition
console.log(x - y);//substraction
console.log(x * y);//multiplication
console.log(x / y);//division --> quotient
console.log(x % y);// division--> remainder
console.log(y**2);//exponent

//assigment operators
let a = 10; // here = just assignes value from rhs to lhs
a += 10;// here += is actually doing a = a + 2
console.log("value of a after addition is", a);
a %= 3;
console.log("value of a after storing remainder is", a);
a *= 5;
console.log("value  after multiplication is", a);
a -= 3;
console.log("value  after substraction is", a);
a /= 2;
console.log("value  after division is", a);
a ** 2;
console.log("value after exponent is", a);
 //relational operators
 let x = 10;
 let y = 20;
 let z = 5;
 let a = 10;
 console.log("x < z" ,x < z);
 console.log("y > z" ,y > z);
 console.log("x <= z" ,x <= z);// less than equal to
 console.log("x >= a" ,x >= a);// greater than equal to
//logical operators
 console.log(true && false);
 console.log(false || false);
 console.log(true && true);
 console.log(( 5< 10) && (6<3));
 console.log(~(3 > 4));
 console.log( !false);// logical not
 console.log( 6 && 10);
 console.log(10 || 0);
 console.log(6 || 19);
 console.log(0 || -0);

 console.log(10 / null);// undefined / null is also used this is invalid situation
 console.log( +0);
 console.log( -0);
 console.log(NaN);
 console.log(Infinity);
 console.log(-Infinity);

 console.log(10 < Infinity);
 console.log(1 == "1");// in string we write the name or text it gives false because name is indefined
 console.log(NaN === NaN);

 console.log(typeof "1");
 console.log(typeof 1);
 console.log(typeof false);
 console.log(typeof undefined);

 console.log(typeof null);

 //new
 con(10 > 5){
 console.log( "yes");
 }

 if(12) {
    console.log("printed 12");
 }
 console.log("End");

 //new
 console.log("welcome to prime video");
 let isPrimeMember = true;// also use false than else condition executed and if block is avoided
 if(isPrimeMember) {
    console.log("enjoy the content");
 } 
 else {
    console.log("please by the subscription to enjoy the content");
 } 

 // new file for hotstar type plateform
 let isUserPremium = false;// true first condition follow and if both false then either condition executed.
 let isUserVIP = true;// false than else condition follow 

 if(isUserPremium) {
    console.log("Enjoy the premium content on hotstar");
 }
 else if(isUserVIP) {
    console.log("enjoy the VIP content on hotstar, for more subscribe to premium");
}
else {
    console.log("please purchase either VIP or premium subscription to enjoy content on hotstar");

}
console.log("END");

//nested ifelse
 let isUserPrime = true;//false change and condition apply accordingly
 let isUserDiscovery = true;//false
 let isUser Accorn = true;// FALSE

 if(isUserPrime) {
    if( isUserDiscovery) {
        if(isUserAccorn) {
            console.log("Enjoy all accorn ,prime and discovery content");
        } else {
        console.log("Enjoy both prime and discovery content");
    }
} else if(isUserAccorn) {
    console.log("Enjoy both prime and accorn");
}
    else {
        console.log("Enjoy prime content");
    }
 }
 else {
    console.log("please buy a subscription plan to enjoy content");
 }
 //new odd even 
 let x = 101;
// we have to check whether x is divisible by 2 or not ?
if( x % 2 = 0) {
    console.log("even");
} else {
    console.log("odd");
}
//new
let x = 10, y = 30, z = 9,//;
 
if(x < y && y < z) {
    console.log(x);
}
else if (y < x && y < z) {
    console.log(y);
}
else {
    console.log(z);
}
//new
let a = 10;
let b = 12;
let c = 5;


if(a + b > c && a + c > b && b + c > a) {
    console.log("yes");
} else {
    console.log("no");
}
//new while loop//
let i = 1;// initializing a variable using which we will loop
while (i <= 10) { // checking condition again and again till the time it becomes false
    console.log(i);
    i += 1;
}

console.log("end of program");

// new demo while//
let i = 20;//200
while(i >= 1) {//-200
    console.log(i);
    i -= 1;
}
// program to print numbers from 1-10 using FOR loop
for(let i = 1; i <= 10; i++) {//i+=1 also be used same thing
console.log(i);
}
//FOR DEMO2
 let ans = 0;
 for(let i = 1; i <= 10; i++) {//i+=1 also be used same thing
    ans += i;
    }
    console.log(ans);
    //fordemo3.js
    for(let i = 1; i <= 25; i++) {//check if i is even ?
        if(i % 2 == 0) {
        console.log(i);
        }
    }
    //another way to write even no.
    for(let i = 2; i <= 25; i+=2) {
        console.log(i);
    }
    // new function making 
    function isEven(num) {
        if(num % 2 == 0) {
            return true;
        }
        else {
            return false;
        }
    }

    let x = 10;// here we can change odd or even no.
    letresult = isEven(x);
    if(result == true) {
        console.log("even");
}
else {
    console.log("odd");
}
// new but write the upper new function making upto first portion

for(let i = 1; i <= 20; i++) {
    let result = isEven(i);
    if(result == true) {
        console.log(i, "even")
    } else {
        console.log(i, "odd");
    }
}
// some logic
let x = 10;
let y = 20;
let z = 81;

if(isEven(x)) {
    console.log("X is even");
} else {
    console.log("X is odd");
}

if(isEven(y)) {
    console.log("Y is even");
} else {
    console.log("Y is odd");
}
if(isEven(z)) {
    console.log("Z is even");
} else {
    console.log("Z is odd");
}
// NEW CODE FOR THE SAME BUT ITS CLEAN
function isEvenOrOdd(num) {
    if(num % 2 == 0) {
       return "Even";
    }
    else {
        return "odd";
    }
}

let x = 10;
let y = 20;
let z = 81;

console.log("X is", isEvenOrOdd(x));
console.log("Y is", isEvenOrOdd(y));
console.log("Z is", isEvenOrOdd(z));
//function demo2 new file
function isEvenOrOdd(num) {
    if(num % 2 == 0) {
       return "Even";
    }
    else {
        return "odd";
    }
}
// check whether numbers are odd and which are even between 1 - 50
//console.log("1 is", isEvenOrOdd(1));
//console.log("2 is", isEvenOrOdd(2));
//console.log("3 is", isEvenOrOdd(3));
//*
//*
//console.log("50 is", isEvenOrOdd(50));
//inplace of this we write a single cosole which work as same

for(let i = 1; i <= 50; i++) {
    console.log(i, "is", isEvenOrOdd(i));
}
//console.log demo
let x = console.log("sanket");// sanket is the input value given to function
// the function actually just print the given input value on the screen
//and then retuen undefined , no matter what the input was

console.log(x);
 
//new square root
let ans = math.sqrt(100);
console.log(ans);
//function demo3 new

function welcome(name) {
    console.log("hello", name, "welcome to js");
   // return "bye bye";
}
let result = welcome("sanket");
console.log(result);
//new function 
function add(x,y) {// here x and y are parameters
    let c = x + y;
    return c;
}
let a = 10;
let b = 30;
let result = add(a,b);// here a and b are arguments
console.log(result);

/*here we are passing add (9,1) inside console.log
so first of all add(9,1) will be processed
so add(9,1) will be return 10
and then once we have the value processed as 10, then
console.log will print 10*/

console.log(add(9,1,));
// new functiondemo 4
function isPrime(x) {
    for(let i = 2; i <= x-1; i += 1) {
        if(x % i == 0) {
            // we found a number in range [2, x-1] which divide x
            // hence x is non prime
            return false;
        }
    }
    /* the loop completed but we didn,t return false , that means 
    no number in the range [2, x-1] can divide x hence
    x is prime */
    return true;
}

console.log(isPrime(11));

//new quadratic eqation

function solve(a, b, c) {
    // ax^2 + bx + c
    let sqrtvalue = math.sqrt(b*b - 4*a*c);
    let root1 = (-b + sqrtvalue) / (2*a);
    let root2 = (-b -sqrtvalue) / (2*a);
    console.log(root1, root2);

}

solve(2, 5, 3)
// new comp.js
 console.log("abc" == "abc");
 let x = "abc";// string literal
 let y = "abc";
 console.log(x == y);

 let z = string("abc");
 let a = new string("gvfyfdffdydtyrdtry");// string object
 console.log(z);


 console.log(a == z);
 console.log(a == x);
 console.log(z == x);
 console.log("abc" == newstring("abc"));
         //or( dono main se koi ek)
 console.log(typeof a);
 console.log(typeof z);
 console.log(typeof x);
 console.log(a === z);
 console.log(a === x);
 console.log(z === x);
 console.log("abc" === newstring("abc"));

 //new array demo
 let x = [];
 let y = [1,2,3,false,"abc","def",true, null, nan, undefined];
 var z = ["abc", "def", "ghi"];
 const arr = [1,2,3,4,5,6,7,8,9,10];

 console.log(x);
 console.log(y);
 console.log(z);
 console.log(arr);
 // new string demo

 let str = "microsoft";//length -9
 console.log(str[2]);//print c
 console.log(str[9]);// print undefined

 //strating index -0
 //last index - lenght-1

 // can we determine lenght of the string - str.length
 console.log(str.length);

 for(let idx = 0; idx <= str.length - 1; idx++) {
    console.log(idx, str[idx]); //we can iterate on all chars of a string by actually iterat.

 }
 // plandrome.js new file
 function checkpalindrome(num) {
    //convert the num to string
    let str = "" + num;
    let i = 0;
    let j = str.lenght - 1;
    while(i <=j) {
        if(str[i] == str[j]) {
            i++;
            j--;
        } else {
            return false;
        }
    }
    // if we completed the loop and never found a mismatch that means it is a pelindrome
    return true;
 }

 console.log(checkpalindrome(1991));//198891//15321

 // mutability and immutability
 let str = "sanket";
 str[0] = "b";
 console.log(str); // strings are immutable, hence dont update

 let arr = [9,2,1,5,6];
 arr[3]  = 1121;
 console.log(arr); // arrays are mutable, hence they get updated

 // seperate 0and1 new 
 function swap(arr, i,j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
 }
 function seperate(arr) {
    let i = 0;
    let j = arr.length - 1;
    while(i <= j) {
 // till the time i and j have not passesd each other
 if(arr[i] = 1) {//we just check if we have 1 at index i, doesnt matter what we
 swap(arr, i, j);
 j--; // include the new 1 we threw in the right window

 } else {
    i++; // expand the left window
 }
    }
 }

 let arr = [1,1,10,1,0,0,0,1,0,1];
 seperate(arr);// transform our original array
 console.log(arr);

 //forloopdemo new
 let arr = [10,11,14,120,-1];
 for(var val of arr) {
    console.log(val);
 }

 let str = "sanket";
 for(const char of str) {
    console.log(char);
 }

 //object demo.js new
 let x = {name: "sanket", age: 24};
 let y = {
    name : "sarthak",
    age: 24
    marks: 24
 };

 // access any value using a key
 // NOTE: from key u can access values but not vice-a-versa
 console.log(x["name"]);
 console.log(y.name);
 
 // are object mutable ?
 y.name = "tanmay"; // update object
 console.log(y);

 // how to add a new property to an already created object
 x.marks = 100;// if marks key is present it will update it, otherwise, it adds it
 x["comapany"] = "google";

 console.log(x);

 // delte a key value pair ?
 // we can use delete operator along with object key
 delete x.name;

 console.log(x);

 // frequency of charsin a string new
 let str = "javascript";//nitin
 let freqMap = {}; // empty
 for(const char of str) {
    if(freqMap[char]) {
    // if present update it
    freqMap[char] += 1;

 } else {
    // if not present add it 
    freqMap[char] = 1;
 }
}

 console.log(freqMap);


