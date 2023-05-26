const array = [64, 25, 12, 22, 11];
/**
 * First Pass: Traverse the array and find the smallest element in the array and position it in first index
 * Second Pass: Traverse the rest of array again and find the next smallest element and position it and second index
 * Time complexity depends on the size of the array  
 */

function selection_sort(arr, n) {
    var i, j, min_index;

    for (i = 0; i < n - 1; i++) {
        var min_index = i;
        for (j = i + 1; j < n; j++) {
            if (arr[j] < arr[min_index]) {
                min_index = j;
            }
        }
        swap(arr, min_index, i);
    }
}


function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}


selection_sort(array, array.length);

console.log(array);