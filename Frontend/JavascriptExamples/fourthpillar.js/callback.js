function fun(x , fn) {
    for(let i = 0; i < x; i++) {
        console.log(i);
    }

    fn();
}

fun(10, function exec() {
    console.log(" I am executed also");
});