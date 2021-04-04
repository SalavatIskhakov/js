'use strict'

const user = {}

user.name = 'Jonh'
user.surname = 'Smith'
console.log(JSON.stringify(user, null, 4))

user.name = 'Pete'
console.log(JSON.stringify(user, null, 4))

delete user.name
console.log(JSON.stringify(user, null, 4))