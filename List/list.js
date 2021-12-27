const White     = "#fff"
const DarkWhite = "rgb(184, 182, 182)"
const Blue      = "#7289DA"

const TransparentBlack = "rgba(0, 0, 0, 0.473)"
const TransparentBlue  = "#7289dabe"

document.body.style.color                  = White
document.querySelector(".content").style.backgroundColor = TransparentBlack

Array.from(document.querySelectorAll(".nav-tabs")).forEach(element => {
    element.style.borderBottom = "0"
})

// document.getElementsByClassName("row")[0].querySelector("ul li a").style.backgroundColor = TransparentBlue
// document.getElementsByClassName("row")[0].querySelector("ul li a").style.borderColor     = TransparentBlue
// document.getElementsByClassName("row")[0].querySelector("ul li a").style.color           = White
// document.getElementsByClassName("row")[0].querySelector("ul li a").style.color           = DarkWhite

Array.from(document.getElementsByClassName("row"))[
    document.getElementsByClassName("row").length - 2
].style.backgroundColor = "transparent"
document.getElementsByClassName("row")[
    document.getElementsByClassName("row").length - 2
].style.color           = White

Array.from(document.querySelectorAll(".glyphicon")).forEach(element => {
    element.style.color = Blue
})

Array.from(document.querySelectorAll(".footer-info a")).forEach(element => {
    element.style.color = White
})

document.getElementsByClassName("row")[
    document.getElementsByClassName("row").length - 1
].style.backgroundColor = TransparentBlack