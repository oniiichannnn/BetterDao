document.getElementById("fileinput").addEventListener("change", async () => {
    let file

    const Reader = new FileReader()

    Reader.readAsDataURL(document.getElementById("fileinput").files[0])

    const GetFileBuffer = async () => {
        return new Promise((resolve, reject) => {
            Reader.onloadend = function() {
                resolve(Reader.result)
            }
        })
    }

    file = await GetFileBuffer()

    document.getElementsByClassName("displaySelectedImage")[0].src = file

    if (!document.getElementsByClassName("selected")[0]) {
        document.getElementsByClassName("displaySelectedImage")[0].classList.add("selected")
        document.getElementById("imagecropper").classList.add("uploaded")
        document.getElementsByClassName("buttons")[0].classList.add("showButtons")
        document.getElementsByClassName("buttons")[0].classList.remove("hideButtons")
    }


    const image = document.getElementsByClassName("displaySelectedImage")[0]

    const GetImageSize = async () => {
        return new Promise((resolve) => {
            let img = new Image()
            img.src = file
            img.onload = function () {
                resolve({ height: this.height, width: this.width })
            }
        })
    }

    let { height:ImageHeight, width:ImageWidth } = await GetImageSize()

    let cropperParent = document.getElementById("imagecropper")

    if (ImageWidth > 800) {
        let resizedPercentage = Percentage(800, ImageWidth)

        ImageHeight = PercentageOf(resizedPercentage, ImageHeight)
        ImageWidth = PercentageOf(resizedPercentage, ImageWidth)
    }

    cropperParent.style.height = ImageHeight
    cropperParent.style.width = ImageWidth

    let croppedHeight = ImageHeight
    let croppedWidth = ImageWidth

    const cropper = new Cropper(image, {
        aspectRatio: 16 / 9,
        rotatable: true,

        crop(event) {
            croppedWidth = event.detail.width
            croppedHeight = event.detail.height
        }
    })

    document.getElementsByClassName("cropSave")[0].addEventListener("click", async () => {
        let file = cropper.getCroppedCanvas().toDataURL()

        chrome.storage.local.set({ "backgroundImage": file }, function() {
            alert("Background Image Changed")

            chrome.tabs.query(
                {
                    currentWindow: true,
                    active: true
                },
                function (foundTabs) {
                    if (foundTabs.length > 0) {
                        var url = foundTabs[0].url

                        if (url.startsWith("https://animedao.to")) {
                            chrome.tabs.reload()
                        }
                    }
                }
            )

            window.close()
        })
    })

    function PercentageOf(percentage, max) {
        return (max/percentage) * 100
    }

    function Percentage (current, max) {
        return (current/max) * 100
    }
})

document.getElementById("redirect").addEventListener("click", () => {
    chrome.tabs.update({ url: "https://animedao.to" });
})

document.getElementById("fileform").addEventListener("submit", async (event) => {
    event.preventDefault()

    if (!event.target.fileinput.files[0]) return

    let file

    const Reader = new FileReader()

    Reader.readAsDataURL(event.target.fileinput.files[0])

    const GetFileBuffer = async () => {
        return new Promise((resolve, reject) => {
            Reader.onloadend = function() {
                resolve(Reader.result)
            }
        })
    }

    file = await GetFileBuffer()

    chrome.storage.local.set({ "backgroundImage": file }, function() {
        alert("Background Image Changed")

        chrome.tabs.query(
            {
                currentWindow: true,
                active: true
            },
            function (foundTabs) {
                if (foundTabs.length > 0) {
                    var url = foundTabs[0].url

                    if (url.startsWith("https://animedao.to")) {
                        chrome.tabs.reload()
                    }
                }
            }
        )

        window.close()
    })
})