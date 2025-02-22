// Función para el tema oscuro
document.addEventListener("DOMContentLoaded", () => {
  // Configuración del tema oscuro
  const themeToggle = document.getElementById("themeToggle");

  // Verificar preferencia guardada
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  }

  // Toggle del tema
  themeToggle.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark");

    // Guardar preferencia
    if (document.documentElement.classList.contains("dark")) {
      localStorage.theme = "dark";
    } else {
      localStorage.theme = "light";
    }
  });

  // Animación de texto typewriter
  const typewriterElement = document.querySelector(".typewriter");
  const phrases = [
    "I'm a Backend Developer",
    "I'm a Problem Solver",
    "I'm a System Engineer Student",
  ];
  let currentPhraseIndex = 0;

  function typePhrase(phrase) {
    let i = 0;
    typewriterElement.textContent = "";
    typewriterElement.style.animation = "none";

    function type() {
      if (i < phrase.length) {
        typewriterElement.textContent += phrase.charAt(i);
        i++;
        setTimeout(type, 100); // Velocidad de tipeo
      } else {
        setTimeout(deletePhrase, 2000); // Esperar antes de borrar
      }
    }

    type();
  }

  function deletePhrase() {
    let phrase = typewriterElement.textContent;
    let i = phrase.length;

    function deleteLetter() {
      if (i > 0) {
        typewriterElement.textContent = phrase.substring(0, i - 1);
        i--;
        setTimeout(deleteLetter, 50); // Velocidad de borrado
      } else {
        currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
        setTimeout(() => typePhrase(phrases[currentPhraseIndex]), 500);
      }
    }

    deleteLetter();
  }

  // Iniciar la animación
  typePhrase(phrases[currentPhraseIndex]);

  // Animación de las tarjetas de experiencia
  function handleExperienceCards() {
    const cards = document.querySelectorAll(".experience-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    cards.forEach((card) => {
      observer.observe(card);
    });
  }

  handleExperienceCards();
});
