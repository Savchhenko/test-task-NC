const video = document.querySelector(".video__item");
const videoTime = document.getElementById("videoTime");
const range = document.getElementById("range");

function timeFormatter(s) {
    let ms = Math.floor((s - Math.floor(s))*1000);
    let sec = Math.floor(s);
    let min = "00";
    s = Math.floor(s - ms/1000);

    if (sec > 59) {
        min = Math.floor(s / 60);
        sec -= 60;
    }

    if (ms < 10) {
        ms = "00" + ms;
    } else if (ms < 100) {
        ms = "0" + ms;
    }

    if (sec < 10) {sec = "0" + sec}

    if (s > 59 && min < 10) {min = "0" + min}
  
    return min + ":" + sec + ":" + ms;
};

// Запускает / Останавливает видео по клику на него
video.addEventListener("click", function (e) {
    e.preventDefault();
    this[this.paused ? "play" : "pause"]();
});

// При перетаскивании ползунка вручную перематывает видео
range.addEventListener("input", function () {
    video.currentTime = range.value; 
    range.max = Math.floor(video.duration);
});

video.addEventListener("timeupdate", function () {
    videoTime.innerHTML = timeFormatter(video.currentTime);
    range.value = video.currentTime;
    range.max = Math.floor(video.duration);
});

// возвращает видео к предзагруженному постеру после полного воспроизведения
video.addEventListener("ended", () => video.load(), false);
