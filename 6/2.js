'use strict'

function A() {
}

function B() {
    return a
}

let a = new A()
let b = new B()

alert (a == b)
