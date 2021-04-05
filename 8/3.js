'use strict'
undefined
function unique(strings) {
    let buf = []
    let j

    for (let i = 0; i < strings.length; i += 1) {
        j = 0
        while (buf[j]) {
            if (buf[j] === strings[i])
                break
            j += 1
        }
        if (!(buf[j])){
            buf[j] = strings[i]
        }
    }    
    return (buf)
}

const strings = ['кришна', 'кришна', 'харе', 'харе', 'кришна', 'Оо', 'харе']

console.log(unique(strings))