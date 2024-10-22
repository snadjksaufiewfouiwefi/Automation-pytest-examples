function isEvenOrOdd(num) {
    if(num % 2 == 0) {
        return "even";
    }
    else {
        return "odd";
    }
}


for(let i = 1; i <= 25; i++) {
    console.log(i, "is", isEvenOrOdd(i));
}