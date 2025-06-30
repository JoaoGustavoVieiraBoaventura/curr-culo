document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;
  const toggleIcon = themeToggle.querySelector('i');

  const updateIcon = () => {
    if (body.classList.contains('dark-mode')) {
      toggleIcon.classList.remove('fa-moon');
      toggleIcon.classList.add('fa-sun');
      toggleIcon.style.color = '#f1c40f';
    } else {
      toggleIcon.classList.remove('fa-sun');
      toggleIcon.classList.add('fa-moon');
      toggleIcon.style.color = '';
    }
  };

  const savedTheme = localStorage.getIem('theme');
  if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
  }
  
  updateIcon();

  themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
    updateIcon();
  });
});
