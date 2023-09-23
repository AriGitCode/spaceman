let modal = document.querySelector(".modal");
let openModalBtn = document.querySelector(".openBtn");
let closeModalBtn = document.querySelector(".closeBtn");
let audio = new Audio();
audio.src = "./starwars.mp3";
audio.volume = 0.1;

function openModal() {
  modal.classList.remove("hidden");
};
function closeModal () {
  audio.pause();
  modal.classList.add("hidden");
};

openModalBtn.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);
