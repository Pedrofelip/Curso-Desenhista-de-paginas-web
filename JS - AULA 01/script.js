// alert("Olá mundo agr de um aquivo externo")

function aparecerAlerta() {
    alert("comi seu bumbum")
}

function aparecerData() {
    // document.getElementById("data").innerHTML = Date()

    setInterval('document.getElementById("data").innerHTML = Date()', 1000)
}

function mudarDblClick() {
    document.getElementById("paragrafo").innerHTML = "mudou o texto mesmo"
}

function mudarMouseSegurar() {
    document.getElementById(paragrafo).innerHTML = "solto mudou memo"
}

function mudarMouseSoltar() {
    document.getElementById("paragrafo").innerHTML = "soltar o mouse"
}

function mudarCorQuadrado() {
    document.getElementById("quadrado").style.backgroundColor = "#ff0000"
        // document.getElementById("quadrado").style.backgroundImage = "url(./img1.jpg)"
}

function trocarImg() {
    document.getElementById("img").style.backgroundImage = "url(./img1.jpg)"

}

function acenderLampada() {
    document.getElementById("quadrado").classList.replace("apagada", "acesa")
}

function apagarLampada() {
    document.getElementById("quadrado").classList.replace("acesa", "apagada")
}