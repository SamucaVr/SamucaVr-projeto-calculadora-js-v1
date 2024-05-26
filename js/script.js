let resultadoTela = document.getElementById('resultado');

function operacao(opcao) {
    let valorUm = parseInt(document.getElementById('valorUm').value);
    let valorDois = parseInt(document.getElementById('valorDois').value);
    switch (opcao) {
        case 1:
            let resultadoSoma = valorUm + valorDois;
            resultadoTela.value = resultadoSoma;
        break;
        case 2:
            let resultadoSubtracao = valorUm - valorDois;
            resultadoTela.value = resultadoSubtracao;
        break;
        case 3:
            let resultadoMultiplicacao = valorUm * valorDois;
            resultadoTela.value = resultadoMultiplicacao;
        break;
        case 4:
            let resultadoDivisao = valorUm / valorDois;
            if (valorDois < 1) {
                window.alert('Não é possível dividir por zero.');
                resultadoTela.value = '';
            } else {
                resultadoTela.value = resultadoDivisao.toFixed(5);
            }
        break;
    }
}

function zerar() {
    let valorUm = document.getElementById('valorUm').value = null;
    let valorDois = document.getElementById('valorDois').value = null;
    let resultado = document.getElementById('resultado').value = null;
}