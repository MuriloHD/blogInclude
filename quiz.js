const perguntas = [
    {
    pergunta: "Qual o nome do ator que interpreta Robert Oppenheimer no filme?",
    respostas: [
    "Cillian Murphy",
    "Tom Hanks",
    "Will Smith",
    ],
    correta: 0
    },
    
    {
    pergunta: "Em que ano ocorreu o lançamento do filme 'Oppenheimer'?",
    respostas: [
    "2018",
    "2020",
    "2022",
    ],
    correta: 2
    },
    
    {
    pergunta: "Qual é o principal cenário em que o filme 'Oppenheimer' se passa?",
    respostas: [
    "Los Angeles",
    "Chicago",
    "Los Alamos",
    ],
    correta: 2
    },
    
    {
    pergunta: "Qual foi o nome do projeto secreto do governo dos Estados Unidos para desenvolver a bomba atômica durante a Segunda Guerra Mundial?",
    respostas: [
    "Projeto Manhattan",
    "Projeto Los Alamos",
    "Projeto Trinity",
    ],
    correta: 0
    },
    
    {
    pergunta: "Qual foi a principal motivação de Robert Oppenheimer para trabalhar no projeto da bomba atômica?",
    respostas: [
    "Fama",
    "Curiosidade científica",
    "Vencer a Segunda Guerra Mundial",
    ],
    correta: 2
    },
    
    {
    pergunta: "Além de Robert Oppenheimer, quem foi outro cientista notável envolvido no Projeto Manhattan?",
    respostas: [
    "Niels Bohr",
    "Marie Curie",
    "Stephen Hawking",
    ],
    correta: 0
    },
    
    {
    pergunta: "Em que país Robert Oppenheimer realizou grande parte de suas pesquisas relacionadas à bomba atômica?",
    respostas: [
    "Alemanha",
    "Estados Unidos",
    "União Soviética",
    ],
    correta: 1
    },
    
    {
    pergunta: "Qual foi o local do primeiro teste bem-sucedido de uma bomba nuclear no deserto do Novo México em 1945?",
    respostas: [
    "Trinity Site",
    "Los Alamos",
    "Hiroshima",
    ],
    correta: 0
    },
    
    {
    pergunta: "Qual foi o evento histórico que precipitou o desenvolvimento da bomba atômica pelos Estados Unidos?",
    respostas: [
    "Ataque a Pearl Harbor",
    "Conferência de Potsdam",
    "Bombardeio de Hiroshima",
    ],
    correta: 0
    },
    
    {
    pergunta: "Após o sucesso do Projeto Manhattan, qual foi a posição de Oppenheimer em relação à utilização das armas nucleares?",
    respostas: [
    "Apoiou seu uso em todas as circunstâncias",
    "Manifestou arrependimento e preocupação com as consequências",
    "Propôs a destruição de todas as armas nucleares existentes",
    ],
    correta: 1
    },
];

const quiz = document.querySelector("#quiz")
const template = document.querySelector('template')
const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

for(const item of perguntas){
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta

    for(let resposta of item.respostas){
        const dt = quizItem.querySelector('dl dt').cloneNode(true)
        dt.querySelector('span').textContent = resposta
        dt.querySelector('input').setAttribute('name','pergunta-'+perguntas.indexOf(item))
        dt.querySelector('input').setAttribute('value', item.respostas.indexOf(resposta))
        dt.querySelector('input').onchange = (event) => {
            const estaCorreta = event.target.value == item.correta
            corretas.delete(item)
            if (estaCorreta) {
                corretas.add(item)
            }
            mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
        }

        quizItem.querySelector('dl').appendChild(dt)
    }
    quizItem.querySelector('dl dt').remove()
    quiz.appendChild(quizItem) 
}