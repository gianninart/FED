/* 
var menuButton = document.querySelector("header > #menu");
var menu = document.querySelector ("header nav ul");
var openButtonImage = document.querySelector("header > #menu > img");

function toggleMenu(){
    menu.classList.toggle("menuOpen");
}

if(openButtonImage.src === "./images/menu.png"){
    openButtonImage.src = "./images/close.png"
} else{
    openButtonImage = "./images/menu.png"
}

menuButton.addEventListener("click",toggleMenu) */

var openButton = document.querySelector("header > #menu");

// stap 2: laat de menu-button luisteren naar kliks en voer dan een functie uit
openButton.addEventListener("click", openMenu);

// stap 3: voeg in de functie een class toe aan de nav
function openMenu() {  
  // zoek de nav op
  var deNav = document.querySelector("nav");
  // voeg class toe aan nav
  deNav.classList.add("toonMenu");
}

