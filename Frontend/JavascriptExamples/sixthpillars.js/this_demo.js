const iphone  = {
    nmae : "iphone",
    price: 100000,
    rating: 4.8,
    display: () => {// put function before ()and remove the arrow function

        let iphoneRed = {
            name : "iphone red",
            price : 110000,
            print: () => {
                console.log(this);
            }
        }
        iphoneRed.print();
    }
}
iphone.display();
