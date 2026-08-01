const themeBtn = document.getElementById("themeToggle");

const html = document.documentElement;

// Local Storage থেকে Theme Load
const savedTheme = localStorage.getItem("theme") || "light";

html.classList.remove("light", "dark");
html.classList.add(savedTheme);

updateIcon(savedTheme);

// Toggle Theme
themeBtn.addEventListener("click", () => {
  const currentTheme = html.classList.contains("dark") ? "dark" : "light";

  const newTheme = currentTheme === "dark" ? "light" : "dark";

  html.classList.remove("light", "dark");
  html.classList.add(newTheme);

  localStorage.setItem("theme", newTheme);

  updateIcon(newTheme);
});

// Change Icon
function updateIcon(theme) {
  themeBtn.innerHTML =
    theme === "dark"
      ? '<i class="fa-solid fa-sun"></i>'
      : '<i class="fa-solid fa-moon"></i>';
}
