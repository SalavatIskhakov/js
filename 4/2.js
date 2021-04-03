'use strict'

function validator (num) {
    return (num > 18)
}

function getNumber(fun) {
    let num

    while(!num) {
        num = prompt('Введите число')
        num = parseInt(num)
        if (!num) {
            console.log(`Введите число`)
            num = null
        }
        else {
            if (fun) {
                if (fun(num)) {
                    console.log(`${num} - это число, которое удовлетворяет условию`)
                    alert(`${num} - это число, которое удовлетворяет условию`)
                }
                else {
                    num = null
                }
            }
            else {
                console.log(`${num} - это число`)
                alert(`${num} - это число`)
            }
        }
    }
    return (num)
}

let num

// 2.1 
num = getNumber() 

// 2.2
num = getNumber(validator) 
