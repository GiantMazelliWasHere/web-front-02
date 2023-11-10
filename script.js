const buttonMedicamentos = document.querySelector("#medicamentos");
const listaRemedios = document.querySelector(".remedios");

buttonMedicamentos.addEventListener("click", function() {
    listaRemedios.classList.add("d-block")
})


// Variáveis de validação
const campoNome = document.querySelector("#nome");
const campoCidade = document.querySelector("#cidade");
const buttonValidacao = document.querySelector("button");

function clearForm() {
  campoNome.value = "";
  campoCidade.value = "";

}


// Função da validação
buttonValidacao.addEventListener("click", function(event) {
    event.preventDefault();

    if(campoNome.value === ''){
        alert("Escre seu nome FILHO DA PUTA!")
        return false;
    }

    if(campoCidade.value === ''){
        alert("Escreva o nome da sua cidade seu RESTO DE ABORTO MAL FEITO!")
        return false;
    }

    clearForm();
});

buttonMedicamentos.addEventListener("click", function() {
    listaRemedios.classList.add("d-block");
});