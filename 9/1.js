'use strict'

function bind(cb, context, ...args) {
    return (...otherArgs) => {
        return cb.apply(context, [...args, ...otherArgs])
    }
}

const obj = { name: 'Pavel'}
const fn = function (greeting) { console.log(greeting, this.name) }
const bindeFn = bind(fn, obj, 'Hi!')

bindeFn()