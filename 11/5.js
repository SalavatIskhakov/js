'use strict'
const circleE1 = document.getElementById('circle')

function doAnimation() {
  moveCircle(150, 150)
  	.then(() => {
    		return zoomCircle(100)
    })
    .then(() => {
    		return moveCircle(50, 50)
    })
    .then(() => {
    		return zoomCircle(50)
    })
    .then(() => {
    		setTimeout(animationEnd, 1000)
    })
}

function moveCircle(x, y) {
return new Promise((resolve, reject) => {
    circleE1.style.left = x + 'px'
    circleE1.style.top = y + 'px'
    setTimeout(resolve, 2000);
  })
}

function zoomCircle(r) {
return new Promise((resolve, reject) => {
    circleE1.style.width = r + 'px'
    circleE1.style.height = r + 'px'
  	setTimeout(resolve, 2000);
  })
}

function animationEnd() {
  alert("Анимация закончилась")
}
