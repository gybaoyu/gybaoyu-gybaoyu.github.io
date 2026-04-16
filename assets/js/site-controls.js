(function () {
  var root = document.documentElement;
  var themeToggle = document.getElementById("theme-toggle");
  var langToggle = document.getElementById("lang-toggle");
  var themeLabel = document.querySelector(".theme-toggle-text");
  var langLabel = document.querySelector(".lang-toggle-text");

  function setTheme(theme) {
    root.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    if (themeLabel) {
      themeLabel.textContent = theme === "dark" ? "浅色 / Light" : "深色 / Dark";
    }
  }

  function setLanguage(lang) {
    root.setAttribute("data-lang", lang);
    localStorage.setItem("lang", lang);
    if (langLabel) {
      langLabel.textContent = lang === "zh" ? "EN" : "中文";
    }
  }

  var savedTheme = localStorage.getItem("theme");
  var savedLang = localStorage.getItem("lang");
  var defaultTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  var defaultLang = navigator.language && navigator.language.toLowerCase().startsWith("zh") ? "zh" : "en";

  setTheme(savedTheme || defaultTheme);
  setLanguage(savedLang || defaultLang);

  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      var nextTheme = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      setTheme(nextTheme);
    });
  }

  if (langToggle) {
    langToggle.addEventListener("click", function () {
      var nextLang = root.getAttribute("data-lang") === "zh" ? "en" : "zh";
      setLanguage(nextLang);
    });
  }
})();
