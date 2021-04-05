'use strict'

function sumOnlyNum (fields) {
    let sum

    sum = 0
    for (let key in fields) {
        if (fields[key].type === 'number') {
            sum += fields[key].value
        }
    }
    return (sum)
}

const fields = {
    name: {
     type: 'string',
     value: 'Вася',
    },
    age: {
     type: 'number',
     value: 20,
    },
    bdate: {
     type: 'string',
     value: '11.09.2010',
    },
    math: {
     type: 'number',
     value: 5,
    },
    rusLang: {
     type: 'number',
     value: 4,
    },
    geometry: {
     type: 'number',
     value: 5,
    },
}

console.log(sumOnlyNum(fields))
