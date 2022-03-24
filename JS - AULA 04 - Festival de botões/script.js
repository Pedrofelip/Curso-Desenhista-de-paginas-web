// botao2
function mudarTamanhoFonte() {
  document.getElementById("secao_paragrafos").style.fontSize = "30px";  
}

function mudarCorFonte() {
    document.getElementById("secao_paragrafos").style.color = "red";  
  }

function mudarFundo() {
    document.getElementById("secao_paragrafos").style.backgroundColor = "pink";  
  }

function mudarItalico(){
  document.getElementById("secao_paragrafos").style.fontSize = "italic"
}

function colocarNegrito(){
  document.getElementById("secao_paragrafos").style.fontWeight = "bold"
}

function adicionarBorda(){
  document.getElementById("secao_paragrafos").style.border = "solid #000 20px"
}

function removerBorda(){
  document.getElementById("secao_paragrafos").style.border = "none"
}

function esconderSecao(){
  document.getElementById("secao_paragrafos").style.display = "none"
}

function mostrarSecao(){
  document.getElementById("secao_paragrafos").style.display = "block"
}

function mudarSegundoTitulo(){
  document.getElementsByClassName("texto")[1].innerHTML = "Texto alterado pela seleção da class"
}

function mudarCorFundoParagrafo(){
  document.getElementsByClassName("paragrafo")[0].style.backgroundColor = "red"
}

function mudarCorBotao(){
  let limiteBotoes = document.getElementsByTagName("button").length - 1;

    // gerar um índice aleatório entre 0 e o último índice da lista de botões (18)
    // Math.round(Math.random() * (maximo - minimo) + minimo)
    // parseInt(Math.random() * (maximo - minimo) + minimo)
    let indiceAleatorio = Math.round(Math.random() * (limiteBotoes - 0) + 0);

    document.getElementsByTagName("button")[indiceAleatorio].style.backgroundColor = "lightblue";

    document.getElementsByTagName("h2")[2].innerHTML = `${indiceAleatorio + 1} - ${document.getElementsByTagName("button")[indiceAleatorio].innerHTML}`;
}

function mudarCorBotoes() {

  let botoes = document.getElementsByTagName("button")

  for (let contador = 0; contador < botoes.length; contador++)  {
    botoes[contador].style.background = "green";
  }
}

function contarBotoes(){

  let quantidadeBotoes = document.getElementsByTagName("button").length

  document.getElementsByTagName("h2")[0].innerHTML =  `Numero de botoes do site: ${quantidadeBotoes}`;
}

function alterarTextoParagrafo(){
  document.querySelector(".paragrafo").innerHTML = "Texto alterado com query selector"
}

function mudarCorPaginda(){
  document.querySelector("body").style.backgroundColor = "#000"
}

function turbinarPC(){
  document.querySelector("img").src = "./img/alien.jpg"
}


