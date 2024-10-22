function download(url) {
    console.log("started downloading content from", url);
    return new Promise(function exec(res, rej){
        setTimeout(function p(){
            console.log("completed downloading data in 5s");
            const content = "ABCDEF";
            res(content);
        },5000);

    })
}

x = download("www.xyz.com");
x
.then(
    function fulfillHandler1(value) {
    console.log("content downloaded is1", value);
    return "new promise string";
},
function rejectionHandler1(value) {
    console.log("rejected with", value);
}
)
.then(
    function newFullFillHandler(value) {
        console.log("value from chained then promise", value);
    }
)