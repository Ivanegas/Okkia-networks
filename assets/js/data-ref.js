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

document.addEventListener("DOMContentLoaded", function () {
  let links = document.querySelectorAll("nav ul li a"); 
  links.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      let targetRefs = link.getAttribute("data-ref").split(' '); // Obtener múltiples referencias

      targetRefs.forEach(function(targetRef) {
        let targetSection = document.getElementById(targetRef);

        // Verificar si la sección está visible
        if (targetSection && window.getComputedStyle(targetSection).display !== "none") {
          targetSection.scrollIntoView({
            behavior: "smooth",
          });
        }
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

/* Funcion para quitar el id del menu de Master y Retail */
document.addEventListener("DOMContentLoaded", function(){
  let links = document.querySelectorAll("section div a");
  links.forEach(function(link){
    link.addEventListener("click", function(event){
      event.preventDefault();

      let targetRef = link.getAttribute("data-ref");

      let targetSection = document.getElementById(targetRef);

      targetSection.scrollIntoView({
        behavior: "smooth",
      });
    });
  });
});

document.addEventListener("DOMContentLoaded", function(){
  let links = document.querySelectorAll("a");
  links.forEach(function(link){
    link.addEventListener("click", function(event){
      event.preventDefault();

      let targetRef = link.getAttribute("data-ref");

      let targetSection = document.getElementById(targetRef);

      targetSection.scrollIntoView({
        behavior: "smooth",
      });
    });
  });
});


/* === Solucion al enlace de las redes sociales === */
const sendSocialMedia = (url) =>{
  window.open(url, 'blank');
}