// Selection Sort
function selectionSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
    
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
    return arr;
}

console.log(selectionSort([92, 15, 41, 67, 33])); 

// Bubble Sort
function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

console.log(bubbleSort([51, 83, 98, 56, 72])); 


// Merge Sort
let arr = [100, 35, 32, 40, 45, 2, 60];

const mergeSort = (arr) => {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
}


const merge = (left, right) => {
    let result = [];

    while (left.length > 0 && right.length > 0) {
        if (left[0] < right[0]) {
            result.push(left.shift())
        }
        else {
            result.push(right.shift())
        }
    }
    return [...result, ...left, ...right];
}

console.log(mergeSort(arr));



// Quick Sort
function quickSort(arr) {
    if (arr.length <= 1) return arr;

    let pivot = arr[arr.length - 1];
    let left = [];
    let right = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) left.push(arr[i]);
        else right.push(arr[i]);
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort([10, 7, 8, 9, 1, 5])); 