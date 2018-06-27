var mainNavLi = document.querySelectorAll("div.main-nav > ul > li");
for (var i = 0; i < mainNavLi.length; i++) {
  //only add event listener if there is submenuJS
  var testSubmenu = mainNavLi[i].querySelector('.submenuJS') || false;
  if (testSubmenu) {
    mainNavLi[i].addEventListener("mouseenter", function(){showSubMenu(testSubmenu);}, false);
    mainNavLi[i].addEventListener("mouseleave", function(){hideSubMenu(testSubmenu);}, false);
  }
}

function showSubMenu(testSubmenu) {
  testSubmenu.style.display = "block";
}

function hideSubMenu() {
  testSubmenu.style.display = "none";
}
