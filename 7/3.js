'use strict'

function getRandom (min, max) {
    return (Math.random() * (max - min) + min)
}

let min
let max

min = 1
max = 6
console.log(getRandom(min, max))