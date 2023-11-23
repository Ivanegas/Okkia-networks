document.addEventListener("DOMContentLoaded", function () {
  let links = document.querySelectorAll("nav ul li a");

  links.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      let targetRef = link.getAttribute("data-ref");

      let targetSection = document.getElementById(targetRef);

      targetSection.scrollIntoView({
        behavior: "smooth",
      });
    });
  });
});
