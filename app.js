let listaDeNumerosSorteados = [];
let numeroLimite = 100;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

exibirMensagemInicial();

function escreverTexto(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = ''
}

function exibirMensagemInicial() {
    escreverTexto('h1', 'Jogo do número secreto.');
    escreverTexto('p', `Digite um número entre 1 e ${numeroLimite}`);
}

function verificarChute() {
    let mensagemTentativa = `Você descobriu o número secreto com ${tentativas} tentativas!`;
    let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} tentativa!`;
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
        escreverTexto('h1', 'Acertou!');
        tentativas > 1 ? escreverTexto('p', mensagemTentativa) : escreverTexto('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else if (numeroSecreto > chute) {
        escreverTexto('p', 'O número secreto é maior que seu chute.');
    } else {
        escreverTexto('p', 'O número secreto é menor que seu chute.');
    }
    tentativas++;
    limparCampo();
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function reiniciarJogo() {
     numeroSecreto = gerarNumeroAleatorio();
     limparCampo();
     tentativas = 1;
     exibirMensagemInicial();
     document.getElementById('reiniciar').setAttribute('disabled', true);
}
