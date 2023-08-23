  var navbar = document.getElementById("navbar");
  var toggleButton = navbar.getElementsByClassName("toggle-button")[0];
  var menuItems = navbar.getElementsByClassName("menu-items")[0];

  toggleButton.addEventListener("click", function() {
    navbar.classList.toggle("responsive");
    if (menuItems.style.display === "flex") {
      menuItems.style.display = "none";
      toggleButton.innerHTML = "&#9776;"; // Change back to the toggle icon
    } else {
      menuItems.style.display = "flex";
      toggleButton.innerHTML = "&#10006;"; // Change to a close icon
    }
  });