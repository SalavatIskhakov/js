'use strict'

const animal = {
    jumps: null,
}
 
  const rabbit = {
    __proto__: animal,
    jumps: true,
}

console.log(rabbit.jumps) // ? (1) true, т.к. jumps у rabbit определен
delete rabbit.jumps
console.log(rabbit.jumps) // ? (2) null, т.к. мы удалили собственный jumps, 
delete animal.jumps            //  из-за чего он обращается родительскому jumps
console.log(rabbit.jumps) // ? (3) undefined, такого элемента нет