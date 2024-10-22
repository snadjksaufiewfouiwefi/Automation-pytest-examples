console.log("hello world");
console.log("hello world1");
console.log("hello world2");

function getRandomColor(){
    let val1 = math.ceil(0 + math.rendom() * 255);
    let val2 = math.ceil(0 + math.rendom() * 255);
    let val3 = math.ceil(0 + math.rendom() * 255);
    return`rgb(${val1}, ${val2}, ${val3})`

}
// let a = setInterval(() => {
//     document,querySelector(".childContainer").style.background = getRandomColor
// },1000);
// console.log(a)

let a = setTimeout(() => {
    document.querySelector(".childContainer").style.background = getRandomColor
},1000);
console.log(a)