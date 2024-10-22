function download(url,cb) {
  console.log("started downloading from url", url);
  setTimeout(function exec() {
    console.log("completed downloading after 5s");
    const content = "ABCDEF";
    cb(content);
  },5000);  
}

download("www.xyz.com", function processDownload(data) {
    console.log("downloaded data is", data);
})