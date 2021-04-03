'use strict'
let bool

// 2 задание

bool = 5 > 4 // true т.к.  сравниваюттся числа
alert('5 > 4\n  ' + bool)

bool = "ананас" > "яблоко" // false т.к. код ascii 'я' > 'а'
alert('"ананас" > "яблоко"\n    ' + bool)

bool = "2" > "12" // true т.к. код ascii '2' > '1'
alert('"2" > "12"\n ' + bool)

bool = undefined === null // false т.к 
// null - это значение которое указывает ни на что,
// undefined - не объявленное значение
// null = object (косяк js)
// undefined = undefined
alert('undefined === null\n ' + bool)

bool = null == "\\n0\\n" // false == true => false
alert('null == "\\n0\\n"\n  ' + bool)

bool = null === +"\\n0\\n" // false т.к. "===" - строгое сравнение
alert('null === +"\\n0\\n"\n    ' + bool)

// 3 задание

bool = undefined == null // false == false => true
// т.к. "==" - это не строгое сравнение
// null и undefined относятся к числу ложных значений в JS
// к ложным значения также относяться
// false, 0, пустая строка -> "", NaN
alert('undefined == null\n  ' + bool)
