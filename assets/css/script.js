window.addEventListener("scroll", function () {
  var navbar = document.querySelector(".navbar");
  var button = document.querySelector(".navbar button");

  if (window.scrollY > 0) {
    navbar.classList.add("navbar-scrolled");
    button.style.backgroundColor = "green";
  } else {
    navbar.classList.remove("navbar-scrolled");
    button.style.backgroundColor = "black";
  }
});
