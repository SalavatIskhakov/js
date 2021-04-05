'use strict'

let start 
let end
let s
let m
let h
start = new Date
end = new Date
s = 0
m = 0
h = 0

while (end - start < 10.1 * 1000) {
    if ((end - start) % 100 === 0) {
        s += 1
        if (s === 60) {
            m += 1
            if (m === 60) {
                h += 1
            }
        }
        if (s === 60) {
            s = 0
        }
        console.log(`${h}:${m}:${s}`)
    }
    end = new Date;
}
alert( "Цикл занял " + (end - start) + " ms" );