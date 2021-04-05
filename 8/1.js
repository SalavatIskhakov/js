'use strict'

function getInitials(fio) {
    let arr
    let str
    
    arr = fio.split(' ')
    str = ''
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][0]) {
            str += arr[i][0]
        }
    }
    return (str)
}

let fio 

fio = 'Леонтьев      Сергей Дмитревич'
console.log(getInitials(fio))