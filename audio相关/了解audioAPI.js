var audioObj = new Audio("http://cloud.hunger-valley.com/music/ifyou.mp3");

let app = document.querySelector("#app");

let PlayBtn = document.createElement("button");
let PauseBtn = document.createElement("button");
PlayBtn.innerText = "Play";
PlayBtn.style.width = "100px";
PlayBtn.style.height = "50px";
PlayBtn.style.borderRadius = "10px";

PauseBtn.innerText = "Pause";
PauseBtn.style.width = "100px";
PauseBtn.style.height = "50px";
PauseBtn.style.borderRadius = "10px";

app.appendChild(PlayBtn);
app.appendChild(PauseBtn);

PlayBtn.addEventListener("click", function() {
  audioObj.paused ? audioObj.play() : audioObj.pause();
});
