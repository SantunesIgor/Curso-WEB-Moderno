const video = document.getElementById("meuVideo")

const playBtn = document.querySelector("[wm-play]")
const pauseBtn = document.querySelector("[wm-pause]")

playBtn.onclick = () => video.play()
pauseBtn.onclick = () => video.pause()

const progresso = document.querySelector("[wm-progresso] > div")

video.ontimeupdate = () => {
    const percentual = (video.currentTime / video.duration) * 100
    progresso.style.width = `${percentual}%`
}