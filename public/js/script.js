// Mobile menu
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");
menuBtn.addEventListener("click", () => nav.classList.toggle("open"));

// Close menu when clicking a link (mobile)
document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});

// Active link on scroll
const sections = [...document.querySelectorAll("section[id]")];
const navLinks = [...document.querySelectorAll(".nav-link")];

function setActiveLink() {
  const y = window.scrollY + 120;
  let currentId = "home";

  for (const sec of sections) {
    const top = sec.offsetTop;
    const height = sec.offsetHeight;
    if (y >= top && y < top + height) {
      currentId = sec.id;
      break;
    }
  }

  navLinks.forEach(a => {
    a.classList.toggle("active", a.getAttribute("href") === `#${currentId}`);
  });
}
window.addEventListener("scroll", setActiveLink);
setActiveLink();

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Contact form (demo)
const form = document.getElementById("contactForm");
const note = document.getElementById("formNote");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  note.textContent = "Message sent (demo). Connect this form to your backend to receive emails.";
  form.reset();
});

// Simple language toggle (EN <-> ES demo)
const langBtn = document.getElementById("langBtn");
let lang = "EN";

const dict = {
  EN: {
    hello: "Hello",
    im: "I’m",
    name: "James",
    surname: "Kamerun",
    subtitle:
      "In this video I am gonna show you how to create a personal website with all pages. After watching this tutorial you will be able to create a website like this.",
    download: "Download CV",
    viewwork: "View Work",

    aboutTitle: "About",
    aboutDesc: "A short intro about who you are, what you do, and what you’re focused on.",
    aboutCard1Title: "Who I am",
    aboutCard1Text:
      "I’m a UI/UX focused developer who builds clean, modern websites and web apps. I care about details, smooth interactions, and performance.",
    locationLabel: "Location:",
    locationValue: "Sri Lanka",
    emailLabel: "Email:",
    phoneLabel: "Phone:",
    skillsTitle: "Skills",

    servicesTitle: "Services",
    servicesDesc: "What I can do for you (customize these cards as you like).",
    service1Title: "Web Design",
    service1Text: "Modern UI layout, responsive design, and clean typography.",
    service2Title: "Web Development",
    service2Text: "Fast, accessible, and maintainable websites with smooth interactions.",
    service3Title: "Deploy & Support",
    service3Text: "Domain, hosting, deployment, and post-launch updates.",

    portfolioTitle: "Portfolio",
    portfolioDesc: "A few sample projects. Replace thumbnails and links with your real work.",

    experienceTitle: "Experience",
    experienceDesc: "Your timeline (education / work). Edit the items below.",

    contactTitle: "Contact",
    contactDesc: "Send a message (demo form). You can connect it to PHP / Node later.",
    contactInfoTitle: "Contact Info",
    formName: "Name",
    formEmail: "Email",
    formSubject: "Subject",
    formMessage: "Message",
    formSend: "Send Message",
  },
  ES: {
    hello: "Hola",
    im: "Soy",
    name: "James",
    surname: "Kamerun",
    subtitle:
      "En este video te mostraré cómo crear un sitio personal con todas las secciones. Después podrás crear un sitio como este.",
    download: "Descargar CV",
    viewwork: "Ver trabajos",

    aboutTitle: "Sobre mí",
    aboutDesc: "Una breve introducción sobre quién eres y en qué trabajas.",
    aboutCard1Title: "Quién soy",
    aboutCard1Text:
      "Soy un desarrollador enfocado en UI/UX que crea sitios modernos y rápidos. Me importan los detalles y el rendimiento.",
    locationLabel: "Ubicación:",
    locationValue: "Sri Lanka",
    emailLabel: "Correo:",
    phoneLabel: "Teléfono:",
    skillsTitle: "Habilidades",

    servicesTitle: "Servicios",
    servicesDesc: "Lo que puedo hacer por ti (personaliza estas tarjetas).",
    service1Title: "Diseño Web",
    service1Text: "Diseño moderno, responsive y tipografía limpia.",
    service2Title: "Desarrollo Web",
    service2Text: "Sitios rápidos, accesibles y fáciles de mantener.",
    service3Title: "Despliegue y soporte",
    service3Text: "Dominio, hosting, despliegue y actualizaciones.",

    portfolioTitle: "Portafolio",
    portfolioDesc: "Proyectos de ejemplo. Reemplaza miniaturas y enlaces.",

    experienceTitle: "Experiencia",
    experienceDesc: "Tu línea de tiempo (educación / trabajo).",

    contactTitle: "Contacto",
    contactDesc: "Enviar mensaje (formulario demo). Conéctalo a backend luego.",
    contactInfoTitle: "Información",
    formName: "Nombre",
    formEmail: "Correo",
    formSubject: "Asunto",
    formMessage: "Mensaje",
    formSend: "Enviar",
  }
};

function applyLang(which) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    const value = dict[which]?.[key];
    if (value) el.textContent = value;
  });
}

langBtn.addEventListener("click", () => {
  lang = (lang === "EN") ? "ES" : "EN";
  langBtn.textContent = lang;
  applyLang(lang);
});