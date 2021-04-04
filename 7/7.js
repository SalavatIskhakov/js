'use strict'

let arr1
let arr2

arr1 = [1, 2, 3, 4, 5, 6, 7, 8]
arr2 = []

function arrClean (arr1) {
    let arr
    arr = arr1.slice([0], [arr1.length])
    for (let i = 0, j = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            arr2[j] = arr[i]
            delete arr[i]
            j++
        }
    }

}
arrClean(arr1)
console.log(JSON.stringify(arr1, null, 4))
console.log(JSON.stringify(arr2, null, 4))
