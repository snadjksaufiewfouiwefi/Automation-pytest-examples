/*let obj = {
    toString() {
        //by default gives [object object]
        return "98";
    }

    valueOf() {
        // by default it returns the same object
        return "sanket";
    }
};*/

let obj1 = {};
console.log(10 - obj1);// obj.valueof -> object,tostring -> [object object]


let obj2 = {x:9, y:8};
console.log(100 - obj2);

let obj3 = {x:7, valueOf() {return 99}};
console.log(100 - obj3);