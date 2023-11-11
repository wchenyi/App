document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.querySelector('header label input[type="checkbox"]');
  const body = document.querySelector('body');
  const menuButton = document.querySelector('#sidebar-toggle'); // 修正选择器
  const aside = document.querySelector('aside');
  const pageButtons = document.querySelectorAll('nav a');
  const pages = document.querySelectorAll('.page');

  function toggleDarkMode() {
    body.classList.toggle('dark');
  }

  function toggleMenu() {
    aside.classList.toggle('open');
  }

  function switchPage(e) {
    e.preventDefault();
    const targetPage = e.target.getAttribute('data-page');

    pages.forEach((page) => {
      page.classList.remove('active');
    });

    document.getElementById(targetPage).classList.add('active');
  }

  toggle.addEventListener('change', toggleDarkMode);
  menuButton.addEventListener('click', toggleMenu);

  pageButtons.forEach((button) => {
    button.addEventListener('click', switchPage);
  });
});
