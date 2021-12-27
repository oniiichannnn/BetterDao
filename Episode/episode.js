const White     = "#fff"
const DarkWhite = "rgb(184, 182, 182)"
const Blue      = "#7289DA"

const TransparentBlack = "rgba(0, 0, 0, 0.473)"
const TransparentBlue  = "#7289dabe"

document.body.style.color                  = White
document.querySelector(".content").style.borderRadius = "5px"
document.querySelector(".content").style.backgroundColor = TransparentBlack

document.querySelector(".episode_title_table tbody tr td h4").style.textAlign       = "center"
document.querySelector(".episode_title_table tbody tr td h4").style.border          = `1.7px solid ${White}`
document.querySelector(".episode_title_table tbody tr td h4").style.borderRadius    = "10px"
document.querySelector(".episode_title_table tbody tr td h4").style.padding         = "5px"

Array.from(document.querySelectorAll("hr")).forEach(element => {
    element.style.borderTop = "0"
})

document.querySelector(".nav-tabs").style.borderBottom = "0"

document.querySelector(".hidden-xs").style.border = "none"

document.querySelector(".hidden-xs").style.borderRadius = "10px"

Array.from(document.querySelectorAll(".btn-primary")).forEach(element => {
    element.style.backgroundColor   = TransparentBlue
    element.style.borderColor       = TransparentBlue
})

Array.from(document.querySelectorAll(".tab-pane .alert-info")).forEach(element => {
    element.style.backgroundColor = TransparentBlue
    element.style.borderColor     = TransparentBlue
    element.style.color           = White
    element.style.color           = DarkWhite
})

document.getElementsByClassName("row")[2].querySelector(".col-md-8 .alert-info")
    .style.backgroundImage = "url(https://imgur.com/qm0mcvo.png)"

document.getElementsByClassName("row")[2].querySelector(".col-md-8 .alert-info")
    .style.backgroundPosition = "center"

document.getElementsByClassName("row")[2].querySelector(".col-md-8 .alert-info")
    .style.backgroundSize = "cover"

document.getElementsByClassName("row")[2].querySelector(".col-md-8 .alert-info")
    .style.backgroundRepeat = "no-repeat"

document.getElementsByClassName("row")[2].querySelector(".col-md-8 .alert-info")
    .style.padding = "50px"

document.getElementsByClassName("row")[2].querySelector(".col-md-8 .alert-info")
    .style.border = "none"

document.getElementsByClassName("row")[2].querySelector(".col-md-8 .alert-info center h4")
    .style.textShadow = `0px 0px 10px ${DarkWhite}`

document.getElementsByClassName("row")[2].querySelector(".col-md-8 .alert-info center h4")
    .style.color = White

document.getElementsByClassName("row")[2].querySelector(".col-md-8 .alert-info center h4 a")
    .style.color = Blue

document.getElementsByClassName("row")[3].style.backgroundColor = "transparent"
document.getElementsByClassName("row")[3].style.color           = White

Array.from(document.querySelectorAll(".glyphicon")).forEach(element => {
    element.style.color = Blue
})

Array.from(document.querySelectorAll(".footer-info a")).forEach(element => {
    element.style.color = White
})

document.getElementsByClassName("row")[4].style.backgroundColor = TransparentBlack