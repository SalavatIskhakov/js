'use strict'

const hamster = {
    stomach: [],
    eat(food) {
    this.stomach.push(food)
    },
}

function Rabbit(name) {
    this.name = name
    this.stomach = []
}
Rabbit.prototype = hamster
const speedy = new Rabbit()
const lazy = new Rabbit()
 
speedy.eat('apple')
console.log(speedy.stomach)
console.log(lazy.stomach)