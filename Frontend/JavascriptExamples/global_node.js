/*console.log(process.env);
console.log(module);
console.log(require);
console.log(__dirname);
console.log(global);*/
// diff_node_browser.js new file
const x = setTimeout(function exec() {
    console.log("completed timer");
},10000);

console.log(x);
clearTimeout(x);