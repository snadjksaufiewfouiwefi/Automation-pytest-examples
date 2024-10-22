//let str = "nitin";
//let freqMap = {}; //empty
//for(const char of str) {
   // if(freqMap[char]) {//here freqMap.char is not working
       // freqMap[char] += 1;
    //} else {
        //freqMap[char] = 1;
   // //}
//}

//console.log(freqMap);

let str ="sandeep";
let freqMap = {};//
for(const char of str) {
    if(freqMap[char]){
        freqMap[char] += 1;
    } else {
        freqMap[char] = 1;
    }
}
console.log(freqMap);