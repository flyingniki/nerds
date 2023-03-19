const contactLink = document.querySelector(".btn-contacts");
const modalPopup = document.querySelector(".modal");
const modalClose = document.querySelector(".modal-close");

contactLink.addEventListener("click", function (e) {
  e.preventDefault();
  modalPopup.classList.add("modal-show");
});

modalClose.addEventListener("click", function (e) {
  e.preventDefault();
  modalPopup.classList.remove("modal-show");
});
