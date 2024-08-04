function myFunction() {
  window.location.href = "student.html";
}

function toggleNav() {
  var body = document.querySelector("body");
  var sidenav = document.getElementById("mySidenav");
  var overlay = document.querySelector(".greyOverlay");

  // Adjust the transition delay based on sidenav width
  var sidenavWidth = parseInt(window.getComputedStyle(sidenav).width);
  overlay.style.transitionDelay = sidenavWidth > 0 ? "0.5s" : "0s";

  body.classList.toggle("sideNavActive");

  if (body.classList.contains("sideNavActive")) {
    sidenav.style.width = "265.5px";
    overlay.style.opacity = "1"; // Make the overlay visible
  } else {
    sidenav.style.width = "0";
    overlay.style.opacity = "0"; // Hide the overlay
  }
}

function openNav1() {
  document.getElementById("mySidenav1").style.width = "265.5px";
}

function closeNav1() {
  document.getElementById("mySidenav1").style.width = "0";
}
function openNav2() {
  document.getElementById("mySidenav2").style.width = "265.5px";
}

function closeNav2() {
  document.getElementById("mySidenav2").style.width = "0";
}

function openNav3() {
  document.getElementById("mySidenav3").style.width = "265.5px";
}

function closeNav3() {
  document.getElementById("mySidenav3").style.width = "0";
}
// drop down
var dropdown = document.querySelector(".dropdown");

dropdown.addEventListener("mouseenter", function () {
  var dropdownContent = document.getElementById("dropdownContent");
  dropdownContent.style.display = "block";
});

dropdown.addEventListener("mouseleave", function () {
  var dropdownContent = document.getElementById("dropdownContent");
  dropdownContent.style.display = "none";
});
