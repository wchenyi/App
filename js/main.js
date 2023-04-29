.toggle("sidebar-open");
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

const navLinks = document.querySelectorAll("nav a");
navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();

    const targetId = event.target.id.split("-")[1];
    const targetPage = document.getElementById("page-" + targetId);

    document.querySelectorAll(".page").forEach((page) => {
      page.classList.remove("active");
    });

    targetPage.classList.add("active");
  });
});
