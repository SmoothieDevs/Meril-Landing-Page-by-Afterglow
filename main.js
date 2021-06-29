// -------------------- Menu Burger ---------------------//
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
// ------------------ Waypoint ----------------- //

// ------------- Home ------------- //
var baliseHome = document.querySelector(".home");
var baliseHomeM = document.querySelector(".homeM");
var active = baliseHome;
var activeM = baliseHomeM;

var home = new Waypoint({
  element: document.getElementById('home'),
  handler: function () {
    if (!baliseHome.classList.contains('active')) {
      baliseHome.classList.add('active');
      baliseHomeM.classList.add('active');
      active.classList.remove('active');
      activeM.classList.remove('active');
      active = baliseHome;
      activeM = baliseHomeM;
    }
  }, offset: -400
})

// ------------- About ------------- //

var baliseAbout = document.querySelector(".about");
var baliseAboutM = document.querySelector(".aboutM");

var about = new Waypoint({
  element: document.getElementById('product'),
  handler: function () {
    if (!baliseAbout.classList.contains('active')) {
      baliseAbout.classList.add('active');
      baliseAboutM.classList.add('active');
      active.classList.remove('active');
      activeM.classList.remove('active');
      active = baliseAbout;
      activeM = baliseAboutM;
    }
  }, offset: 200
})

var about = new Waypoint({
  element: document.getElementById('product'),
  handler: function () {
    if (!baliseAbout.classList.contains('active')) {
      baliseAbout.classList.add('active');
      baliseAboutM.classList.add('active');
      active.classList.remove('active');
      activeM.classList.remove('active');
      active = baliseAbout;
      activeM = baliseAboutM;
    }
  }, offset: -900
})

// ------------- Features ------------- //

var baliseFeatures = document.querySelector(".features");
var baliseFeaturesM = document.querySelector(".featuresM");

var about = new Waypoint({
  element: document.getElementById('features'),
  handler: function () {
    if (!baliseFeatures.classList.contains('active')) {
      baliseFeatures.classList.add('active');
      baliseFeaturesM.classList.add('active');
      active.classList.remove('active');
      activeM.classList.remove('active');
      active = baliseFeatures;
      activeM = baliseFeaturesM;
    }
  }, offset: 200
})

var about = new Waypoint({
  element: document.getElementById('features'),
  handler: function () {
    if (!baliseFeatures.classList.contains('active')) {
      baliseFeatures.classList.add('active');
      baliseFeaturesM.classList.add('active');
      active.classList.remove('active');
      activeM.classList.remove('active');
      active = baliseFeatures;
      activeM = baliseFeaturesM;
    }
  }, offset: -900
})

// ------------- Fees ------------- //

var baliseFees = document.querySelector(".fees");
var baliseFeesM = document.querySelector(".feesM");

var about = new Waypoint({
  element: document.getElementById('fees'),
  handler: function () {
    if (!baliseFees.classList.contains('active')) {
      baliseFees.classList.add('active');
      baliseFeesM.classList.add('active');
      active.classList.remove('active');
      activeM.classList.remove('active');
      active = baliseFees;
      activeM = baliseFeesM;
    }
  }, offset: 200
})

var about = new Waypoint({
  element: document.getElementById('fees'),
  handler: function () {
    if (!baliseFees.classList.contains('active')) {
      baliseFees.classList.add('active');
      baliseFeesM.classList.add('active');
      active.classList.remove('active');
      activeM.classList.remove('active');
      active = baliseFees;
      activeM = baliseFeesM;
    }
  }, offset: -600
})

// ------------- Contact ------------- //

var baliseContact = document.querySelector(".contactus");
var baliseContactM = document.querySelector(".contactusM"); //version Mobile

var about = new Waypoint({
  element: document.getElementById('contact'),
  handler: function () {
    if (!baliseContact.classList.contains('active')) {
      baliseContact.classList.add('active');
      baliseContactM.classList.add('active');
      active.classList.remove('active');
      activeM.classList.remove('active');
      active = baliseContact;
      activeM = baliseContactM;
    }
  }, offset: 200
})