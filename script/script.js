const prev = document.querySelector('#prev')
const next = document.querySelector('#next')
const elem = document.querySelectorAll('.slider--elem')

let elemValues = [0,1,2,3]
let slideNumber = 0

const restarsInterval = () => {
    clearInterval(time)
    time = setInterval(()=>{slideUp(slideNumber+1)}, 6000)
}

const slideUp = num => {
    slideNumber = num
    if (slideNumber>3){slideNumber = 0}
    if (slideNumber<0){slideNumber = 3}
    for (let i = 0; i< elem.length; i++) {
        elem[i] = elemValues[i]
        if (elemValues[i] === slideNumber) {
            elem[i].style.display = 'block'
            elem[i].classList.add('scale')
            elem[i].classList.remove('fade--out')
        } else {
            elem[i].classList.add('fade--out')
            elem[i].classList.remove('scale')
            setTimeout(()=>{elem[i].style.display = 'none'}, 300)
        }
    }    
    console.log(slideNumber)
}

slideUp(slideNumber)
let time = setInterval(()=>{slideUp(slideNumber+1)}, 6000)

next.addEventListener('click', ()=>{slideUp(slideNumber+1);restarsInterval()})
prev.addEventListener('click', ()=>{slideUp(slideNumber-1);restarsInterval()})
