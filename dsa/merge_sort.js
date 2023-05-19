// const data = [2, 5, 3, 6, 8, 9, -12, 11];
const data = ['Samia','Samib','Samic','Samie','Samid'];

function merge_sort(arr) {
    if (arr.length < 2) {
        return arr;
    }
    const middle = Math.floor(arr.length / 2);
    const leftArr = arr.slice(0, middle);
    const rightArr = arr.slice(middle);
    return merge(merge_sort(leftArr), merge_sort(rightArr));
}

function merge(leftArray, rightArray) {
    const sortedArr = [];
    while (leftArray.length && rightArray.length) {
        if (leftArray[0] <= rightArray[0]) {
            sortedArr.push(leftArray.shift());
        } else {
            sortedArr.push(rightArray.shift())
        }
    }
    return [...sortedArr, ...leftArray, ...rightArray];
}


console.log(merge_sort(data));

