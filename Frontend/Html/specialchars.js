let c = "harry"
let b = 6
console.log(a+b)
// new question
console.log(typeof (a+b))

const a = {
    name: "sanket",
    section: 1,
    isprinciple : false
}
a1['friend'] = "shubham"
console.log(a1)

//problem 1 age
let age = prompt("what is your age")
if(age>10 && age< 20) {
    console.log(":your age lies between 10 and 20")
}
else {
    console.log("your age doesnt lies between 10 and 20")
}
// switch case statement
let ages = prompt("what is your age")
switch (age) {
    case '10':
        console.log("your age is 12")//give more example like this
        break
        case '13':
            console.log("your age is 13")
            break
            default:
                console.log("your age is not special")
}
// number is divisible by 2 and 3
let num = prompt ("what is the number")
num = number.parsentInt(num)
if (num % 2 ==0 && num % 3 == 0) {
    console.log("your number is divisible by 2 and 3")
}
else {
    console.log("your number is not divisible by 2 and 3")
}
// turnory operator
let aeg = 19
let s = aeg > 18 ? "you can drive" : "you cannot drive"
console.log(a)

//program to add first n natural numbers
let sum = 0
let n = prompt("enter the value of n")
n = Number.parseInt(n)
for (let i = 0; i < n; i++) {
    sum += (i+1)
   // console.log((i+1), "+")
}
console.log("sum of first" + n + "natural numbers is" + sum)
// for in or for or loop
let obj = {
    harry: 90,
    shubh: 45,
    shivivka: 56,
}
for (let a in obj) {
    console.log("marks of"+ a + "are" + obj[a])
}

for (let b of "harry") {
    console.log(b)
}

//while loop
let m = prompt("enter the value of n")
m = Number.parseInt(n)

let i = 0;
while(i<n) {
    console.log(i)
    i++;
}
// do while loop

let i = 0;
do {
    console.log(i)
    i++;
} while (i < n)

// problem 3
 let cn = 43
 let i 
 while (i != cn) {
    console.log("try again")
    i = prompt ("enter a number")
 }
 console.log("you have entered a correct number")

 // problem 4
 const mean = (a,b,c,d) => {
    return (a+b+c+d)/4
 }

 console.log(mean(4,5,6,7))

 // new for each loop
 let num = [3,5,1,2,4]

 num.forEach((element) => {
    console.log(element*element)
 })

 //array from
 let name = "sanket"
 let arr = Array.from(name)
 console.log(arr)

 // for...of
 for (let i of num) {// short form for = for(let i=0; i<num.lenght; i++){console.log(num[i])}
    console.log(i)
 }

 // for...in
 for (let i in num) {// short form for 
    console.log(num[i])
 }

 //new
 let arr = [45,23,21]
 let a = arr.map((value, index, array) => {
    console.log(value, index, array)
    return value + 1
 })
 console.log(a)
 
 //array filter method
 let arr2 = [45,32,6,5,9]
let a2 = arr2.filter((a)=>{
    return a<10
})
console.log(a2)

// array reduce method
let arr3 = [1,2,3,4,5,6]
const reduce_func = (h1,h2) => {
    return h1 + h2

}
let newarr3 = arr3.reduce(reduce_func)

console.log(newarr3)

// alert new 
alert("Enter the value of a!")
let a1 =  prompt("Enter a here", "578")
a = Number.parseInt(a)
alert("you Entered a of type" + (typeof a))
let write = confirm("Do you want to write it to the page")
if (write) {
    document.write(a)
}
else {
    document.write("please allow me to write")
}
// new DOM & BOM
Window.console.LOG(Window)
console.log(document)//document.body
document.body.style.background = "red"//change the css property not recommended

//bom
