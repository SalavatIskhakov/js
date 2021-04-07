'use strict'

let arr

arr = ''
for (let i = 2, j; i < 101; i++) {
    for (j = 2; j < i; j++) {
        if (i % j === 0) {
            break
        }
    }
    if (j === i){
        arr += i
        arr += ' '
    }
 }
alert(arr)