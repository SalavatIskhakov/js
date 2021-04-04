'use strict'

const user = {
    0: 'Yo',
    name: 'Vasya',
    age: 2,
    money: 100,
}

const userClone = {}

for (let key in user) {
    userClone[key] = user[key]
}
console.log(JSON.stringify(user, null, 4))
console.log(JSON.stringify(userClone, null, 4))