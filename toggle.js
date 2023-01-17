var toggle = document.getElementById('toogle');
var access = document.getElementById('access');

var toggleSearch = document.getElementById('toogle-search');
var accessSearch = document.getElementById('access-search');

function toggleMenu(){
    toggle.classList.toggle("close");
    access.classList.toggle("shown");

    //Load images
    document.getElementById("menu-accueil").className = "menu-bg-accueil";
    document.getElementById("menu-livres").className = "menu-bg-livres";
    document.getElementById("menu-series").className = "menu-bg-series";
    document.getElementById("menu-carnets").className = "menu-bg-carnets";

};

function searchMenu(){
    toggleSearch.classList.toggle("close");
    accessSearch.classList.toggle("shown");
};

toggle.addEventListener("click", toggleMenu, false);
toggleSearch.addEventListener("click", searchMenu, false);