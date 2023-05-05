let navToggle = document.querySelector(".nav-toggle");
let navToggle2 = document.querySelector(".nav-toggle2");
let bars = document.querySelectorAll(".bar");
let sidebar = document.querySelector(".sidebar");

function toggleHamburger(e) {
  bars.forEach((bar) => bar.classList.toggle("x"));
  sidebar.classList.add("active");
}

function unToggleHamburger(e) {
  bars.forEach((bar) => bar.classList.toggle("x"));
  sidebar.classList.remove("active");
}

navToggle.addEventListener("click", toggleHamburger);
navToggle2.addEventListener("click", unToggleHamburger);