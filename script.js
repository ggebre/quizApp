
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
const submitBtn = document.getElementById("submitBtn")
const questionE1 = document.getElementById('question')
const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')

const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')


let currentQuiz = 0;
let score = 0

loadQuiz();

function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionE1.innerHTML = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function getSelected() {
    let answer = undefined
    answerEls.forEach(answerE1 => {
        if(answerE1.checked){
            answer = answerE1.id
        }
    })
    return answer
}
function deselectAnswers(){
    answerEls.forEach(answerE1 => {
        answerE1.checked = false 
    })
}
submitBtn.addEventListener('click', () => {

    const answer  = getSelected() 
    
    if(answer){
        if (answer === quizData[currentQuiz].correct){
            score++
        }
        currentQuiz++
        if(currentQuiz < quizData.length){
            loadQuiz()
        }else{
                // SHOW RESULT
            quiz.innerHTML = `<h2>You answered correctly ${score} / ${quizData.length} questions.</h2><button onclick=location.reload()>Reload</button>`
        }
    }
    
})
