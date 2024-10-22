function download(url, time) {
    return new Promise(function exec(resolve, reject) {
    console.log("starting to download data from",url);
    setTimeout(function down() {
        console.log("Downloading completed");
        const content = "ABCDEF";
        if(time > 3000) {
            reject("err")
        } else
        resolve(content);//resolve
    }, time);
    });
    }

    const p1 = download("www.xyz1.com",5000);
    const p2 = download("www.xyz2.com",1000);
    const p3 = download("www.xyz3.com",2000);

    Promise.all([p1,p2,p3]).then(function fulfillHandler(values) {
        console.log(values);
    })