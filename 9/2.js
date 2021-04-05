'use strict'

const obj = { name: 'Pavel'}
const fn = function (greeting) { console.log(greeting, this.name) }

// function bind(cb, context, ...args) {
//     return function() {
//         let uuid
//         context[uuid] = cb
//         const res = context[uuid](...args)
//         delete context[uuid]
//         return res
//     }
// }

function call(cb, context, ...args) {
    let bindedCb
    bindedCb = function () {
        let uuid
        context[uuid] = cb
        const res = context[uuid](...args)
        delete context[uuid]
        return res
    }
    // bindedCb = bind(cb, context, ...args)
    return bindedCb()
}
call(fn, obj, 'Hi')