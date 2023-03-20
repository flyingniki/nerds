const contactLink = document.querySelector(".btn-contacts");
const modalPopup = document.querySelector(".modal");
const modalClose = document.querySelector(".modal-close");
const modalForm = document.querySelector(".modal-form");
const modalName = document.querySelector(".modal-name");
const modalEmail = document.querySelector(".modal-email");
const modalText = document.querySelector(".modal-text");

let isStorageSupport = true;
let storageName = "";
let storageEmail = "";
let storageText = "";

try {
  storageName = localStorage.getItem("name");
  storageEmail = localStorage.getItem("email");
  storageText = localStorage.getItem("text");
} catch (err) {
  isStorageSupport = false;
}

contactLink.addEventListener("click", function (e) {
  e.preventDefault();
  modalPopup.classList.add("modal-show");
  modalName.focus();
});

modalClose.addEventListener("click", function (e) {
  e.preventDefault();
  modalPopup.classList.remove("modal-show");
  modalPopup.classList.remove("modal-error");
});

modalForm.addEventListener("submit", function (e) {
  if (!modalName.value || !modalEmail.value || !modalText.value) {
    e.preventDefault();
    modalPopup.classList.remove("modal-error");
    modalPopup.offsetWidth = modalPopup.offsetWidth;
    modalPopup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("name", modalName.value);
      localStorage.setItem("email", modalEmail.value);
      localStorage.setItem("text", modalText.value);
    }
  }
});

window.addEventListener("keydown", function (e) {
  if (e.key === "Escape" || e.key === "Esc") {
    if (modalPopup.classList.contains("modal-show")) {
      e.preventDefault();
      modalPopup.classList.remove("modal-show");
      modalPopup.classList.remove("modal-error");
    }
  }
});
