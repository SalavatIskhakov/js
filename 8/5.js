'use strict'

function filter(arr, cb) {
    let arrNew = []
    for(let i = 0, j = 0; i < arr.length; i += 1) {
        if (cb(arr[i])) {
            arrNew[j] = arr[i]
            j += 1
        }
    }
    return (arrNew)
}

let arr = [1, -1, 2, -2, 3];

function myFun(num) {
    return num > 0;
}

console.log(filter(arr, myFun))
