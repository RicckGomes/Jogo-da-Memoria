var cartoes = document.querySelectorAll(".cartao");

var existeCartaoVirado = false;

var primeiroCartao, segundoCartao;

var spanPlayer = document.querySelector(".jogador");

    var playerName = localStorage.getItem("player");
    spanPlayer.innerHTML = playerName;

//var tempo = document.querySelector(".tempo");

    //var startTempo = () => {
        //this.loop = setInterval(() => {
            //var tempoAtual = +tempo.innerHTML;
            //tempo.innerHTML = tempoAtual + 1;
        //}, 1000);
        
//}

//clearInterval(this.loop);

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
        cartoes.forEach(function (cartao) {
          cartao.removeEventListener("click", virarCartao);
        });
        setTimeout(function () {
          cartoes.forEach(function (cartao) {
            cartao.addEventListener("click", virarCartao);
          });
          primeiroCartao.classList.remove("virado");
          segundoCartao.classList.remove("virado");
        }, 1000);
      }
    }
  }
  
  cartoes.forEach(function (cartao) {
    var numero = Math.floor(Math.random() * 12);
    cartao.style.order = numero;
  });

cartoes.forEach(function (cartao) {
    cartao.addEventListener("click", virarCartao);
});

window.onload = () => {
    spanPlayer.innerHTML = localStorage.getItem('player');
    //startTempo();
  }