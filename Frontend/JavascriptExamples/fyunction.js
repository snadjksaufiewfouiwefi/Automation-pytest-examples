function isEven(num) {
    if(num % 2 == 0) {
        return true;
    }
    else{
        return false;
    }
}

for(let i = 1; i <= 20; i++) {
    let result = isEven(i);
    if(result == true) {
        console.log(i, "even");
    } else {
        console.log(i , "odd");
    }
}

//another way 
let x = 10;
let y = 20;
let z = 81;

if(isEven(x)) {
    console.log("x is even");
} else {
    console.log("x is odd");
}


if(isEven(y)) {
    console.log("y is even");
} else {
    console.log("y is odd");
}


if(isEven(z)) {
    console.log("z is even");
} else {
    console.log("z is odd");
}
