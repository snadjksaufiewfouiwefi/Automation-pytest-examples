function download(url) {
    return new Promise(function exec(resolve, reject) {
    console.log("starting to download data from",url);
    setTimeout(function down() {
        console.log("Downloading completed");
        const content = "ABCDEF";
        resolve(content);
    }, 4000);
    });
    }

    function writeFile(data) {
        return new Promise(function exec(resolve, reject) {
        console.log("starting writing a file with", data);
        setTimeout(function write(){
            console.log("completed writing the data in a file");
            const filename = "file.txt";
            resolve(filename);
        },5000);
    });
    }

    function uploadData(file, url) {
        return new Promise(function exec(resolve, reject) {
            console.log("started uplaoding", file, "on", url);
            setTimeout(function up(){
                console.log("upload completed");
                const responce = "SUCCESS";
                resolve(responce);
            }, 2000);

        });
    }
   download("www.xyz.com")
    .then(
        function processDownload(value) {
          console.log("download done with following value", value);
          return writeFile(value);
    },
  
)
    .then(
        function processWrite(value) {
           console.log("data written in the file with name", value);
           return upLoadData(value, "www.upload.com");
    },
  
)
    .then(
        function processUpload(value) {
           console.log("we have uploaded with", value);
       
    },
    
)

.catch(function f(err) {
    console.log("catching error", err);
})

.finally(function final() {
    console.log("executing finally")
})