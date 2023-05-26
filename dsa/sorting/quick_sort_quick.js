
function quick_sort(arr) {

    if (arr.length <= 1) {
        return arr;
    }
    const pivotIndex = Math.floor(Math.random() * arr.length);
    const pivot = arr[pivotIndex];
    let leftArray = [];
    let rightArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (i === pivotIndex) {
            continue;
        }
        if (arr[i] < pivot) {
            leftArray.push(arr[i]);
        } else {
            rightArray.push(arr[i]);
        }
    }
    return [...quick_sort(leftArray), pivot, ...quick_sort(rightArray)];
}

const myarray = [-6, 20, 8, -2, 4];

console.log(quick_sort(myarray));