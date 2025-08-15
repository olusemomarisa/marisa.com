var  mn = document.querySelector(".container");
var  mns = "container-scrolled";
var  hdr = document.querySelector('header').offsetHeight;

window.addEventListener('scroll', checkContainerScrolled);
window.addEventListener('load', checkContainerScrolled);

function checkContainerScrolled() {
  if (window.scrollY > hdr) {
    mn && mn.classList.add(mns);
  } else {
    mn && mn.classList.remove(mns);
  }
}

function myMenu() {
  var x = document.getElementById("cfix");
  if (x.className === "clearfix") {
    x.className += " responsive";
  } else {
    x.className = "clearfix";
  }
}
