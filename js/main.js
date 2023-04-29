document.addEventListener('DOMContentLoaded', function () {
  const themeToggle = document.getElementById('theme-toggle');
  const sidebarToggle = document.getElementById('sidebar-toggle');
  const sidebar = document.querySelector('aside');
  const navLinks = document.querySelectorAll('.nav-link');
  
  themeToggle.addEventListener('change', function () {
    document.body.classList.toggle('dark');
  });

  sidebarToggle.addEventListener('click', function () {
    sidebar.classList.toggle('open');
  });

  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const activePage = document.querySelector('.page.active');
      const targetPage = document.getElementById(`page-${e.target.id.split('-')[1]}`);
      activePage.classList.remove('active');
      targetPage.classList.add('active');
    });
  });
});
