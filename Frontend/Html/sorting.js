function insertionsort(arr) {
    for(let i = 1; i < arr.length; i++) {
        let currElement = arr[i];
        let j = i-1;
        while (j>= 0 && arr[j] > currElement) {
            arr[j+1] = arr[j]; // shifting the element to the  right index
            j--;
        }
        arr[j+1] = currElement;
    }
}

modules.exports.insertionsort = insertionsort;
modules.exports.bubbleSort = bubbleSort;
modules.exports.selectSort = selectSort;