if (document.getElementsByClassName("btn-success")[0]) {
    document.getElementsByClassName("btn-success")[0].addEventListener("click", () => {
        document.querySelector("#disqus_thread").style.background   = "rgba(255, 255, 255, 0.555)"
        document.querySelector("#disqus_thread").style.padding      = "5px"
        document.querySelector("#disqus_thread").style.borderRadius = "10px"
    })
}