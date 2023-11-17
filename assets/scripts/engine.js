
const pianoKeys = document.querySelectorAll(".piano-keys .key");
let audio = new Audio ("./assets/tunes/a.wav");
let teclas = [];
const volume = document.querySelector('.volume-slider input');
const keys = document.querySelector(".keys-check input");

const playTune = (key) => {
    audio.src = `./assets/tunes/${key}.wav`
    audio.play();
    const clickedKey = document.querySelector(`[name="${key}"]`);
    clickedKey.classList.add("active");
    setTimeout (()=> {
    clickedKey.classList.remove("active");
   }, 250)
};

pianoKeys.forEach((key) => {
    key.addEventListener("click", ()=> playTune(key.textContent));
    teclas.push(key.textContent);
});

document.addEventListener("keydown", (e)=> {
    if (teclas.includes(e.key)){
    playTune(e.key);}
} );

const handleVolume = (e) => {
    audio.volume = e.target.value;
};

const showHideKeys = () => {
    pianoKeys.forEach(key => key.classList.toggle ('hide'));
};

volume.addEventListener("input", handleVolume);
keys.addEventListener("click", showHideKeys );

