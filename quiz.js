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
    },
    {
        id: 6,
        pergunta: "Qual deusa grega nasceu da espuma do mar?",
        alternativa01: "Atena",
        alternativa02: "Ártemis",
        alternativa03: "Afrodite",
        alternativa04: "Hera",
        alternativaCorreta: "Afrodite"
    },
    {
        id: 7,
        pergunta: "Qual é o nome da criatura mitológica com cabeça de touro e corpo de homem, que habitava o labirinto de Creta?",
        alternativa01: "Centauro",
        alternativa02: "Minotauro",
        alternativa03: "Quimera",
        alternativa04: "Cérbero",
        alternativaCorreta: "Minotauro"
    },
    {
        id: 8,
        pergunta: "Qual é o deus do vinho e das festas?",
        alternativa01: "Ares",
        alternativa02: "Dionísio",
        alternativa03: "Poseidon",
        alternativa04: "Hefesto",
        alternativaCorreta: "Dionísio"
    },
    {
        id: 9,
        pergunta: "Quem é o ferreiro dos deuses, deus do fogo e da forja?",
        alternativa01: "Ares",
        alternativa02: "Apolo",
        alternativa03: "Hefesto",
        alternativa04: "Hermes",
        alternativaCorreta: "Hefesto"
    },
    {
        id: 10,
        pergunta: "Quem é o deus grego da guerra?",
        alternativa01: "Ares",
        alternativa02: "Zeus",
        alternativa03: "Hades",
        alternativa04: "Hermes",
        alternativaCorreta: "Ares"
    },
    {
        id: 11,
        pergunta: "Quem era a esposa de Hades?",
        alternativa01: "Afrodite",
        alternativa02: "Perséfone",
        alternativa03: "Atena",
        alternativa04: "Hera",
        alternativaCorreta: "Perséfone"
    },
    {
        id: 12,
        pergunta: "Qual herói foi mergulhado no rio Estige e se tornou quase invencível?",
        alternativa01: "Aquiles",
        alternativa02: "Orfeu",
        alternativa03: "Édipo",
        alternativa04: "Jasão",
        alternativaCorreta: "Aquiles"
    },
    {
        id: 13,
        pergunta: "Qual é o nome da deusa da colheita, mãe de Perséfone?",
        alternativa01: "Deméter",
        alternativa02: "Hera",
        alternativa03: "Gaia",
        alternativa04: "Héstia",
        alternativaCorreta: "Deméter"
    },
    {
        id: 14,
        pergunta: "Quem navegou com os Argonautas em busca do Velocino de Ouro?",
        alternativa01: "Perseu",
        alternativa02: "Jasão",
        alternativa03: "Teseu",
        alternativa04: "Aquiles",
        alternativaCorreta: "Jasão"
    },
    {
        id: 15,
        pergunta: "Qual criatura guardava a entrada do submundo, impedindo que os mortos escapassem?",
        alternativa01: "Esfinge",
        alternativa02: "Minotauro",
        alternativa03: "Cérbero",
        alternativa04: "Hidra",
        alternativaCorreta: "Cérbero"
    },
    {
        id: 16,
        pergunta: "Quem era o rei que tudo que tocava virava ouro?",
        alternativa01: "Minos",
        alternativa02: "Midas",
        alternativa03: "Agamenon",
        alternativa04: "Laio",
        alternativaCorreta: "Midas"
    }
];

// Variáveis
const iniciarQuiz = document.querySelector('.iniciar-quiz');
const quiz = document.querySelector('.quiz');
const numeroQuestao = document.querySelector('#numero-questao')
const gabarito = document.querySelector('.gabarito');
const respostaGabarito = document.querySelector('#resposta-gabarito')
const pontuacaoFinal = document.querySelector('#pontuacao');
const mensagem = document.querySelector('#mensagem');
const containerRespostas = document.querySelector('#container-respostas')
const recomecar = document.querySelector('#recomecar');

const perguntasQuiz = [];
let elementoPergunta = document.querySelector('#pergunta');

let alternativaA = document.querySelector('#alternativaA');
let alternativaB = document.querySelector('#alternativaB');
let alternativaC = document.querySelector('#alternativaC');
let alternativaD = document.querySelector('#alternativaD');

let alternativas = document.querySelectorAll('.alternativa');


let perguntaAtual = 0;
let pontuacao = 0;

let respostasQuiz = [];
let respostasUsuario = [];

const inicia = () => {

    iniciarQuiz.style.display = 'none';
    indicesAleatorios();
    exibirQuestao();
    quiz.style.display = 'block';

}

iniciarQuiz.addEventListener('click', inicia);


// Gera um array de índices aleatórios para mudar a ordem em que as perguntas são apresentadas
const indicesAleatorios = () => {
    while(perguntasQuiz.length < 10) {
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

    if(perguntaAtual === perguntasQuiz.length-1) {
        proximaQuestao.innerText = "Finalizar";
    }

    numeroQuestao.innerText = perguntaAtual + 1;
}

alternativas.forEach(alternativa => {
    alternativa.addEventListener('click', () => {
        alternativas.forEach(a => a.classList.remove('alternativa-selecionada'));

        alternativa.classList.add('alternativa-selecionada');

        habilitarBotao();
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

    respostasQuiz.push(resposta);
    respostasUsuario.push(alternativa);
}

const proximaQuestao = document.querySelector('#proxima-questao');
proximaQuestao.addEventListener('click', function() {

    const alternativaSelecionada = document.querySelector('.alternativa-selecionada');

    if (alternativaSelecionada) {
        verificaAlternativa(alternativaSelecionada.innerText);
    }

        if(perguntaAtual < perguntasQuiz.length-1) {
            perguntaAtual ++;
            exibirQuestao();
        } 
        
        else {
            gabaritoQuiz();
            console.log("Fim do quiz!");
        }

    alternativas.forEach(alternativa => {
        alternativa.classList.remove('alternativa-selecionada');
    });

});

const habilitarBotao = () => {
    proximaQuestao.disabled = false;
}

const gabaritoQuiz = () => {
    quiz.style.display = 'none';
    gabarito.style.display = 'flex';

    pontuacaoFinal.append("Sua pontuação foi: " + pontuacao + " / " + perguntasQuiz.length)

    if(pontuacao >= 7 && pontuacao <= 10) {
        mensagem.innerText = "Você foi coroado como um verdadeiro semideus! Os deuses aplaudem sua sabedoria mitológica."
    } 

    else if (pontuacao <=6  && pontuacao >= 4) {
        mensagem.innerText = "Atena reconhece seu esforço! Você conhece alguns segredos do Olimpo, mas ainda há muito a aprender."
    } 
    
    else {
        mensagem.innerText = "Zeus está prestes a te expulsar do Olimpo! Talvez seja hora de rever os pergaminhos sagrados da mitologia..."
    }


    for (let i = 0; i < respostasUsuario.length; i ++) {

        const item = document.createElement('div');
        item.classList.add("resposta-item");

        const bolinha = document.createElement("span");
        bolinha.classList.add("bolinha");

        bolinha.textContent = i + 1;

        if(respostasUsuario[i] === respostasQuiz[i]) {
            bolinha.classList.add("correta");
        } else {
            bolinha.classList.add("errada");
        }

        const texto = document.createElement('span');
        texto.classList.add("texto-resposta");

        texto.innerText = respostasQuiz[i];

        item.appendChild(bolinha);
        item.appendChild(texto);
        containerRespostas.appendChild(item);
    }
}

recomecar.addEventListener('click', function() {
     gabarito.style.display = 'none';

    pontuacao = 0;
    perguntaAtual = 0;
    perguntasQuiz.length = 0;
    respostasQuiz = [];
    respostasUsuario = [];

    mensagem.innerText = "";
    pontuacaoFinal.innerText = "";
    containerRespostas.innerHTML = "";
    proximaQuestao.innerText = "Próxima";

    inicia();
});