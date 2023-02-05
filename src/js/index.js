var nome = prompt("Olá, qual o seu nome?");

alert(nome + ", seja muito bem vind@!!! Vamos testar sua memória?!");

var h1 = document.getElementById("nada");

h1.innerText = "Boa sorte " + nome;

h1.style.color = "bisque";

var cartoes = document.querySelectorAll(".cartao");

var existeCartaoVirado = false;

var primeiroCartao, segundoCartao;

function virarCartao() {
    this.classList.add("virado");

    if (existeCartaoVirado == false) {
        existeCartaoVirado = true;
        primeiroCartao = this;
    } else {
        segundoCartao = this;
        existeCartaoVirado = false;
        
        if (primeiroCartao.dataset.info === segundoCartao.dataset.info) {
            primeiroCartao.removeEventListener("click", virarCartao);
            segundoCartao.removeEventListener("click", virarCartao);
        } else {
            setTimeout(function () {
                primeiroCartao.classList.remove("virado");
                segundoCartao.classList.remove("virado");
            }, 1100);
        }
    }
}

cartoes.forEach(function (cartao) {
    cartao.addEventListener("click", virarCartao);
});
