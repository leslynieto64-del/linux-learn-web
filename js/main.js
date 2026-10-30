/* ==================================================================
   LINUX Learn · Interacciones de la página
   1. Menú en teléfonos
   2. Línea del encabezado al hacer scroll
   3. Resaltar la sección activa en el menú
   4. Año actual en el pie de página
   5. Aviso si el enlace de descarga aún no se configuró
   ================================================================== */

/* 1. MENÚ EN TELÉFONOS ------------------------------------------- */
const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".main-nav");

toggle.addEventListener("click", () => {
  const abierto = toggle.getAttribute("aria-expanded") === "true";
  toggle.setAttribute("aria-expanded", String(!abierto));
  toggle.setAttribute("aria-label", abierto ? "Abrir menú" : "Cerrar menú");
  nav.classList.toggle("is-open", !abierto);
});

function cerrarMenu() {
  toggle.setAttribute("aria-expanded", "false");
  toggle.setAttribute("aria-label", "Abrir menú");
  nav.classList.remove("is-open");
}

// Cerrar el menú al elegir una opción
nav.querySelectorAll("a").forEach((enlace) => {
  enlace.addEventListener("click", cerrarMenu);
});

// Cerrar el menú con la tecla Esc o al tocar fuera de él
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") cerrarMenu();
});

document.addEventListener("click", (e) => {
  if (nav.classList.contains("is-open") && !nav.contains(e.target) && !toggle.contains(e.target)) {
    cerrarMenu();
  }
});


/* 2. LÍNEA DEL ENCABEZADO ---------------------------------------- */
const header = document.querySelector(".site-header");

function actualizarHeader() {
  header.classList.toggle("is-scrolled", window.scrollY > 10);
}

window.addEventListener("scroll", actualizarHeader, { passive: true });
actualizarHeader();


/* 3. SECCIÓN ACTIVA EN EL MENÚ ----------------------------------- */
const enlaces = document.querySelectorAll(".main-nav a");
const secciones = document.querySelectorAll("main section[id]");

const observadorSecciones = new IntersectionObserver(
  (entradas) => {
    entradas.forEach((entrada) => {
      if (entrada.isIntersecting) {
        enlaces.forEach((a) => {
          a.classList.toggle("is-active", a.getAttribute("href") === "#" + entrada.target.id);
        });
      }
    });
  },
  { rootMargin: "-45% 0px -50% 0px" }
);

secciones.forEach((s) => observadorSecciones.observe(s));


/* 4. AÑO ACTUAL -------------------------------------------------- */
document.getElementById("year").textContent = new Date().getFullYear();


/* 5. ENLACE DE DESCARGA PENDIENTE -------------------------------- */
// Mientras el href del botón conserve el texto de ejemplo "TU-USUARIO",
// la dirección de GitHub todavía no existe. En ese caso se muestra un aviso
// en lugar de llevar a la persona a una página de error.
// Cuando pongas tu usuario real en index.html, este bloque deja de actuar solo.
const enlaceApk = document.getElementById("apk-download");
const avisoApk = document.getElementById("apk-pending");

if (enlaceApk && avisoApk && enlaceApk.getAttribute("href").includes("TU-USUARIO")) {
  avisoApk.hidden = false;
  enlaceApk.setAttribute("aria-describedby", "apk-pending");
  // Evita abrir la dirección de ejemplo; el aviso ya está visible bajo el botón
  enlaceApk.addEventListener("click", (e) => e.preventDefault());
}
