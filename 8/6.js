'use strict'

function shuffle(arr) {
    let buf
    for (let i = arr.length - 1, j; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      buf = arr[i]
      arr[i] = arr[j] 
      arr[j] = buf
    }
    return (arr)
  }


let arr = [1, 2, 3, 4, 5, 6]
console.log(shuffle(arr))