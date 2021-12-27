const White     = "#fff"
const DarkWhite = "rgb(184, 182, 182)"
const Blue      = "#7289DA"

const TransparentBlack = "rgba(0, 0, 0, 0.473)"
const TransparentBlue  = "#7289dabe"

document.body.style.color                  = White
document.querySelector(".content").style.backgroundColor = TransparentBlack

Array.from(document.querySelectorAll(".well")).forEach(element => {
    element.setAttribute("style", "border-radius: 5px !important;")
})

document.querySelector(".content").style.borderRadius = "5px"

Array.from(document.querySelectorAll(".nav-tabs")).forEach(element => {
    element.style.borderBottom = "0"
})

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