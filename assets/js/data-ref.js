/* Funcion para quitar el id del menu en la url */
document.addEventListener("DOMContentLoaded", function () {
  let links = document.querySelectorAll("nav ul li a"); /* <--- tiene que tener la estructura que tiene el menu en el html */

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

/* Funcion para quitar el id del footer en la url */
document.addEventListener("DOMContentLoaded", function () {
  let links = document.querySelectorAll("footer ul li a"); /* <--- tiene que tener la estructura que tiene en el html */

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

/* Funcion para quitar el id del boton en la url */
document.addEventListener("DOMContentLoaded", function () {
  let links = document.querySelectorAll("div a"); /* <--- tiene que tener la estructura que tiene en el html */

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