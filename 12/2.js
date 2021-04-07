
async function wait() {
    await new Promise(resolve => setTimeout(resolve, 1000))
    return 10
    // Ключевое слово await заставит интерпретатор JavaScript ждать до тех пор,
    // пока промис от await не выполнится
}
  
function f() {
    wait().then(alert)  // async всегда возращает promise
                        // в данном случае возратит promise с результатом 10
    // ...что здесь написать?
    // чтобы вызвать wait() и дождаться результата '10' от async–функции
    // не забывайте, нельзя использовать 'await' внутри простых функций
}
  
f()

