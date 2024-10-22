const arr = [1,2,3,4,5,6];
function sum(prevResult,currValue) {
    console.log(prevResult, currValue);
    return prevResult + currValue;
}

const result = arr.reduce(sum);
console.log(result);

/**
 * real life use of reduce function
 */
function addPrices(prevResult, currValue) {
    console.log(prevResult, currValue);
    let newPrice =  prevResult.price + currValue.price;
    return {price: newPrice};
}
let cart = [{price:100000, name: "iphone"}, {price:500,name:"backcover"},{price:300, name: "temperedglass"}];
const totalPrice = cart.reduce(addPrices);
console.log(totalPrice, totalPrice.price);