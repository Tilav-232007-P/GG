let menu = document.querySelector('.burger_menu')
let two = document.querySelector('.two_menu')
let one = document.querySelector('.head .burger_menu .one_menu')
let three = document.querySelector('.head .burger_menu .three_menu')
let k = document.querySelector('.key')
let as = document.querySelector('aside')
let uwu = document.querySelector('.contain')
let white = document.querySelector('.white_box')
menu.onclick = () =>{
    one.classList.toggle('key')
    three.classList.toggle('key_2')
    two.classList.toggle('opa')
    as.classList.toggle('rg')
    uwu.classList.toggle('not_active')
}
uwu.onclick = () =>{
    one.classList.toggle('key')
    three.classList.toggle('key_2')
    two.classList.toggle('opa')
    uwu.classList.toggle('not_active')
    as.classList.toggle('rg')
}

//Слайдер
let offset = 0
let line = document.querySelector('.slider')
let line2 = document.querySelector('.slider_line')
let next = document.querySelector('.next')
let prev = document.querySelector('.prev')
next.onclick = () =>{
    offset = offset + 100
    if (offset > 300) {
        offset = 0
    }
    line2.style.left = -offset + "%"
}
prev.onclick = () =>{
    offset = offset - 100
    if (offset < 0) {
        offset = 300
    }
    line2.style.left = -offset + "%"
}
