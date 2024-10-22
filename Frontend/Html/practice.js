let sum = 0
let n = prompt("enter the value of n")
n = Number.parseInt(n)
for (let i = 0; i < n; i++) {
    sum += (i+1)
   // console.log((i+1), "+")
}
console.log("sum of first" + n + "natural numbers is" + sum)