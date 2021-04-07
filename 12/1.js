'use strict'

function loadScript(src, cb) {
    const script = document.createElement('script')
    
    script.src = src
    script.onload = () => { cb(null, script) }
    script.onerror = () => { new Error(`Ошибка загрузки скрипта ${src}`) }
  
    document.head.append(script)
}

function promisify(foo) {
    return function (...args) {
        return new Promise((resolve, reject) => {
            foo (
                ...args,
                (err, data) => {
                    if (err) {
                        reject(err)
                    } else {
                        resolve(data)
                    }
                },
            )
        })
    }
}

const loadScriptPromisified = promisify(loadScript)
loadScriptPromisified('./check.js').then()
