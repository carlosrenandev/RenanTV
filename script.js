const header = document.querySelector("header");
const hamburguer = document.querySelector(".hamburguer");

hamburguer.addEventListener("click", () => {
    hamburguer.classList.toggle("menu");
    header.classList.toggle("menu");
})