let modal = document.querySelector(".modal");
let overlay = document.querySelector(".overlay");
let openModalBtn = document.querySelector(".btn-open");
let closeModalBtn = document.querySelector(".btn-close");

let openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
let closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

openModalBtn.addEventListener("click", openModal);

closeModalBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
document.addEventListener("keydown");
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});