let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')

btnMenu.addEventListener('click', () => {
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', () => {
    menu.classList.remove('abrir-menu')
})

overlay.addEventListener('click', () =>{
    menu.classList.remove('abrir-menu')
})
const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const celularInput = document.querySelector("#celular");
const messageTextarea = document.querySelector("#message");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (nameInput.value === "") {
        alert("Por favor, insira seu nome");
        return;
    }

    if ((emailInput.value === "" && celularInput.value === "") || (!isEmailValid(emailInput.value) && !isCelularValid(celularInput.value))) {
        alert("Por favor, coloque um email e/ou celular válido");
        return;
    }

    if (messageTextarea.value === "") {
        alert("Insira uma mensagem, por favor");
        return;
    }

    form.submit();
});

function isEmailValid(email) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}

function isCelularValid(celular) {
    const celularRegex = /^\+55\s\d{2}\s\d{5}-\d{4}$/;
    return celularRegex.test(celular);
}
