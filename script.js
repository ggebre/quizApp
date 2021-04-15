
const quizData = [
    {
        question: 'How old is Getu?',
        a: '40',
        b: '39',
        c: '41',
        d: '42',
        correct: 'c'
    },
    {
        question: "What was the most used programming Language?",
        a: 'Java',
        b: 'C',
        c: 'Python',
        d: 'JavaScript',
        correct: 'a'
    },
    {
        question: "Who is the current president of USA?",
        a: "Obama",
        b: "Trump",
        c: "Biden",
        d: "Kamala",
        correct: 'c'
    },
    {
        question: "What does HTML stands for?",
        a: "HyperText Markup Language",
        b: 'Cascading Style Sheet',
        c: 'JavaScript Object Notation',
        d: 'Application Program Interface',
        correct: 'a'
    },
    {
        question: "What year was JS launched?",
        a: '2020',
        b: '1995',
        c: '1996',
        d: '1994',
        correct: 'b'
    }
]

const questionE1 = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')


let currentQuiz = 0;
loadQuiz();

function loadQuiz() {
    const currentQuizData = quizData[currentQuiz]
    questionE1.innerHTML = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d



    currentQuiz++
}