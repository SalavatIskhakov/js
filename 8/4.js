'use strict'

function reduce(arr, cb, val) {
    let sum

    sum = val
    for (let i = 0; arr[i]; i += 1) {
        sum = cb(sum, arr[i])
    }
return (sum)
}

let arr = [1, 2, 3, 4, 5]

function myFun(sum, current) {
    return sum + current;
}

let result = reduce(arr, myFun, 0);

console.log( result )