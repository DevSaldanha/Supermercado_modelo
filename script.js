document
  .getElementById("hamburger-menu")
  .addEventListener("click", function () {
    var mainNav = document.getElementById("main-nav");
    if (mainNav.style.display === "none" || mainNav.style.display === "") {
      mainNav.style.display = "flex";
    } else {
      mainNav.style.display = "none";
    }
  });
