// Perguntas do Quiz

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

// Variáveis

const iniciarQuiz = document.querySelector('.iniciar-quiz');
const quiz = document.querySelector('.quiz');

const perguntasQuiz = [];
let elementoPergunta = document.querySelector('#pergunta');

let alternativaA = document.querySelector('#alternativaA');
let alternativaB = document.querySelector('#alternativaB');
let alternativaC = document.querySelector('#alternativaC');
let alternativaD = document.querySelector('#alternativaD');

let alternativas = document.querySelectorAll('.alternativa');

let perguntaAtual = 0;
let pontuacao = 0;


iniciarQuiz.addEventListener('click', function() {

    iniciarQuiz.style.display = 'none';
    indicesAleatorios();
    exibirQuestao();
    quiz.style.display = 'block';

})


// Gera um array de índices aleatórios para mudar a ordem em que as perguntas são apresentadas
const indicesAleatorios = () => {
    while(perguntasQuiz.length < PERGUNTAS_QUIZ.length) {
        let indice = Math.floor(Math.random() * PERGUNTAS_QUIZ.length);
        if (!perguntasQuiz.includes(indice)) {
            perguntasQuiz.push(indice);
        }
    }
};

const exibirQuestao = () => {
    proximaQuestao.disabled = true;
    let pergunta = PERGUNTAS_QUIZ[perguntasQuiz[perguntaAtual]];
    elementoPergunta.innerText = pergunta.pergunta;

    alternativaA.innerText = pergunta.alternativa01;
    alternativaB.innerText = pergunta.alternativa02;
    alternativaC.innerText = pergunta.alternativa03;
    alternativaD.innerText = pergunta.alternativa04;

}


alternativas.forEach(alternativa => {
    alternativa.addEventListener('click', () => {
        alternativas.forEach(a => a.classList.remove('alternativa-selecionada'));

        alternativa.classList.add('alternativa-selecionada');
        let alternativaSelecionada = document.querySelector('.alternativa-selecionada').innerText;

        habilitarBotao();
        verificaAlternativa(alternativaSelecionada);

    });
});

const verificaAlternativa = (alternativa) => {
    const resposta = PERGUNTAS_QUIZ[perguntasQuiz[perguntaAtual]].alternativaCorreta;

    if(alternativa === resposta) {
        console.log("Resposta Correta!")
        pontuacao ++;
    } else {
        console.log("Resposta Errada!")
    }
}

const proximaQuestao = document.querySelector('#proxima-questao');
proximaQuestao.addEventListener('click', function() {

        if(perguntaAtual < perguntasQuiz.length-1) {
            perguntaAtual ++;
            console.log(perguntaAtual);
            exibirQuestao();
        } else {
            console.log("Fim do quiz!");
        }

    alternativas.forEach(alternativa => {
        alternativa.classList.remove('alternativa-selecionada');
    });

});

const habilitarBotao = () => {
    proximaQuestao.disabled = false;
}

console.log(perguntasQuiz);
console.log(perguntasQuiz.length);
console.log("Pontuação final:" + pontuacao)


