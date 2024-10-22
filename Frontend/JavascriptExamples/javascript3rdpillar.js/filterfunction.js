function oddOrEven(x) {
    return ( x% 2 ==0);
}

let arr = [1,2,3,4,5,6,7,8,9];
const result = arr.filter(oddOrEven);
console.log(result);