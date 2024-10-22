//write a function to save that downloaded data in file and return the filename?
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

    download("www.xyz.com",function processDownload(content) {
        console.log("we are now going to process the downloaded data");
        writeFile(content, function processWrite(filename) {
            console.log("we have downloaded and written the file, now will upload");
            upload("www.upload.com",filename,function processUpload(responce) {
                console.log("we have uploaded with", responce);
            })
        })
    })

   /* writeFile("abcdef", function process(name) {
        console.log("file written with name", name);
    })*/