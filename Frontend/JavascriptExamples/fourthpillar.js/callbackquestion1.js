function download(url,cb) {
console.log("starting to download data from",url);
setTimeout(function down() {
    console.log("Downloading completed");
    const content = "ABCDEF";
    cb(content);
}, 4000);
}
download("www.xyz.com", function process(content) {
    console.log("downloaded data is", content);
})