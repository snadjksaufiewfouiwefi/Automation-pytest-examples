let x = 35;
if (x%5 == 0 ) {
    console.log("divisible by 5");
 } else {
    console.log("not divisible");
 }

 function  leapyear(x) {
 if ( x%4 ==0 || x%400 == 0) {
    console.log("chears its a leap year")
 } else {
    console.log("not a leap year")
 }
}
console.log(leapyear(2008));

let a = 10, b = 12, c = 5;
 if (a < b && a < c) {
    console.log(a);
 }
 else if (b < a && b < c) {
    console.log(c);
 } else {
    console.log(c)
 }
