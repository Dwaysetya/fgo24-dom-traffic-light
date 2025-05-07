const red = document.querySelector(".merah");
const yellow = document.querySelector(".kuning");
const green = document.querySelector(".hijau");

function nyalakanLampu(lampu) {
  red.classList.remove("aktif");
  yellow.classList.remove("aktif");
  green.classList.remove("aktif");
  lampu.classList.add("aktif");
}

function siwitchLamp() {
  nyalakanLampu(red);
  setTimeout(() => {
    nyalakanLampu(yellow);
    setTimeout(() => {
      nyalakanLampu(green);
      setTimeout(() => {
        siwitchLamp();
      }, 3000);
    }, 2000);
  }, 3000);
}

siwitchLamp();
