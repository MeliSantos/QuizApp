let questions_easy = [
  {
    "question": "Was ist die Sonne?",
    "answer_1": "Ein Planet",
    "answer_2": "Ein Stern",
    "answer_3": "Ein Mond",
    "answer_4": "Ein Komet",
    "correctAnswer": 2
  },
  {
    question: "Welcher Planet ist der Erde am nächsten?",
    answer_1: "Mars",
    answer_2: "Venus",
    answer_3: "Jupiter",
    answer_4: "Saturn",
    correctAnswer: 2
  },
  {
    question: "Wie heißt unsere Galaxie?",
    answer_1: "Andromeda",
    answer_2: "Milchstraße",
    answer_3: "Orion",
    answer_4: "Pegasus",
    correctAnswer: 2
  },
  {
    question: "Was kreist um die Erde?",
    answer_1: "Die Sonne",
    answer_2: "Der Mars",
    answer_3: "Der Mond",
    answer_4: "Ein Komet",
    correctAnswer: 3
  },
  {
    question: "Welcher Planet ist der größte im Sonnensystem?",
    answer_1: "Erde",
    answer_2: "Mars",
    answer_3: "Jupiter",
    answer_4: "Neptun",
    correctAnswer: 3
  },
  {
    question: "Was ist ein schwarzes Loch?",
    answer_1: "Ein leerer Raum",
    answer_2: "Ein sehr dichter Sternrest",
    answer_3: "Ein Planet ohne Licht",
    answer_4: "Eine Galaxie",
    correctAnswer: 2
  },
  {
    question: "Wie lange braucht das Licht der Sonne zur Erde?",
    answer_1: "8 Minuten",
    answer_2: "8 Sekunden",
    answer_3: "1 Stunde",
    answer_4: "1 Tag",
    correctAnswer: 1
  },
  {
    question: "Welcher Planet wird der rote Planet genannt?",
    answer_1: "Venus",
    answer_2: "Mars",
    answer_3: "Merkur",
    answer_4: "Uranus",
    correctAnswer: 2
  }
];

let currentQuestion = 0;

function init(){
    document.getElementById('all_questions').innerHTML= questions_easy.length;

    showQuestion();
}

function showQuestion(){
let question = questions_easy[currentQuestion];

    document.getElementById('question_text').innerHTML= question['question'];
    document.getElementById('answer_1').innerHTML= question['answer_1'];
    document.getElementById('answer_2').innerHTML= question['answer_2'];
    document.getElementById('answer_3').innerHTML= question['answer_3'];
    document.getElementById('answer_4').innerHTML= question['answer_4'];

}
