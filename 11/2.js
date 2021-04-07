'use strict'

const circleE1 = document.getElementById('circle')

function doAnimation() {
    moveCircle(150, 150, () => { 
        zoomCircle(100, animationEnd)
    })
}

function moveCircle(x, y, cb) {
    circleE1.style.left = x + 'px'
    circleE1.style.top = y + 'px'
    cb()

}

function zoomCircle (r, cb) {
    circleE1.style.width = r + 'px'
    circleE1.style.height = r + 'px'

    setTimeout(cb, 2000);
}

function animationEnd () {
    alert("Анимация закончилась")
}