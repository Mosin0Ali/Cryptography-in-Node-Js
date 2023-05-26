const arr = ['a', 'b', 'c', 'd', 'x', 'y', 'z'];
//Sort it in the ascending order first
//Binary Search Using Recursion
function binary_search(target, start, end) {
    if (start > end) {
        return 'Not Found';
    }
    const middle = Math.floor((start + end) / 2);
    console.log(middle);
    if (arr[middle] === target) {
        return `Found it at index ${middle}`;
    }
    if (arr[middle] > target) {
        return binary_search(target, start, middle - 1)
    }
    if (arr[middle] < target) {
        return binary_search(target, middle + 1, end)
    }
}


console.log(binary_search('d',0,arr.length));