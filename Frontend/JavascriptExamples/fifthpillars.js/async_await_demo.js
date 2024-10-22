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

    
    async function steps() {
        const downloadData = await 10;
        console.log("data downloaded is", downloadData);// check here 
        const fileWritten = await writeFile(downloadData);
        console.log("file written is", fileWritten);
        const uploadResponce = await uploadData(fileWritten, "www.drive.google.com");
        console.log("upload responce is", uploadResponce);
        return uploadResponce;
     }

     steps().then(value) = console.log("we have completed steps with", value);
     console.log("outside");
     for (let i = 0; i < 1000000000; i++) {

     }
     setTimeout(function f() {console.log("timer done")}, 4000);
     console.log("for loop done");
