'use strict'

const calculator = {
    init: (a, b) => {
        a = a,
        b = b
    },
    add: () => {
        return (a + b)
    },
    diff: () => {
        return (a - b)
    },
}

let a
let b

a = 1
b = -2
calculator.init(a, b)
alert(calculator.add())
alert(calculator.diff())