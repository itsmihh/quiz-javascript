//criar um objeto com as perguntas e alternativas do quiz
const PERGUNTAS_QUIZ = [
    {     
        id: 1,
        pergunta: "Quem é o deus grego do submundo?",
        alternativa01: "Apolo",
        alternativa02: "Hades",
        alternativa03: "Ares",
        alternativa04: "Dionísio",
        alternativaCorreta: "Hades"
    },
    {     
        id: 2,
        pergunta: "Qual deusa é associada à sabedoria e à guerra estratégica?",
        alternativa01: "Ártemis",
        alternativa02: "Hera",
        alternativa03: "Atena",
        alternativa04: "Afrodite",
        alternativaCorreta: "Atena"
    },
    {     
        id: 3,
        pergunta: "Quem foi condenado a empurrar uma pedra eternamente montanha acima?",
        alternativa01: "Teseu",
        alternativa02: "Sísifo",
        alternativa03: "Prometeu",
        alternativa04: "Odisseu",
        alternativaCorreta: "Sísifo"
    },
    {
        id: 4,
        pergunta: "Qual herói matou a Medusa?",
        alternativa01: "Perseu",
        alternativa02: "Hércules",
        alternativa03: "Aquiles",
        alternativa04: "Édipo",
        alternativaCorreta: "Perseu"
    },
    {
        id: 5,
        pergunta: "Quem era o mensageiro dos deuses gregos?",
        alternativa01: "Hermes",
        alternativa02: "Apolo",
        alternativa03: "Cronos",
        alternativa04: "Hefesto",
        alternativaCorreta: "Hermes"
    }
];

let perguntasQuiz = [];
let perguntaAtual = 0;
let pontuacao = 0;

let alternativaA = document.getElementById('alternativaA');
let alternativaB = document.getElementById('alternativaB');
let alternativaC = document.getElementById('alternativaC');
let alternativaD = document.getElementById('alternativaD');
let alternativas = document.querySelectorAll(".alternativa");
let elementoPergunta = document.getElementById('pergunta');

let pontuacaoFinal = document.getElementById('pontuacaoFinal')



//gera uma ordem aleatoria para a exibicao das perguntas e adiciona a ordem no array 'perguntasQuiz'
const gerarPerguntas = () => {
    while (perguntasQuiz.length < PERGUNTAS_QUIZ.length) {
        let indice = Math.floor(Math.random() * PERGUNTAS_QUIZ.length);
            if (!perguntasQuiz.includes(indice)){
                perguntasQuiz.push(indice);
            }
        }
};

const exibirQuestao = () => {
    let pergunta = PERGUNTAS_QUIZ[perguntasQuiz[perguntaAtual]];
    elementoPergunta.innerText = pergunta.pergunta;

    alternativaA.innerText = pergunta.alternativa01;
    alternativaB.innerText = pergunta.alternativa02;
    alternativaC.innerText = pergunta.alternativa03;
    alternativaD.innerText = pergunta.alternativa04;
};

const verificaQuestao = (alternativaSelecionada, botaoClicado) => {
    let pergunta = PERGUNTAS_QUIZ[perguntasQuiz[perguntaAtual]];
    if (alternativaSelecionada === pergunta.alternativaCorreta) {
        console.log("Acertou!");
    } else {
        console.log("Errou!");
    }

    // botaoClicado.classList.remove("resposta-certa", "resposta-errada")


    perguntaAtual++;

    if(perguntaAtual < PERGUNTAS_QUIZ.length) {
        exibirQuestao();
    } else {
        console.log("Quiz finalizado!");
        pontuacaoFinal.innerText = "Pontuação Final: " + pontuacao
    }
};


alternativas.forEach(alternativa => {
    alternativa.addEventListener('click', (event) => {
        let botaoClicado = event.target.classList.add("element");
        verificaQuestao(event.target.innerText, botaoClicado);
    });
});

gerarPerguntas();
exibirQuestao();
