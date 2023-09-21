let modal = document.querySelector(".modal");
let openModalBtn = document.querySelector(".openBtn");
let closeModalBtn = document.querySelector(".closeBtn");

function openModal() {
  modal.classList.remove("hidden");
};
function closeModal () {
  modal.classList.add("hidden");
};

openModalBtn.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);
