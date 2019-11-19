// $(".burger").on("click", () => {
//   $(".fas, aside, .wrapper").toggleClass("show");
// })

// A tak będzie to w JS

// const burger = document.querySelector(".burger");
// const iconBurger = document.querySelector(".fa-bars");
// const iconX = document.querySelector(".fa-times");
// const column = document.querySelector("aside");
// const wrapp = document.querySelector(".wrapper");

// burger.addEventListener("click", function () {
//   iconBurger.classList.toggle("show");
//   iconX.classList.toggle("show");
//   column.classList.toggle("show");
//   wrapp.classList.toggle("show");
// })


// A tak będzie krócej
const burger = document.querySelector(".burger");
const activeElement = document.querySelectorAll(".active");

// burger.addEventListener("click", () => {
//   for (let i = 0; i < activeElement.length; i++) {
//     activeElement[i].classList.toggle("show");
//   }
// })

burger.addEventListener("click", () => {
  activeElement.forEach(i => {
    i.classList.toggle("show");
  });
})