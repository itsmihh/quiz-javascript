//criar um objeto com as perguntas e alternativas do quiz
const PERGUNTAS_QUIZ = [
    {     
        id: 1,
        pergunta: "Teste da primeira pergunta",
        "primeira alternativa": "primeira alternativa",
        "segunda alternativa": "segunda alternativa",
        "alternativa correta": "alternativa correta",
        "quarta alternativa": "quarta alternativa"
    },

    {     
        id: 2,
        pergunta: "Teste da segunda pergunta",
        "primeira alternativa": "primeira alternativa",
        "segunda alternativa": "segunda alternativa",
        "alternativa correta": "alternativa correta",
        "quarta alternativa": "quarta alternativa"
    },

    {     
        id: 3,
        pergunta: "Teste da terceira pergunta",
        "primeira alternativa": "primeira alternativa",
        "segunda alternativa": "segunda alternativa",
        "alternativa correta": "alternativa correta",
        "quarta alternativa": "quarta alternativa"
    }
]

let numeroPerguntas = PERGUNTAS_QUIZ.length
var perguntasQuiz = []

var alternativaA = document.getElementById('alternativaA');
var alternativaB = document.getElementById('alternativaB');
var alternativaC = document.getElementById('alternativaC');
var alternativaD = document.getElementById('alternativaD');

//gera uma ordem aleatoria para a exibicao das perguntas e adiciona a ordem no array 'perguntasQuiz'
const gerarPerguntas = (numeroPerguntas, perguntasQuiz) => {

    while (perguntasQuiz.length < numeroPerguntas) {
        var indicePergunta = Math.floor(Math.random() * numeroPerguntas);
            if (!perguntasQuiz.includes(indicePergunta)){
                perguntasQuiz.push(indicePergunta);
            }
        }
    
    return perguntasQuiz;
}

const exibirQuestao = (perguntasQuiz, alternativaA, alternativaB, alternativaC, alternativaD) => {

    let pergunta = document.getElementById('pergunta');
    pergunta.innerHTML = PERGUNTAS_QUIZ[perguntasQuiz[0]].pergunta;

    alternativaA.innerText = PERGUNTAS_QUIZ[perguntasQuiz[0]]["primeira alternativa"];
    alternativaB.innerText = PERGUNTAS_QUIZ[perguntasQuiz[0]]["segunda alternativa"];
    alternativaC.innerText = PERGUNTAS_QUIZ[perguntasQuiz[0]]["alternativa correta"];
    alternativaD.innerText = PERGUNTAS_QUIZ[perguntasQuiz[0]]["quarta alternativa"];

    alternativaA.addEventListener('click', verificaQuestao(alternativaA));
    alternativaB.addEventListener('click', verificaQuestao(alternativaB));
    alternativaC.addEventListener('click', verificaQuestao(alternativaC));
    alternativaD.addEventListener('click', verificaQuestao(alternativaD));
}

// const verificaQuestao = (alternativa, perguntasQuiz) => {
//     if (alternativa === PERGUNTAS_QUIZ[perguntasQuiz[0]]["alternativa correta"]) {
//         console.log("Acertou!")
//     } else {
//         console.log("Errou!")
//     }
// }



console.log(gerarPerguntas(numeroPerguntas, perguntasQuiz));

console.log(PERGUNTAS_QUIZ[perguntasQuiz[0]].pergunta);

exibirQuestao(perguntasQuiz, alternativaA, alternativaB, alternativaC, alternativaD)



