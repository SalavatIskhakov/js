'use strict'
let cons = console.log
{
    let i = 0
    const console = {
        log: () => {
            if (i % 2 === 0) {
                cons('true')
            } else {
                cons('false')
            }
            i++
        },
    }

    let t

    console.log(!t==t)
    console.log(!t==t)
}