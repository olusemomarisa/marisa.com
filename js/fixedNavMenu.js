// Nav is sticky via CSS; keep only menu toggle logic

function myMenu() {
  var x = document.getElementById("cfix");
  if (x.className === "clearfix") {
    x.className += " responsive";
  } else {
    x.className = "clearfix";
  }
}
