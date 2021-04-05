'use strict'

function map(arr, cb) {
    let arrNew = []
    for (let i = 0; i < arr.length; i++) {
        arrNew[i] = cb(arr[i])
    }
    return (arrNew)
}

let users = [
    { id: 1, name: 'vasya', sex: 'm' },
    { id: 2, name: 'petya', sex: 'm' },
    { id: 3, name: 'masha', sex: 'f' },
]

function myFun(user) {
    user = Object.assign({}, user) // Копирование
    user.sex = user.sex === 'm' ? 'Мужской' : 'Женский'
    return (user)
}

const arrNew = map(users, myFun)
console.log(users)
console.log(arrNew)