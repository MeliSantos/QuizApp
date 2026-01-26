
let questions_medium = [
  {
    "question": "Warum hat der Mond verschiedene Phasen?",
    "answer_1": "Weil er seine Form ändert",
    "answer_2": "Weil sich der Abstand zur Erde ändert",
    "answer_3": "Weil wir unterschiedlich beleuchtete Teile sehen",
    "answer_4": "Wegen Wolken im All",
    "correctAnswer": 3
  },
  {
    "question": "Welcher Planet hat die meisten Monde?",
    "answer_1": "Erde",
    "answer_2": "Jupiter",
    "answer_3": "Mars",
    "answer_4": "Venus",
    "correctAnswer": 2
  },
  {
    "question": "Was ist ein Lichtjahr?",
    "answer_1": "Eine Zeiteinheit",
    "answer_2": "Die Entfernung, die Licht in einem Jahr zurücklegt",
    "answer_3": "Die Zeit, die die Erde um die Sonne braucht",
    "answer_4": "Die Entfernung zwischen Erde und Mond",
    "correctAnswer": 2
  },
  {
    "question": "Was verursacht die Jahreszeiten auf der Erde?",
    "answer_1": "Der Abstand zur Sonne",
    "answer_2": "Die Erdrotation",
    "answer_3": "Die Neigung der Erdachse",
    "answer_4": "Der Mond",
    "correctAnswer": 3
  },
  {
    "question": "Was ist eine Supernova?",
    "answer_1": "Die Geburt eines Sterns",
    "answer_2": "Die Explosion eines massereichen Sterns",
    "answer_3": "Ein schwarzes Loch",
    "answer_4": "Ein neuer Planet",
    "correctAnswer": 2
  },
  {
    "question": "Welche Farbe haben die heißesten Sterne?",
    "answer_1": "Rot",
    "answer_2": "Gelb",
    "answer_3": "Blau",
    "answer_4": "Weiß",
    "correctAnswer": 3
  },
  {
    "question": "Warum können wir Sterne tagsüber kaum sehen?",
    "answer_1": "Sie sind aus",
    "answer_2": "Die Sonne überstrahlt sie",
    "answer_3": "Die Atmosphäre blockiert sie",
    "answer_4": "Sie bewegen sich zu schnell",
    "correctAnswer": 2
  }
];
let currentQuestion = 0;
let rightAnsweredQuestions = 0;
let AUDIO_right = new Audio('audio/right.mp3');
let AUDIO_wrong = new Audio('audio/wrong.mp3');

function init() {
  document.getElementById('all_questions').innerHTML = questions_medium.length;
  showQuestion();
}

function showQuestion() {

  if (currentQuestion >= questions_medium.length) {
    document.getElementById('endScreen').style = '';
    document.getElementById('questionBody').style = 'display: none';

    document.getElementById('amount-of-questions').innerHTML = questions_medium.length;
    document.getElementById('amount-of-right-questions').innerHTML = rightAnsweredQuestions;
    document.getElementById('header-img').src = 'img/milky-way.jpg';
  } else {

    let question = questions_medium[currentQuestion];
    let percent = (currentQuestion + 1) / questions_medium.length;
    percent = Math.round(percent * 100);

    document.getElementById('progressBar').style = `width: ${percent}%`;
    document.getElementById('question-number').innerHTML = currentQuestion + 1;
    document.getElementById('question_text').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
  }
}

function answer(selection) {
  let question = questions_medium[currentQuestion]; // damit wir wissen um welche Frage es geht oben
  let selectedQuestionNumber = selection.slice(-1); // hier wird der letzte character von der selection also answer_3 zB die 3 genommen in eine variable um es später bei der if else zu verwenden 
  let idOfRightAnswer = `answer_${question['correctAnswer']}` // hier wird der value ${question['correctAnswer'] genommen und eine var gegeben um die farbe zu ändern als richtige antwort

  if (selectedQuestionNumber == question['correctAnswer']) {
    document.getElementById(selection).parentNode.classList.add('bg-success'); // parent.Node -> hier wird sich auf den parent div bezogen 
    AUDIO_right.play();
    rightAnsweredQuestions++;
  } else {
    document.getElementById(selection).parentNode.classList.add('bg-danger'); // classList.add -> hier wird eine neue classe hinzugefügt (Hier: farbe bei den button)
    document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success'); // die ID selection wird genommen weil das dasselbe ist wie die ID bei html weil wir eine onclick funktion da stehen haben, die idOfRightAnswer ist die variable oben wo wir die beliebige richtige antwort mit verknüpft haben
    AUDIO_wrong.play();
  }
  document.getElementById('next-button').disabled = false; // der disabled status den wir bei html gegeben haben wird hiermit entfernt
}

function nextQuestion() {
  currentQuestion++; // index von 0 auf 1 bei den Fragen im Json Array
  document.getElementById('next-button').disabled = true;
  resetAnswerButton()
  showQuestion(); // wird nun angezeigt weil wir die Funktion aufrufen
}

function resetAnswerButton() { // Farbe Buttons soll reseted werden für die nächste Frage

  document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
  document.getElementById('answer_1').parentNode.classList.remove('bg-success');
  document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
  document.getElementById('answer_2').parentNode.classList.remove('bg-success');
  document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
  document.getElementById('answer_3').parentNode.classList.remove('bg-success');
  document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
  document.getElementById('answer_4').parentNode.classList.remove('bg-success');
}

function restartGame(){

currentQuestion = 0;
rightAnsweredQuestions = 0;
 document.getElementById('endScreen').style = 'display: none'; // Endscreen ausblenden
 document.getElementById('questionBody').style = ''; // Questionbody wieder anzeigen 

init();
}

