let x = {name: "sanket",age: 24};
let y = {
    name:"sarthak",
    age: 28
};

console.log(x["name"]);
console.log(y.name);
console.log("key is not present", y.collage);

//are object mutable ?
y.name = "tanmay";
console.log(y);

//how to add a new property to an already created object

x.marks = 100;
x["company"] = "google";

console.log(x);

// delete a key value pair ?
//we can use delete operator along with object.key

delete x.name;
console.log(x);