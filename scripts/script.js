var openButton = document.querySelector("header > button:nth-of-type(2)");
var closeButton = document.querySelector("header nav button" );
var deNav = document.querySelector("nav");

// stap 2: laat de menu-button luisteren naar kliks en voer dan een functie uit
openButton.addEventListener("click", openMenu);
closeButton.addEventListener("click", closeMenu);

// stap 3: voeg in de functie een class toe aan de nav
function openMenu() {  
  // voeg class toe aan nav
  deNav.classList.add("toonMenu");
}

function closeMenu(){
  deNav.classList.remove("toonMenu");
}

