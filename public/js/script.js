const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");

  const isOpen = navLinks.classList.contains("show");
  menuToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
});

// Optional: close menu when clicking a link (mobile)
navLinks.addEventListener("click", (e) => {
  if (e.target.tagName === "A" && navLinks.classList.contains("open")) {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  }
});

function openCvPopup() {
  document.getElementById("cvPopup").style.display = "flex";
}

function closeCvPopup() {
  document.getElementById("cvPopup").style.display = "none";
}