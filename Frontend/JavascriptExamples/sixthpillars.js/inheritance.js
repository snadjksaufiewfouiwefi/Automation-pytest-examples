function product(n,p,c) {
    this.name = n;
    this.price = p;

    Category.call(this, c);
}

function Category(c) {
    this.categoryName = c;
    this.getCategoryName = function () {
        console.log(this.categoryName);
    }
}

product.prototype = object.create(Category.prototype);

let p = new product("Iphone", 100000, "Electronics");
p.getCategoryName();
