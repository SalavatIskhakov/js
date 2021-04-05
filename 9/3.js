'use strict'

const fn = (a, b) => {
    console.log(`${a} + ${b}`)
    return a + b
}

const cachedFn = cache(fn)

function cache (cb) {
    const fooCache = {}
    return (...args) => {
        const key = JSON.stringify(args)
        if (fooCache[key]) {
            return fooCache[key]
        }
        fooCache[key] = cb.apply(null, args)
        return fooCache[key]
    }
}

cachedFn(1, 2)
cachedFn(1, 4)
cachedFn(1, 6)
cachedFn(4, 2)
cachedFn(3, 2)
cachedFn(1, 2)
cachedFn(1, 4)