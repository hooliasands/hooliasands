//when user is scrolling the page will 
//execute function fixNavbar
window.onscroll = function() {
  fixNavbar();
}

//get navbar
var navbar = document.getElementById("navbar");

//get the position of the navbar
var topOfNavbar = navbar.offsetTop;

//add the sticky class to the navbar when you 
//reach its scroll position
//removes "sticky" when you leave scroll position
function fixNavbar() {
  if(window.pageYOffset >= topOfNavbar){
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}



