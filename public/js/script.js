const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

function openCvPopup() {
    document.getElementById("cvPopup").style.display = "flex";
}

function closeCvPopup() {
    document.getElementById("cvPopup").style.display = "none";
}
