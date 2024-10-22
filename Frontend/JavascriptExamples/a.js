
let age = prompt("Enter your age");
age = Number.parseInt(age);

const candrive = (age) => {
    return age >= 18 ? true : false;
};

if (candrive(age)) {
    alert("Yes, you can drive");
} else {
    alert("You cannot drive");
}

/*let car = {
    brand: "tata",
    model: "safari",
    year: 2024,
    colour: "red",
    price: 25000000
}

console.log(car.price);*/