var cartoes = document.querySelectorAll(".cartao");

var existeCartaoVirado = false;

var primeiroCartao, segundoCartao;

var spanPlayer = document.querySelector(".jogador");

    var playerName = localStorage.getItem("player");
    spanPlayer.innerHTML = playerName;

var tempo = document.querySelector(".tempo");

    var startTempo = () => {
        this.loop = setInterval(() => {
            var tempoAtual = +tempo.innerHTML;
            tempo.innerHTML = tempoAtual + 1;
        }, 1000);
}

startTempo();

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

