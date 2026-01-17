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
    "question": "Welcher Planet ist der Erde am nächsten?",
    "answer_1": "Mars",
    "answer_2": "Venus",
    "answer_3": "Jupiter",
    "answer_4": "Saturn",
    "correctAnswer": 2
  },
  {
    "question": "Wie heißt unsere Galaxie?",
    "answer_1": "Andromeda",
    "answer_2": "Milchstraße",
    "answer_3": "Orion",
    "answer_4": "Pegasus",
    "correctAnswer": 2
  },
  {
    "question": "Was kreist um die Erde?",
    "answer_1": "Die Sonne",
    "answer_2": "Der Mars",
    "answer_3": "Der Mond",
    "answer_4": "Ein Komet",
    "correctAnswer": 3
  },
  {
    "question": "Welcher Planet ist der größte im Sonnensystem?",
    "answer_1": "Erde",
    "answer_2": "Mars",
    "answer_3": "Jupiter",
    "answer_4": "Neptun",
    "correctAnswer": 3
  },
  {
    "question": "Was ist ein schwarzes Loch?",
    "answer_1": "Ein leerer Raum",
    "answer_2": "Ein sehr dichter Sternrest",
    "answer_3": "Ein Planet ohne Licht",
    "answer_4": "Eine Galaxie",
    "correctAnswer": 2
  },
  {
    "question": "Wie lange braucht das Licht der Sonne zur Erde?",
    "answer_1": "8 Minuten",
    "answer_2": "8 Sekunden",
    "answer_3": "1 Stunde",
    "answer_4": "1 Tag",
    "correctAnswer": 1
  },
  {
    "question": "Welcher Planet wird der rote Planet genannt?",
    "answer_1": "Venus",
    "answer_2": "Mars",
    "answer_3": "Merkur",
    "answer_4": "Uranus",
    "correctAnswer": 2
  }
];

let currentQuestion = 0;

function init() {
  document.getElementById('all_questions').innerHTML = questions_easy.length;

  showQuestion();
}

function showQuestion() {
  let question = questions_easy[currentQuestion];

  document.getElementById('question_text').innerHTML = question['question'];
  document.getElementById('answer_1').innerHTML = question['answer_1'];
  document.getElementById('answer_2').innerHTML = question['answer_2'];
  document.getElementById('answer_3').innerHTML = question['answer_3'];
  document.getElementById('answer_4').innerHTML = question['answer_4'];

}

function answer(selection) {
  let question = questions_easy[currentQuestion]; // damit wir wissen um welche Frage es geht oben
  let selectedQuestionNumber = selection.slice(-1); // hier wird der letzte character von der selection also answer_3 zB die 3 genommen in eine variable um es später bei der if else zu verwenden 
  let idOfRightAnswer = `answer_${question['correctAnswer']}` // hier wird der value ${question['correctAnswer'] genommen und eine var gegeben um die farbe zu ändern als richtige antwort

  if (selectedQuestionNumber == question['correctAnswer']) {
    document.getElementById(selection).parentNode.classList.add('bg-success'); // parent.Node -> hier wird sich auf den parent div bezogen 
  } else {
    document.getElementById(selection).parentNode.classList.add('bg-danger'); // classList.add -> hier wird eine neue classe hinzugefügt (Hier: farbe bei den button)
    document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success'); // die ID selection wird genommen weil das dasselbe ist wie die ID bei html weil wir eine onclick funktion da stehen haben, die idOfRightAnswer ist die variable oben wo wir die beliebige richtige antwort mit verknüpft haben
  }
  document.getElementById('next-button').disabled = false; // der disabled status den wir bei html gegeben haben wird hiermit entfernt
}

function nextQuestion(){
  currentQuestion++; // index von 0 auf 1 bei den Fragen im Json Array
  showQuestion(); // wird nun angezeigt weil wir die Funktion aufrufen
}