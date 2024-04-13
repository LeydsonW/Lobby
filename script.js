document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('.menu-item');
    const submenu = document.getElementById('submenu');
  
    menuItems.forEach(item => {
      item.addEventListener('click', function() {
        submenu.style.display = 'none';
        submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
      });
    });
  });
  