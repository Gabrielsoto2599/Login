const btnSignIn = document.getElementById("sing-in"); // Corregido: getElementById
const btnSignUp = document.getElementById("sing-up"); // Corregido: getElementById
const formRegister = document.querySelector(".register");
const formLogin = document.querySelector(".login");

btnSignIn.addEventListener("click", e => {
     e.preventDefault(); // Muy importante para que no se recargue la página
     formRegister.classList.add("hide");
     formLogin.classList.remove("hide");
});

btnSignUp.addEventListener("click", e => {
     e.preventDefault(); // Muy importante para que no se recargue la página
     formLogin.classList.add("hide");
     formRegister.classList.remove("hide");
}); // Corregido: Cierre de llaves y paréntesis
