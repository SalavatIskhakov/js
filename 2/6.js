'use strict'

let bool
let yourName

bool = confirm('Нажимая ок вы даете разврешение на обработку конфиденциальной информации')
if (bool) {
    yourName = prompt('Введите ваше имя', 'noName')
    if (yourName)
        alert('Добрый день ' + yourName + '!')
}