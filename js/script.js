const button = document.querySelector("button");
const inputNota = document.querySelector("#nota");

// criando um elemento p
const pErro = document.createElement("p");

function clearForm() {
    inputNota.value = "";

}


button.addEventListener("click", (event) => {
    event.preventDefault();
    console.log(inputNota.value);

    const inputNotaValue = inputNota.value
    //validações
    if (inputNotaValue.trim() === '') {
        pErro.textContent = "O campo é obrigatório Retardado";
        inputNota.insertAdjacentElement("afterend", pErro);
        pErro.setAttribute("class", "error")
        return false;

    }

    //Lógica
    if (inputNota.value >= 6) {
        alert('Você está aprovado');
    } else {
        alert('Você está reprovado')
    }

    pErro.classList.add("d-none");
    clearForm();
})