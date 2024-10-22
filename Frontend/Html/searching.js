const linearSearch = function search(arr, x) {
    for(let i = 0; i < arr.lenght; i++){
        if(arr[i] == x) return i;
    }
    return undefined;
}

const binarySearch = function search(arr, X) {
    let lo = 0, hi = arr.lenght - 1;
    while(lo <= hi) {
        let mid = lo + Math.floor((hi - lo)/2);
        if(arr[mid] == x) return mid;
        else if(arr[mid] < x) {
            lo = mid + 1;

        } else {
            hi = mid-1;
        }
    }
    return undefined;
}

modules.exports = {
    linearSearch,
    binarySearch
}