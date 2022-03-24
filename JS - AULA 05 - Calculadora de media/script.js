const entrada1 = document.querySelector("#nota1");
const entrada2 = document.querySelector("#nota2");
const entrada3 = document.querySelector("#nota3");
const retornoFuncao = document.querySelector("#retorno_funcao");
const resultadoMedia = document.querySelector("#resultado_media");
const situacaoAluno = document.querySelector("#situacao_aluno");

function calcularMedia(){

    if (entrada1.value == "") {
        retornoFuncao.innerHTML = "nenhum valor inserido na nota 1, insira um valor"
        entrada1.focus()
    } else {

        if (entrada2.value == "") {
        retornoFuncao.innerHTML = "nenhum valor inserido na nota 2, insira um valor"
        entrada1.focus();

        }  else {

            if (entrada3.value == "") {
                retornoFuncao.innerHTML = "nenhum valor inserido na nota 3, insira um valor"
                entrada1.focus();

                }else{

                    retornoFuncao.innerHTML = ""

                let valor1 = Number(entrada1.value);
                let valor2 = Number(entrada2.value);
                let valor3 = Number(entrada3.value);

                let mediaNotas = (valor1 + valor2 + valor3) / 3;

                resultadoMedia.innerHTML = `O resultado da média das notas é ${mediaNotas.toFixed(2)}`

                classificarAluno();
                }
        }
    }
}

function classificarAluno(media) {
    
    if (media >= 6){
        situacaoAluno.innerHTML = "O aluno foi aprovado";
    }
    else if (media < 6 && media >= 3) {
        situacaoAluno.innerHTML = "O aluno está de recuperação";
    }
    else {
        situacaoAluno.innerHTML = "O aluno foi reprovado";
    }
}