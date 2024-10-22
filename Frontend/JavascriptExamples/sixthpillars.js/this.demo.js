let iphone = {
    name : "iphone 13 pro",
    price: 100000,
    description: "the new apple iphone 13 pro.",
    rating: 4.8,


    display()  {
        console.log("first display" ,this);
    }
}

let macbook = {
    name: "macbook",
    price: 125000,
    description: "the new apple macbook M2.",
    rating: 4.9,

    display() {
        console.log("second display" ,this);
    }
}

macbook.display();
console.log(this);

let products = {
    arr: [
        {
            name : "iphone 13 pro",
            price: 100000,
            description: "the new apple iphone 13 pro.",
            rating: 4.8, 
            getCategory: function print() {console.log(this.category);} 
        },
        {
            name: "macbook M2",
            price: 125000,
            description: "the new apple macbook M2.",
            rating: 4.9,
            getCategory: function print() {console.log(this.category);}  
        }
    ],
    category: "Electronics"
}

products.arr[0].getCategory();