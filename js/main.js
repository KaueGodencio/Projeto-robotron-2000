const pecas = {
  bracos: {
    forca: 29,
    poder: 35,
    energia: -21,
    velocidade: -5,
  },

  blindagem: {
    forca: 41,
    poder: 20,
    energia: 0,
    velocidade: -20,
  },
  nucleos: {
    forca: 0,
    poder: 7,
    energia: 48,
    velocidade: -24,
  },
  pernas: {
    forca: 27,
    poder: 21,
    energia: -32,
    velocidade: 42,
  },
  foguetes: {
    forca: 0,
    poder: 28,
    energia: 0,
    velocidade: -2,
  },
};

const controle = document.querySelectorAll(".controle-ajuste");
//Pegando toda a classe de controle-ajuste e depois a data-controle
const estatisticaElement = document.querySelectorAll("[data-estatistica]");
const producao = document.querySelector("#producao");

controle.forEach((elemento) => {
  elemento.addEventListener("click", (evento) => {
    manipulaDados(evento.target.textContent, evento.target.parentNode);
    //Target (no console) mostra exatamente qual botão foi apertado. O data-set.controle busca o data-controle dentro do html. o evento seguinte, o parentNode, buscou o pai do elemento que foi clicado, o outro parâmetro da função, que criou o parâmetro 'controle'
    atualizaEstatistica(evento.target.dataset.peca, evento.target.textContent);
  });
});

/**
 * Função que adiciona e subtrai
 * @param {*} operacao
 * @param {*} controle
 */
function manipulaDados(operacao, controle) {
  //  Vai buscar onde tem no html data-contador
  const pecaContador = controle.querySelector("[data-contador]");

  if (operacao === "-") {
    if (pecaContador.value > 0) {
      pecaContador.value = parseInt(pecaContador.value) - 1;
    } else {
      pecaContador.value = "00";
    }
  } else if (operacao === "+") {
    pecaContador.value = parseInt(pecaContador.value) + 1;
  }
}

function atualizaEstatistica(pecaContador, operacao) {
  switch (operacao) {
    case "-":
      subtrairEstatisticas(pecaContador);
      break;
    case "+":
      incrementarEstatisticas(pecaContador);
      break;
  }
}

function incrementarEstatisticas(pecaContador) {
  estatisticaElement.forEach((elemento) => {
    elemento.textContent =
      parseInt(elemento.textContent) +
      pecas[pecaContador][elemento.dataset.estatistica];
  });
}

function subtrairEstatisticas(pecaContador) {
  estatisticaElement.forEach((elemento) => {
    elemento.textContent =
      parseInt(elemento.textContent) -
      pecas[pecaContador][elemento.dataset.estatistica];
  });
}


function trocaImagem(cor) {
  document.querySelector(".robo").src = "img/Robotron 2000 - " + cor + ".png";
}