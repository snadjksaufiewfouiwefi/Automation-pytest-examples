Array.prototype.customAt = function (index) {
    if (index >= this.length || index < 0) return;
    return this[index];
}

const a = [1,2,3,4,5,6];
a.customAt(3);

// impliment a polyfill for array's map functions
Array.prototype.customMap = function (cb) {
    let lrn = this.length;
    let result = Array(len);

    for(let i = 0; i < len; i++) {
        result[i] = cb(this[i], i);
    }
    return result;
}
const b = [0,1,2,3];
b.customMap((el,idx) => {
    return el*el;
})