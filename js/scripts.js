let display = document.getElementById('display');
let valorAtual = '';
let operacaoAnterior = null;

function adicionarNumero(numero) {
    valorAtual += numero;
    display.value = valorAtual;
}

function adicionarOperador(operador) {
    if (valorAtual === '') {
        return;
    }

    if (operacaoAnterior !== null) {
        calcular();
    }

    operacaoAnterior = operador;
    valorAtual = '';
    display.value = valorAtual;
}

function calcular() {
    if (valorAtual === '') {
        return;
    }

    let resultado = parseFloat(valorAtual);

    if (operacaoAnterior === '+') {
        resultado += parseFloat(valorAnterior);
    } else if (operacaoAnterior === '-') {
        resultado -= parseFloat(valorAnterior);
    } else if (operacaoAnterior === '*') {
        resultado *= parseFloat
    }
}