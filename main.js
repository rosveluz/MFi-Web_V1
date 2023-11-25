document.addEventListener('DOMContentLoaded', function() {
    // Fetch the menu HTML from a separate file
    fetch('menu.html')
      .then(response => response.text())
      .then(text => {
        // Insert the menu HTML into a div with the id 'menu-container'
        document.getElementById('menu-container').innerHTML = text;
  
        // Setup the click event for the menu button
        document.getElementById('menu-button').addEventListener('click', function() {
          // Toggle the menu visibility
          var menu = document.getElementById('menu');
          if (menu.style.display === 'block') {
            menu.style.display = 'none';
          } else {
            menu.style.display = 'block';
          }
        });
      });
  });
  