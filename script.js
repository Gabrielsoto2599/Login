const submSingIn = document.getElemtentById("sing-in");
      submSingUp = document.getElemtentById("sing-up");
      formRegister = document.querySelector(".register");
      formLogin = document.querySelector(".login");


submSingIn.addEventListener("click", e => {
     formRegister.classList.add("hide");
     formLogin.classList.remove("hide")
})

submSingUp.addEventListener("click", e => {
     formLogin.classList.add("hide");
     formRegister.classList.remove("hide")