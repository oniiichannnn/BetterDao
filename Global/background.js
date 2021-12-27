chrome.storage.local.get(["backgroundImage"], function(backgroundImage){
    let { backgroundImage:ImageURL } = backgroundImage

    document.body.style.backgroundImage = `url(${ImageURL})`
    // document.body.style.backgroundImage = "url(https://konachan.com/sample/a45ea097ee0c2f41c8b62d2b70199d83/Konachan.com%20-%20309383%20sample.jpg)"
    document.body.style.backgroundPosition     = "center"
    document.body.style.backgroundRepeat       = "no-repeat"
    document.body.style.backgroundAttachment   = "fixed"
    document.body.style.backgroundSize         = "cover"

    const White     = "#fff"
    const DarkWhite = "rgb(184, 182, 182)"
    const Blue      = "#7289DA"

    const TransparentBlack = "rgba(0, 0, 0, 0.473)"
    const TransparentBlue  = "#7289dabe"

    document.querySelector(".content").style.backgroundColor = TransparentBlack
})