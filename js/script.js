const nextButton = document.getElementById('next')
const prevButton = document.getElementById('prev')
const itemGeral = document.querySelectorAll('.item')
const numero = document.querySelector('.numbers')
const linhaBaixo = document.querySelectorAll('.dot')


let index = 0
let timer;

function next() {
    itemGeral.forEach((nextItem) => nextItem.classList.remove('active'))
    linhaBaixo.forEach((nextDot) => nextDot.classList.remove('active'))

    if (index === itemGeral.length - 1) {
        index = 0
    } else {
        index++
    }

    itemGeral[index].classList.add('active')
    linhaBaixo[index].classList.add('active')
    numero.textContent = `0${index + 1}`
}

function prev() {
    itemGeral.forEach((prevItem) => prevItem.classList.remove('active'))
    linhaBaixo.forEach((prevDot) => prevDot.classList.remove('active'))

    if (index === 0) {
        index = itemGeral.length - 1
    } else {
        index--
    }

    itemGeral[index].classList.add('active')
    numero.textContent = `0${index + 1}`
    linhaBaixo[index].classList.add('active')
}

prevButton.addEventListener('click', prev)
nextButton.addEventListener('click', next)

setInterval(() => {
    next()
}, 4000);

