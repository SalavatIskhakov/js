'use strict'

let arr

arr = 'arr: 2 3 5 7 '
for (let i = 5; i < 101; i++) {
    if (i % 2 === 0 || i % 3 === 0 || i % 5 === 0 || i % 7 === 0)
        continue
    arr += i
    arr += ' '
 }
alert(arr)