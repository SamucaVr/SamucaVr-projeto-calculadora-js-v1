let resultadoTela = document.getElementById('resultado');

function somar() {
    let valorUm = parseInt(document.getElementById('valorUm').value);
    let valorDois = parseInt(document.getElementById('valorDois').value);
    
    let resultado = valorUm + valorDois;
    resultadoTela.value = resultado;
}

function subtrair() {
    let valorUm = parseInt(document.getElementById('valorUm').value);
    let valorDois = parseInt(document.getElementById('valorDois').value);    
   
    let resultado = valorUm - valorDois;
    resultadoTela.value = resultado;
}

function multiplicar() {
    let valorUm = parseInt(document.getElementById('valorUm').value);
    let valorDois = parseInt(document.getElementById('valorDois').value);

    let resultado = valorUm * valorDois;
    resultadoTela.value = resultado;
}

function dividir() {
    let valorUm = parseInt(document.getElementById('valorUm').value);
    let valorDois = parseInt(document.getElementById('valorDois').value);
    
    let resultado = valorUm / valorDois;
    resultadoTela.value = resultado;
}

function zerar() {
    let valorUm = document.getElementById('valorUm').value = null;
    let valorDois = document.getElementById('valorDois').value = null;
    let resultado = document.getElementById('resultado').value = null;
}