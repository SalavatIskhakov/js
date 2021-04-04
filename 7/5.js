'use strict'

let arr1
let arr2

arr1 = [1, 2, 3, 4, 5, 6]

arr2 = []


for (let i = 0, j = 0; i < arr1.length; i++) {
    if (arr1[i] % 2 === 0) {
        arr2[j] = arr1[i]
        j++
    }
}
console.log(JSON.stringify(arr1, null, 4))
console.log(JSON.stringify(arr2, null, 4))
