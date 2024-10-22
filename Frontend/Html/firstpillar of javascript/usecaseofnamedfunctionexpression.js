function fun(fn) {
    console.log("welcome to fun");
    fn();
}

fun(function askingAboutFun() {
    console.log("Wow so much fun");
})