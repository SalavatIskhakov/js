'use strict'

function Calc(num) {
    this.num = num
    this.add = (num) => {
        this.num += num
        return (this.num)
    }
    this.div = (num) => {
        this.num /= num
        return (this.num)
    }
    this.mult = (num) => {
        this.num *= num
        return (this.num)
    }
    this.diff = (num) => {
        this.num -= num
        return (this.num)
    }
}

const superCalculator = new Calc(4)
alert(superCalculator.add(2))
alert(superCalculator.div(3))
alert(superCalculator.mult(5))
alert(superCalculator.diff(1))