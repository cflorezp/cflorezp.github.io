const STORAGE_KEY = "portfolio-lang";

const translations = {
  en: {
    home: "Home",
    language: "Language",
    navLabel: "Primary",
    heroLabel: "Introduction",
    role: "Software Developer - Engineer",
    titles: ["Carlos", "Florez", "Pitta"],
    intro:
      "I'm not defined only by what I know how to do, but by how I face every challenge: with curiosity, perseverance, and the conviction that there is always a better way to do things. I find satisfaction in learning, building solutions, and turning complexity into opportunities.",
  },
  fr: {
    home: "Accueil",
    language: "Langue",
    navLabel: "Principal",
    heroLabel: "Présentation",
    role: "Développeur Logiciel - Ingénieur",
    titles: ["Carlos", "Florez", "Pitta"],
    intro:
      "Ce qui me définit n'est pas seulement ce que je sais faire, mais la façon dont j'aborde chaque défi : avec curiosité, persévérance et la conviction qu'il existe toujours une meilleure façon de faire les choses. Je trouve de la satisfaction à apprendre, à construire des solutions et à transformer la complexité en opportunités.",
  },
  es: {
    home: "Inicio",
    language: "Idioma",
    navLabel: "Principal",
    heroLabel: "Presentación",
    role: "Desarrollador de Software - Ingeniero",
    titles: ["Carlos", "Florez", "Pitta"],
    intro:
      "No me define únicamente lo que sé hacer, sino la forma en que enfrento cada desafío: con curiosidad, perseverancia y la convicción de que siempre existe una mejor manera de hacer las cosas. Encuentro satisfacción en aprender, construir soluciones y transformar la complejidad en oportunidades.",
  },
};

const toggle = document.getElementById("language-toggle");
const menu = document.getElementById("language-menu");
const options = document.querySelectorAll("[data-lang]");

function applyTitles(titles) {
  document.querySelectorAll("[data-title-index]").forEach((el) => {
    const index = Number(el.getAttribute("data-title-index"));
    if (titles[index]) el.textContent = titles[index];
  });
}

function applyLanguage(lang) {
  const strings = translations[lang] || translations.en;
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (strings[key]) el.textContent = strings[key];
  });

  document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
    const key = el.getAttribute("data-i18n-aria");
    if (strings[key]) el.setAttribute("aria-label", strings[key]);
  });

  applyTitles(strings.titles);

  options.forEach((btn) => {
    const isActive = btn.getAttribute("data-lang") === lang;
    btn.setAttribute("aria-current", isActive ? "true" : "false");
  });

  localStorage.setItem(STORAGE_KEY, lang);
}

function setMenuOpen(open) {
  menu.hidden = !open;
  toggle.setAttribute("aria-expanded", String(open));
}

toggle.addEventListener("click", (event) => {
  event.stopPropagation();
  setMenuOpen(menu.hidden);
});

options.forEach((btn) => {
  btn.addEventListener("click", () => {
    applyLanguage(btn.getAttribute("data-lang"));
    setMenuOpen(false);
  });
});

document.addEventListener("click", (event) => {
  if (!toggle.contains(event.target) && !menu.contains(event.target)) {
    setMenuOpen(false);
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") setMenuOpen(false);
});

const saved = localStorage.getItem(STORAGE_KEY);
const initial =
  saved && translations[saved]
    ? saved
    : document.documentElement.lang in translations
      ? document.documentElement.lang
      : "en";

applyLanguage(initial);
