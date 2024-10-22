/*function isPrime(x) {
    for(let i = 2; i <= x-1; i += 1) {
        if(x % i == 0) {
            // we found a number in range [2, x-1] which divide x
            // hence x is non prime
            return false;
        }
    }
    /* the loop completed but we didn,t return false , that means 
    no number in the range [2, x-1] can divide x hence
    x is prime 
    return true;
}

console.log(isPrime(11));*/
/*function solve(a, b, c) {
    //ax^2 + bx + c
    let sqrtvalue = Math.sqrt(b*b - 4*a*c);
    let root1 = (-b + sqrtvalue) / (2*a);
    let root2 = (-b -sqrtvalue) / (2*a);
    console.log(root1, root2);

}

solve(2, 5, 3)*/
/*let x = [];
 let y = [1,2,3,false,"abc","def",true, null, undefined];
 var z = ["abc", "def", "ghi"];
 const arr = [1,2,3,4,5,6,7,8,9,10];

 console.log(x);
 console.log(y);
 console.log(z);
 console.log(arr);

  let num = [551,238,365,221,6,8,4]
  num.sort()
  console.log(num)

  let compare = (a,b) => {
    return b-a
  }*/
  /*let num = [551,22,3,14,5,6,8,229]
 // num.sort(compare)
 num.slice(2)
  console.log(num)*/
/*alert("Enter the value of a1!")
let a1 =  prompt("Enter a here", "578")
a = Number.parseInt(a)
alert("you Entered a of type" + (typeof a))
let write = confirm("Do you want to write it to the page")
if (write) {
    document.write(a)
}
else {
    document.write("please allow me to write")
}*/
/*console.time("for loop")
for(let i = 0; i < 5; i ++) {
    console.log(233)
}
console.timeEnd("for loop")
console.time("while loop")*/


// new program

/*let age = prompt("Enter your age");
age = Number.parseInt(age);

const candrive = (age) => {
    return age >= 18 ? true : false;
};

if (candrive(age)) {
    alert("Yes, you can drive");
} else {
    alert("You cannot drive");
}*/

/*let user = prompt("enter S, W or G");
let cpu1 = math.floor(math.random()*3);

let cpu = ["S", "W", "G"] [cpu1]
const match = (cpu, user) => {
    if (cpu === user)
    return "draw"
} 
  else if (cpu === "S" && user === "W"){
    return "cpu"
} else if (cpu === "G" && user === "W") {
    return "user"
} else if (cpu === "S" && user === "G") {
    return "user"
}
match (cpu, user)
document.write('cpu:$(cpu) and user: $ {user} <br> the winner is : $ {result}')*/

/*let user = prompt("Enter S, W, or G");
let cpu1 = Math.floor(Math.random() * 3);

let cpu = ["S", "W", "G"][cpu1];
;
const match = (cpu, user) => {
    if (cpu === user) {
        return "draw";
    } else if (cpu === "S" && user === "W") {
        return "cpu";
    } else if (cpu === "G" && user === "W") {
        return "user";
    } else if (cpu === "S" && user === "G") {
        return "user";
    }
};
result = match(cpu, user);
document.write(`CPU: ${cpu} and User: ${user} <br> The winner is: ${result}`);*/

/*document.write("hello")
let a = setTimeout(function(){
    alert ("i am inside of setTimeout")
}, 5000)
let b = prompt("do you want to run the setTimeout?")
if ("n" == b) {
    clearTimeout (a)
}
console.log(a)*/


/*document.write("hello")
const sum = (a,b) => {
    console.log("yes i am running" + (a+b))
    a+b
}
setTimeout(sum, 1000,1,2)
setInterval(function(){
    alert ("setinterval")
}, 3000)*/

//event listner

let x = function(e){
    alert("hello world1!")
}
let y = function(e){
    alert("hello world2!")
}

btn.addEventListenenr('click',x)

btn.addEventListenenr('click', y)
   


let a = prompt("what is your favorite number?");

if(a == "2"){
    btn.removeEventListener('click', x)
}

// event object
let x1 = function(event) {
    console.log(event.target)
    console.log(event)
}

let y1 = function(e) {
    console.log(e)
    alert("hello world2!")
}

btn.addEventListener('click', x)

// data fetch
const fetchContent =  async (url) => {
    con = await fetch(url);
    let a = await con.json()
    return a;
}

setInterval(async function(){
    let url = "https://jsonplaceholder.typicode.com/todos/1"
    console.log(await fetchContent(url))
}, 3000)

//syncronous programming examples
 let a1 = prompt("what is your name?");
 let b1 = prompt("what is your age?");
 let c = prompt("what is your favorite color?");
 console.log(a+ "is" +b + "years old and has" + c + "favorite color");

 // asynchronous programming
 console.log("start")
 setTimeout(function(){
    console.log("hey i am good");
 }, 3000
 )
 console.log("End")

 //callbcks
 function loadscript(src, callback) {
    var script = documnet.createElement("script");
    script.src = src;
    script.onload = function() {
        console.log("loaded script with SRC:" + src)
        callback(null, src); 
    }
    script.onerror = function() {
        console.log("error loading script with src:" + src);
        callback(new Error("src got some error"))
    }
    document.body.appendChild(script);
 }

function hello(error, src){
    if(error) {
        console.log(error)
        return;
    }
    alert('hello world!' + src);
}

function goodmorning(error, src){
    if(error) {
        console.log(error)
        sendEmergencyMessageToCeo();
        return;
    }
    alert('goodmorning!' + src);
}

loadscript("paste some script from bootstrap", goodmorning )

//promises 

let promise = new Promise((resolve, reject) => {
    alert("hello")
    resolve(56)
})
console.log("hello one")
setTimeout(function(){
    console.log("hello two in 2 seconds")
}, 2000)

console.log("my name is"+ "hello three")
console.log(promise)



// fetch google.com
//fetch data from server
//print downloading
//rest of the script

let p1 = new promise((resolve, reject)=> {
    console.log("promise is pending")
    setTimeout(()=>{
        //console.log("i am a promise and i am fulfilled")
        resolve(true)
       // reject(new Error("i am an error"))
    }, 5000)
})

let p2 = new promise((resolve, reject)=> {
    console.log("promise is pending")
    setTimeout(()=>{
        //console.log("i am a promise and i am rejected")
        //resolve(true)
        reject(new Error("i am an error"))
    }, 5000)
})
//console.log(p1,p2)
// to get the value
p1.then((value) => {
    console.log(value)
})
// to catch the errors
p2.catch((error)=>{
   console.log("some error occurred in p2") 
})

p2.then((value)=>{
    console.log(value)
},(error)=> {
    console.log(error)
})

// new promise with then
let s1 = new promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("resolve after 2 seconds")
        resolve(56)
    },2000)
}) 

s1.then((value)=>{
    console.log(value)
    let s2 = new promise((resolve,reject)=>{
        resolve("promise 2 ")
    })
    return s2
}).then((value)=>{
    console.log("we are done")
    return 2
}).then((value)=>{
    console.log("now wew are pakka done")
})
// loadscript
const loadscript = (src)=>{
    return new promise((resolve,reject) =>{
        let script = document.createElement("script")
        script.type = "text/javascript"
        script.src = src
        document.body.appendChild(script)
        script.onload = ()=>{
           resolve(1)
        }
        script.onerror = ()=> {reject(0)}
    })

}
let p1 = loadscript("http://localhost:3000/index.js")//or paste any bootstarp link
p1.then((value)=> {
    console.log(value)
    return loadscript("http://localhost:3000/index.js") 
}).then((value)=>{
    console.log("second script ready")
}).catch((error) => {
    console.log("we are sorry but we are having problems loading this script")
}) 

//new promise
let p1 = new promise((resolve, reject)=> {
    setTimeout(()=>{
        alert("Hey I am not resolved")
        resolve(1);
    }, 2000)
})
p1.then(()=> {
    console.log("congratulation this promise is now resolved")
})

p1.then(()=>{
    console.log("hurray")
})


//new promise API
let p1 = new promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("value 1");
    }, 1000);
})
let p2 = new promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("value 2");//reject(new error("error"));
    }, 2000);
})
let p3 = new promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("value 3");
    }, 3000);
})
/*p1.then((value)=>{
    console.log(value)
})
p2.then((value)=>{
    console.log(value)
})
p3.then((value)=>{
    console.log(value)
})*/

//let promise_all = promise.all([p1,p2,p3])
//let promise_all = promise.all_Settled([p1,p2,p3])
//let promise_all = promise.race([p1,p2,p3])//promise.any
//let promise_all = promise.resolve(6)
let promise_all = promise.reject(new Error("hey"))
promise_all.then((value) =>{
    console.log(value)
})

//async function
async function harry () {
let delhiWeather = new promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("27 Deg")
    },2000)
    
})
let bangloreWeather = new promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("21 Deg")
    },5000)
    
})
   /*/ return 5 
}
harry().then((x)=>{
    alert(x)
})*/

//delhiWeather.then(alert)
//bangloreWeather.then(alert)
console.log("fetching delhi weather please wait...")
let delhiW = await delhiWeather
console.log("fetched delhi weather:" + delhiW)
console.log("fetching banglore weather please wait...")
let bangloreW = await bangloreWeather
console.log("fetched banglore weather:" + bangloreW)
return[delhiW,bangloreW]
}

const cherry = async () => {
    console.log("hey i am cherry and i am not waiting")
}

const main = async () => {
console.log("welcome to weather control room")
let a = await harry()
let b = await cherry()

}
main1()

// error handling : try and catch
setTimeout(()=>{
    console.log("hacking wifi ... please wait...")
},1000)

try{
    console.log(rahul)
}
catch(error){
    console.log(error)// balle balle
}
console.log(rahul)

setTimeout(()=>{
    console.log("fetching username and password ... please wait...")
},2000)

setTimeout(()=>{
    console.log("hacking rahuls facebook id ... please wait...")
},3000)

setTimeout(()=>{
    console.log("username and password of rahul(+919536845263) fetched ... please wait...")
},4000)

// error object & custom error

try {
    let age = prompt('enter your age') 
    age = Number.parseInt(age)
    if(age>150) {

        throw new ReferenceError("this is probably not true")
    }
} catch (error) {
    console.log(error.name)
    console.log(error.message)
    console.log(error.stack)
}

console.log("the script is still running")

// the finally clause
const f () => {

    try{
        let a = 0 
       // console.log(program)
        console.log("program ran successfully")
        return
    }
    
    catch(err){
        console.log('this is an error')
        console.log(p)
    }
    
    finally {
        console.log("I am a good boy")// for final closeup / exit the loop/ closet the file
    }
}

f()
console.log("End")

// ans 1 of class 63
constScript = async (src) => {
    return new promise((resolve, reject) => {
        let script = document.createElement("script")
        script.src = src
        script.onload = () => {
            resolve(src + "done success")
        } 
        document.head.append(script)
    })
}
// problem one 
/*let a = loadscript("paste the script link")
a.then((value) => {
    console.log(value)
})
// problem two
/*const main2 = async () => {
    console.log(new Date().getMilliseconds())
    let a = await loadscript(" pate the script link from the bootstrap")
    console.log(a)
    console.log(new Date().getMilliseconds())
}
main2()*/

// problem 3
let p = () => {

return new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(new Error("please this is not acceptable"))
    }, 3000)
    
})
}

let a =  async () => {
    try{
        let c = await p()
        console.log(c)
    }

    
    catch(err) {
        console.log("this error has been handled")
    }
}
a()
// digital clock

setInterval(()=>{
    let Date = new Date();
    let option = {
        weekday: "long", year: "numeric",month: "short",
        day: "numeric", hour: "2-digit", minute: "2-digit"
    };
    let d = date.toLocaleTimeString("en-us", option); 
    TimeRanges.innerhtml = d
}, 1000)

//fetch API
let p =  fetch("https://goweather.herokuapp.com/weather/ny")
p.then((value1)=>{
    console.log(value1.status)//responce in place of value
    console.log(value1.ok)
    return value1.json()
}).then((value)=>{
    console.log(value2)
})
// POST request with fetch api
async createTodo () => { 
let options = {
    method: "POST",
    Headers: {
        "content-type": 'application/json'
    },
    body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
    }),
}

let p = await fetch('https://jsonplaceholder.typicode.com/posts', options)
let responce = await p.json()
return responce
}

const mainfunc = async () => {
    let todo = await createTodo()
    console.log(todo)
}
mainfunc()

// cookies in js 
console.log(document.cookies)
document.cookie = "name=sanket112233"
let key = prompt('enter your key')
let value = ("enter your value")
document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
console.log(document.cookie)
 
//local storage
let key  = prompt('enter key you want to set')
let value = prompt("enter value you want to set")

localStorage.setItem(key, value)
console.log(`the value at ${key} is ${localStorage.getItem(key)}`)

if(key == "red" || key == "blue" ) {
    localStorage.removeItem(key)
}

if(key == 0) {
    localStorage.clear()
}
// sesssion storsge 
sessionStorage.getItem("name", "sanket")
sessionStorage.setItem("name")


window.onstorage = (e) => {
      alert("changed")
      console.log(e)
}

//qusetion 1 of 71 class

let url = "https://kontests.net/api/v1/all"
let responce = fetch(url)
responce.then((v) => {
    return v.json
}).then((contests) => {
    console.log(contests)
    ihtml +=``
    for(item in contests){
             console.log(contests.item)
    }
})

cardContainer.innerhtml = "allcards"

//question 2
let n = localStorage.getItem("note")
alert("your note is" + n)

let a = prompt("Enter your note")
if (a) {

    localStorage.setItem("note", a)
}

let c = confirm("do you want to dlete your note")
if (c) {
    localStorage.removeItem("note")
    alert('note deleted successfully!')
}

// hackerman exersice
let s = [
    "initializing hack tool",
    "connecting to facebook",
    "connecting to server 1",
    "connection failed. retrying...",
    "connecting to server 2",
    "connected successfully",
    "usename iam harry",
    "trying brute force",
    "200k password tried",
    "match not found",
    "another 200k password tried",
    "match found",
    "accessing acount",
    "hack successfully",
]

const Sleep = async(seconds) => {
    return new promise((resolve, reject)=> {
        setTimeout(()=> {resolve(true)}, seconds * 1000)
        })
    }

const showhack =async(messages) => {
     await Sleep(2)
    //console.log(message)
    Text.innerhtml = text.innerhtml + message + 
}

(async()=> {
    for(let i =0; i<a.length; i++){
        await showhack(a[i])
    } 
})
// prototype object orient programming
let a4 = {
    name2: "harry",
    language: "javascript",
    run : () => {
        alert("self run")
    }
}

console.log(a)


let p4 = {
    run: () => {
        alert("run")
    }
}

p.__proto__ = {
    name: "jackie"
}

a4.__proto__= p
a.run()
console.log(a.name)

// classes and objects
class railwayform {
    constructor(){
        console.log("CONSTRUCTOR CALLE....." + givenname +""+ trainno )
        this.name = givenname
        this.trainno = trainno
    }
    submit() {
        alert(this.name + ":your form is submitted for train no.")
    }
    cancel(){
        alert(this.name + ":this form is cancelled for train no.")
    }

    fill(givenname, trainno){
        this.name = givenname
        this.trainno = trainno
    }

}

let harryform = new railwayform()
harryform.fill("harry", 145235)
let rohanform = new railwayform()
rohanform.fill("rohan", 122420)

harryform.submit()
rohanform.submit()
rohanform.cancel()

// script new 

class railwayform {
    constructor(givenname, trainno){
        console.log("CONSTRUCTOR CALLE....." + givenname +""+ trainno )
        this.name = givenname
        this.trainno = trainno
        this.address = address

    }

    preview(){
        alert(this.name + ":your form is submitted for train no."+ this.trainno + "and your address is")
    }
    submit() {
        alert(this.name + ":your form is submitted for train no."+ this.trainno)
    }
    cancel(){
        alert(this.name + ":this form is cancelled for train no."+ this.trainno)
        this.trainno = 0
    }
}

let harryform1 = new railwayform("harry", 13488," pacific ocean , antarctica - 482001")
harryform.preview()
harryform.submit()
harryform.cancel()
harryform.preview()

//inheritance and extends

class animal{
    constructor(name,color){
        this.name = name
        this.color = color
    }
    run() {
        console.log(this.name + "is running!")
    }
    shout(){
        console.log(this.name = "is Shouting!")
    }
}

class monkey extends animal {
    eatBanana() {
        console.log(this.name + "is eating banana")
    }
    hide() {
        console.log(`${this.name} is hiding`)
    }
}

let ani = new animal("bruno", "white")
let m = new monkey("chimpu", "orange")

ani.shout()
m.eatBanana()
m.hide()

// method overriding

class Employee {
    constructor(name) {
        console.log(`${name}` - "Employees constructor is here")
        this.name = name
    }
    login(){
        console.log(`Employee has logged in`);
    }

    logout(){
        console.log(`Employee has logged out`);
    }

    requestLeaves(leaves) {
        console.log(`Employee has requested ${leaves} leaves - auto approved`)
    }
}

class programmer extends Employee {
    constructor(name) {
        super(name)
        console.log(" this a newly written constructor")
       // this.name = name
    }
    //constructor(...args) { --> if there is no constructor in the child class, this is created automatically
       // super(...args)
    //}
    requestCoffee(x) {
        console.log(`Employee has requested ${x} coffees`)
    }
    requestLeaves(leaves) {
        super.requestLeaves(4)
        console.log("one extra has granted")
        //console.log(`Employee has requested ${leaves + 1} leaves(one extra)`)
    } 
}  

let e = new programmer("harry")
e.login()
e.requestLeaves(3)

// static method in js

class animal {
    constructor(name){
        this.name = animal.capitalize(name)
    }
    walk() {
        console.log("animal" + this.name + "is walking")
    }
    static capitalize(name) {
        return name.charAt(0). toUpper() + name.substr(1, name.length)
    }
}

j = new animal("jack")
j.walk()

// getters setters 
class Animal {
    constructor(name) {
        this._name  = name 
    }
    fly() {
        alert("i am flying")
    }
    get name() {
        return this._name
    }
    set name(newName) {
        this.name = newName
    }
}

class Rabbit extends Animal {
    eatCarrot() {
        console.log("Eating carrot")
    }
}

let a = new Animal("bruno")
a.fly()
console.log(a.name)
a.name = "jack"
console.log(a.name)

console.log(a instanceof Animal)
console.log(a instanceof Rabbit)
console.log(c instanceof Animal)


// practise question
 class comples{
    constructor(){
        this.real = real
        this.imaginary = this.imaginary
    }
    add(num){
        this.real = this.real + num.real
        this.imaginary = this.imaginary + num.imaginary
      
    }
 }

 let a = new complex(2,4)
 let b = new complex(6,2)
 a.add(b)
 console.log(`${a.real}+${a.imaginary}i`)

 // new question 3
 class human{
    constructor(name, favfood) {
        this.name = name
        this.favfood = favfood
    }
    walk() {
        console.log(this.name + "student is walking")
    }
 }

 class student extends human {
    walk (){
        console.log(this.name + "student is walking")
    }
 }

 let o = new student("harry", "bhindi")
 o.walk()


 console.log(o instanceof human)

 // new IIFE
let a = () => {
 return new promise((resolve,reject)=> {
  setTimeout(()=>{
    resolve(456)
  }, 4000)

 })
}

(async()=> {
    let b = await a()
    console.log(b)
    let c = await a()
    console.log(c)
    let d = await a()
    console.log(d)
})()

//destructuring
let arr = [3,5,6,7,8]
let [a,b...rest] = arr
//no need to do this
// let a = arr[0]
//let b = arr[1]
console.log(a,b,c, rest)

let {a,b} = {a:1 , b:5}
console.log(a,b)

//use in react
let obj2 = {
    name: "harry",
    company: "company xyz",
    address: "xyz"
}
console.log({...obj2, name: "john"})

//class password

class password{
    constructor(){
        console.log("welcome to password generator")
    }
    generatePassword(len) {
        let chars = "abcd......up to z"
        let number = "1234567890"
        let special = "!@#$%^&*"
        if(len<3) {
            console.log("your password should be atleast 3 characters long")
        }
        else{
        let i = 0
        while(i<len){
            this.pass += chars[Math.floor(math.random()*chars.length)]
            this.pass += number[Math.floor(math.random()*number.length)]
            this.pass += special[Math.floor(math.random()*special.length)]
            i+=3
        }
        this.pass = this.pass.substr(0, len)
         return this.pass
        }
    }
}
let p = new password()
console.log(p.generalPassword(7))

// exercise - the html audioelement interface can be used to play audio in the browser
 function play() {
    var audio = new Audio('paste the audio clip from bootstarp')
    audio.play();
 }
 setTimeout(() => {
    play()
 }, 2000)

 //modules in js

 const hello = () => {
    console.log("hello world")
 }

 modules.exports = hello;
 // to attche this file to module

 const hello = require ("./file name ")
 hello() 

 // regular expression in java script
 const regrex = /very/g// globally replace
 const text = "harry is a very good boy"
 console.log(text.replace("very", "VERY"))

 // event loop
 setTimeout(function timer(){
    console.log('you clicked the button');

 },2000);

 console.log("hi!");

 setTimeout(function timeout(){
    console.log("click the button!");

 }, 5000);

 console.log("welcome to loupe");
 

 //PDF MERGER WEBAPP using javascript 
  



