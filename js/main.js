document.getElementById("theme-toggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

document.getElementById("search-box").addEventListener("input", (event) => {
  const searchTerm = event.target.value.toLowerCase();
  const apps = document.querySelectorAll(".app");

  apps.forEach((app) => {
    const appName = app.querySelector("h3").textContent.toLowerCase();
    if (appName.includes(searchTerm)) {
      app.style.display = "block";
    } else {
      app.style.display = "none";
    }
  });
});
