x = setInterval(function () {console.log("another secondone")}, 1000);
y = setInterval(function () {console.log("another one")}, 500);

clearInterval(x);
clearInterval(y);