var menu = document.querySelector(".menu");
var ham = document.querySelector(".ham").addEventListener("click", toggleMenu)
var xIcon = document.querySelector(".xIcon");
var menuIcon = document.querySelector(".menuIcon");

//ouvre et ferme le menu en modifiant les classes
function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    xIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    xIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

var menuLinks = document.querySelectorAll(".menuLink")
//ferme le menu à chaque fois qu'on clique sur un lien
menuLinks.forEach(
  function (menuLink) {
    menuLink.addEventListener("click", toggleMenu)
  }
)