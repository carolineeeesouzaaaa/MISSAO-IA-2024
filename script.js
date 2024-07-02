const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');
const perguntas = [
    {
        enunciado: "Pergunta 1",
        alternativas: [
            {
                texto: "Alternativa 1", 
                afirmação: "Afirmação da alternativa 1"
            },
            {
                texto: "Alternativa 2",
            afirmação: "Afirmação da alternativa 2"
    }]  
    },

    {
        enunciado: "Pergunta 2",
        alternativas: [
            {
                texto: "Alternativa 1", 
                afirmação: "Afirmação da alternativa 1"
            },
            {
                texto: "Alternativa 2",
            afirmação: "Afirmação da alternativa 2"
    }]
    },

    {
        enunciado: "Pergunta 3",
        alternativas: [
            {
                texto: "Alternativa 1",
                afirmação: "Afirmação da alternativa 1"
             },
             {
                texto: "Alternativa 2",
            afirmação: "Afirmação da alternativa 2"
    }]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado
    mostraAlternativas();
}
function mostraAlternativas() {
   for (const alternativa of perguntaAtual.alternativas) {
    const botaoAlternativas = 
    document.createElement("button");
    botaoAlternativas.textContent = alternativa.texto;
    botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
    caixaAlternativas.appendChild(botaoAlternativas);
   }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmação;
    historiaFinal = afirmacoes;
    atual++;
    mostraPergunta();
}
mostraPergunta();