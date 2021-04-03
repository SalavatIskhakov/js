'use strict'

function min1 (a) {
    return(a)
}
function min2 (a, b) {
    if (a < b) {
        return (a)
    }
    return (b)
}
function min3 (a, b, c){
    let buf
    
    if (a < b && a < c) {
        buf = a
    } else if (b < c) {
        buf = b
    } else {
        buf = c
    }
    return (buf)
}

function min4 (a, b, c, d) {
    let buf
    
    if (a < b && a < c && a < d) {
        buf = a
    } else if (b < c && b < d) {
        buf = b
    } else if (c < d) {
        buf = c
    } else {
        buf = d
    }
    return (buf)
}

function min (a, b, c, d) {
    switch (undefined) {
        case a:
            return (undefined)
        case b:
            return (min1(a))
        case c:
            return (min2(a, b))
        case d:
            return (min3(a, b, c))
        default:
            return (min4(a, b, c, d))
    }

}

console.log(`min(5) ${min(5)}`)
console.log(`min(9, 7) ${min(9, 7)}`)
console.log(`min(10, 5, 7) ${min(10, 5, 7)}`)
console.log(`min(8, 5, -1, 5) ${min(8, 5, -1, 5)}`)