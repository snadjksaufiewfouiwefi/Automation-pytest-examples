class product {
    #name;
    #price;
    //discription;


    constructor(n,p,d) {
        this.#name = n;
        this.#price = p;
        this.discription = d;
        //return "10"; // primitive -> no effect
        //return {x : 10};
        //return this;// if you dont return anything, it is equal to saying return this;
    }

    setName(n) {
        if(typeof(n) != 'string') {
            console.log("invalid name passed");
            return;
        }
        this.#name = n;
    }

    setPrice(p) {
        if(p < 0) return;
        this.#price = p;
    }

    get name() {
        return this.#name;
    }



    display() {
        // print the product
        console.log(this.#name, this.#price, this.discription);
    }
}

const p = new product("bag", 100, "a cool bag");
p.name("iphone");
console.log(p);
p.display();