const prev = document.querySelector('#prev')
const next = document.querySelector('#next')
const elem = document.querySelectorAll('.elem')

let elemValues = [0,1,2,3,4]
let slideNumber = 0

function stop() {
    clearInterval(time)
    time = setInterval(()=>{slideUp(slideNumber+1)}, 3000)
}

function slideUp(num) {
    slideNumber = num
    if (slideNumber>4){slideNumber = 0}
    if (slideNumber<0){slideNumber = 4}
    for (let i = 0; i< elem.length; i++) {
        elem[i] = elemValues[i]
        if (elemValues[i] === slideNumber) {
            elem[i].style.display = 'block'
        } else {
            elem[i].style.display = 'none'
        }
    }    console.log(slideNumber)
}

slideUp(slideNumber)
let time = setInterval(()=>{slideUp(slideNumber+1)}, 3000)

next.addEventListener('click', ()=>{slideUp(slideNumber+1);stop()})
prev.addEventListener('click', ()=>{slideUp(slideNumber-1);stop()})








