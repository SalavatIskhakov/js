'use strict'


let s
let m
let h

s = 0
m = 0
h = 0
const sec = setInterval(() => {
    s += 1
    console.log(`${h}:${m}:${s}`)
},100)
const min = setInterval(() => {
    m += 1
    // console.log(`${h}:${m}:${s}`)
},1000)
const hour = setInterval(() => {
    h += 1
    // console.log(`${h}:${m}:${s}`)
},10000)

setTimeout(() => {
    clearInterval(sec)
    clearInterval(min)
    clearInterval(hour)
},10.1 * 1000)