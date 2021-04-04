'use strict'

let str
let flag
let i

str = 'Yo all! I wont to say you Yo cause I always say Yo'
flag = str.indexOf('Yo')
for (i = 2; flag != -1; i++) {
    console.log(flag)
    flag = str.indexOf('Yo', i)
}