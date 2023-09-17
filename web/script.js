const theme = "rgb(255,255,255)"

const music = "music.mp3"

const volume_start = 0.3

const logo = "https://cdn.discordapp.com/attachments/1090349259481698454/1120400513322717255/visionlogopngconshadow.png"

const dynamic_text = [
    "You can go and buy a car at the dealership...", 
    "By going to the police station you can request a weapons licence...", 
    "If you need help just contact a staffer...", 
    "Vision banking 2/12/2023..."
]

const dynamic_text_speed = 3500

const slider_images = [
    "images/image.png", 
    "images/image2.png",
    "images/image3.png",
    "images/image4.png",
]

const slider_images_speed = 3500

const who_are_we = [
    {
        title: "Who are we?",
        content: "Hi everyone, we are Vision, a group of guys passionate about the world of programming specialized in creating content for the famous mod of Grand theft auto V, Fivem.",
    }
]

window.addEventListener('DOMContentLoaded', function(e) {
    StartDynamicText()
    StartSliderImages()
    RenderGeneralLoadingScreenData()
})

function StartDynamicText() {
    let text_index_max = dynamic_text.length
    let text_index = 0

    document.getElementsByClassName("loading-text-dynamic")[0].innerText = dynamic_text[text_index]
    setInterval(function() {

        if ((text_index_max - 1) > text_index) {
            text_index = text_index + 1
        } else if((text_index_max - 1) == text_index) {
            text_index = 0
        }

        document.getElementsByClassName("loading-text-dynamic")[0].innerText = dynamic_text[text_index]
    }, dynamic_text_speed)
}

function StartSliderImages() {
    images_index_max = slider_images.length
    images_index = 0

    document.getElementsByClassName("images")[0].style.backgroundImage = "url(" + slider_images[images_index] + ")"

    SwitchImagesLoop()
}

function SwitchImagesLoop() {

    if ((images_index_max - 1) > images_index) {
        images_index = images_index + 1
    } else if((images_index_max - 1) == images_index) {
        images_index = 0
    }
    setTimeout(function() {
        document.getElementsByClassName("images")[0].animate([
            {
                opacity: "1",
            },
            {
                opacity: "0",
            } 
        ], {
            duration: 600,
            direction: "normal",
            iterations: 1,
            fill: "forwards",
            easing: "ease-in-out",
        })
    }, slider_images_speed - 250)
    setTimeout(function() {
        document.getElementsByClassName("images")[0].style.backgroundImage = "url(" + slider_images[images_index] + ")"
        document.getElementsByClassName("images")[0].animate([
            {
                opacity: "0",
            },
            {
                opacity: "1",
            } 
        ], {
            duration: 600,
            direction: "normal",
            iterations: 1,
            fill: "forwards",
            easing: "ease-in-out",
        })

        SwitchImagesLoop()
    }, slider_images_speed)
}

function SelectAll(color) {
    let elementttt = document.querySelectorAll(".navemoji")

    elementttt.forEach(element => {
        element.style.color = color
    });
}

function RenderGeneralLoadingScreenData() {
    songs_started = true
    song = new Audio(music)
    song.volume = volume_start
    song.play()
    document.getElementsByClassName("loading-who-are-we-title")[0].innerText = who_are_we[0].title
    document.getElementsByClassName("loading-who-are-we-content")[0].innerText = who_are_we[0].content
    document.getElementsByClassName("loading-image")[0].style.backgroundImage = "url(" + logo + ")"

    if(theme == "blue") {
        document.getElementsByClassName("loading-who-are-we-title")[0].style.color = "rgb(167,224,238)"
        SelectAll("rgb(167,224,238)")
        document.getElementsByClassName("musicemoji")[0].style.color = "rgb(167,224,238)"
    } else if(theme == "red") {
        document.getElementsByClassName("loading-who-are-we-title")[0].style.color = "rgba(238, 167, 167,1)"
        SelectAll("rgba(238, 167, 167,1)")
        document.getElementsByClassName("musicemoji")[0].style.color = "rgba(238, 167, 167,1)"
    } else if(theme == "orange") {
        document.getElementsByClassName("loading-who-are-we-title")[0].style.color = "rgba(240, 192, 104, 1)"
        SelectAll("rgba(240, 192, 104, 1)")
        document.getElementsByClassName("musicemoji")[0].style.color = "rgba(240, 192, 104, 1)"
    } else if(theme == "green") {
        document.getElementsByClassName("loading-who-are-we-title")[0].style.color = "rgba(167, 238, 171, 1)"
        SelectAll("rgba(167, 238, 171, 1)")
        document.getElementsByClassName("musicemoji")[0].style.color = "rgba(167, 238, 171, 1)"
    } else if(theme == "purple") {
        document.getElementsByClassName("loading-who-are-we-title")[0].style.color = "rgba(206, 167, 238,1)"
        SelectAll("rgba(206, 167, 238,1)")
        document.getElementsByClassName("musicemoji")[0].style.color = "rgba(206, 167, 238,1)"
    } else if(theme == "yellow") {
        document.getElementsByClassName("loading-who-are-we-title")[0].style.color = "rgba(238, 237, 167,1)"
        SelectAll("rgba(238, 237, 167,1)")
        document.getElementsByClassName("musicemoji")[0].style.color = "rgba(238, 237, 167,1)"
    } else if(theme != "blue" || theme != "yellow" || theme != "purple" || theme != "green" || theme != "orange" || theme != "red") {
        document.getElementsByClassName("loading-who-are-we-title")[0].style.color = theme
        SelectAll(theme)
        document.getElementsByClassName("musicemoji")[0].style.color = theme
    }
}

document.getElementById("play-music").addEventListener("click", function() {
    if (songs_started == true) {
        songs_started = false
        song.pause()
        document.getElementsByClassName("musicemoji")[0].className = "fa-solid fa-play musicemoji"
    } else if(songs_started == false) {
        songs_started = true
        song.play()
        document.getElementsByClassName("musicemoji")[0].className = "fa-solid fa-pause musicemoji"
    }
})

let slider_volume = document.getElementById("volume-slider");
slider_volume.value = volume_start * 100

slider_volume.oninput = function() {
    song.volume = this.value / 100
}

document.getElementById("first_button").addEventListener("click", function() {
    window.invokeNative("openUrl", "https://www.instagram.com/visionfivem/");
})

document.getElementById("second_button").addEventListener("click", function() {
    window.invokeNative("openUrl", "rules_url");
})

document.getElementById("third_button").addEventListener("click", function() {
    window.invokeNative("openUrl", "tebex_url");
})

document.getElementById("fourth_button").addEventListener("click", function() {
    window.invokeNative("openUrl", "discord.gg/JZQnbVwWMs");
})