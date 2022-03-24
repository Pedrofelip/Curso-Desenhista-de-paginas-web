const num1 = document.getElementById("input_n1");
const num2 = document.getElementById("input_n2");
const resultado = document.getElementById("resultado");

function somarNumeros() {
let resultadoSoma = Number (num1.value) +  Number (num2.value)

   resultado.value = resultadoSoma
}

function subtrairNumero() {
    
    let resultadoSubtrair  = Number (num1.value) - Number (num2.value)

   resultado.value = resultadoSubtrair
}

function multiplicarNumero() {
    
    let resultadoMulti  = Number (num1.value) * Number (num2.value)

   resultado.value = resultadoMulti
}

function dividirNumero() {
    
    let resultadoDiv  = Number (num1.value) / Number (num2.value)

   resultado.value = resultadoDiv
}

function limparInputs(){
    resultado.value = ''
    num2.value = ''
    num1.value = ''
}