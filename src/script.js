const red = document.querySelector(".merah");
const yellow = document.querySelector(".kuning");
const green = document.querySelector(".hijau");
const grey = document.querySelector(".abuabu");

function nyalakanLampu(lampu) {
  merah.classList.remove("aktif");
  kuning.classList.remove("aktif");
  hijau.classList.remove("aktif");
  lampu.classList.add("aktif");
}

function siwitchLamp() {
  nyalakanLampu(merah);
  setTimeout(() => {
    nyalakanLampu(kuning);
    setTimeout(() => {
      nyalakanLampu(hijau);
      setTimeout(() => {
        siwitchLamp();
      }, 3000);
    }, 2000);
  }, 3000);
}

siwitchLamp();

