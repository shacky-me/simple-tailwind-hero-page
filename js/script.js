const toggleBtn = document.getElementById("menu-toggle");
const menu = document.getElementById("mobile-menu");
const icon = document.getElementById("menu-icon");

toggleBtn.addEventListener("click", () => {
  menu.classList.toggle("hidden");

  if (menu.classList.contains("hidden")) {
    icon.textContent = "☰";
    icon.style.color = "";
  } else {
    icon.textContent = "✕";
    icon.style.color = "red";
  }
});
