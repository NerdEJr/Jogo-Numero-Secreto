let listaDeNumerosSorteados = [];
let numeroMaximoParaSortear = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
console.log(numeroSecreto);
mensagemInicial();

function mensagemInicial(){
    exibirTextoNaTela("h1", "Jogo do Número Secreto");
    exibirTextoNaTela("p", "Escreva um número de 1 a 10");
}

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, "Brazilian Portuguese Female", {rate:1.2});
}

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * numeroMaximoParaSortear + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if(quantidadeDeElementosNaLista == numeroMaximoParaSortear){
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }
    else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function verificarChute(){
    let chute = document.querySelector("input").value;
    
    if(chute == numeroSecreto){
        let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
        let mensagem = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela("h1", "Acertou !");
        exibirTextoNaTela("p", mensagem);
        document.getElementById("reiniciar").removeAttribute("disabled");
    }
    else if (chute < numeroSecreto){
        exibirTextoNaTela("p", "o número secreto é maior");
    }
    else{
        exibirTextoNaTela("p", "o número secreto é menor");
    }
    tentativas++;
    limparCampo();
}

function limparCampo(){
    chute = document.querySelector("input");
    chute.value = "";
}

function reiniciarJogo(){
    mensagemInicial();
    tentativas = 1;
    numeroSecreto = gerarNumeroAleatorio();
    document.getElementById("reiniciar").setAttribute("disabled", true);
}




