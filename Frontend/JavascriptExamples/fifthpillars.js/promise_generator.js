function download(url,cb) {
    console.log("starting to download data from",url);
    setTimeout(function down() {
        console.log("Downloading completed");
        const content = "ABCDEF";
        cb(content);
    }, 4000);
    }

    function writeFile(data, cb) {
        console.log("starting writing a file with", data);
        setTimeout(function write(){
            console.log("completed writing the data in a file");
            const filename = "file.txt";
            cb(filename);
        },5000);
    }

    function upload(url, file, cb) {
        console.log("started uplaoding", file, "on", url);
        setTimeout(function up(){
            console.log("upload completed");
            const responce = "SUCCESS";
            cb(responce);
        }, 2000);
    }

    function doAfterReceiving(value) {
    let future = iter.next(value);
    console.log("future is", future);
    if(future.done) return;
     future.value.then(doAfterReceiving);
    }

    function* steps() {
       const downloadData = yield download("www.xyz.com");
       console.log("data downloaded is", downloadData);// check here 
       const fileWritten = yield writeFile(downloadData);
       console.log("file written is", fileWritten);
       const uploadResponce = yield uploadData(fileWritten, "www.drive.google.com");
       console.log("upload responce is", uploadResponce);
       return uploadResponce;
    }

    const iter = steps();
    const future = iter.next();
    future.value.then(doAfterReceiving);