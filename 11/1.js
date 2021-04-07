'use strict'

const circleE1 = document.getElementById('circle')

function doAnimation() {
    moveCircle(150, 150, animationEnd)  
}

function moveCircle(x, y, cb) {
    circleE1.style.left = x + 'px'
    circleE1.style.top = y + 'px'
    // circleE1.style.width
    // circleE1.style.height

    setTimeout(cb, 2000);
}

function animationEnd () {
    alert("Анимация закончилась")
}