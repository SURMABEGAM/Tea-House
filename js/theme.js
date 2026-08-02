const themeBtn = document.getElementById("themeToggle");
const html = document.documentElement;

const savedTheme = localStorage.getItem("theme") || "light";

html.classList.remove("light", "dark");
html.classList.add(savedTheme);

updateIcon(savedTheme);

themeBtn.addEventListener("click", () => {
  const isDark = html.classList.contains("dark");

  const newTheme = isDark ? "light" : "dark";

  html.classList.remove("light", "dark");

  html.classList.add(newTheme);

  localStorage.setItem("theme", newTheme);

  updateIcon(newTheme);
});

function updateIcon(theme) {
  themeBtn.innerHTML =
    theme === "dark"
      ? `<i class="fa-solid fa-sun text-yellow-300 text-lg"></i>`
      : `<i class="fa-solid fa-moon text-lg"></i>`;
}
