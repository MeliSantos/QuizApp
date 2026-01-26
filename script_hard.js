let questions_hard = [
  {
    "question": "Was passiert mit der Zeit nahe eines schwarzen Lochs?",
    "answer_1": "Sie vergeht schneller",
    "answer_2": "Sie vergeht langsamer",
    "answer_3": "Sie bleibt stehen",
    "answer_4": "Sie läuft rückwärts",
    "correctAnswer": 2
  },
  {
    "question": "Was ist dunkle Materie?",
    "answer_1": "Unsichtbare Materie, die Gravitation ausübt",
    "answer_2": "Leere im Universum",
    "answer_3": "Kalte Sterne",
    "answer_4": "Schwarze Löcher",
    "correctAnswer": 1
  },
  {
    "question": "Welche Art von Galaxie ist die Milchstraße?",
    "answer_1": "Elliptische Galaxie",
    "answer_2": "Unregelmäßige Galaxie",
    "answer_3": "Balkenspiralgalaxie",
    "answer_4": "Kugelgalaxie",
    "correctAnswer": 3
  },
  {
    "question": "Was passiert, wenn ein Stern seinen Kernbrennstoff verbraucht?",
    "answer_1": "Er bleibt unverändert",
    "answer_2": "Er kühlt sofort ab",
    "answer_3": "Er verändert sich stark",
    "answer_4": "Er explodiert immer",
    "correctAnswer": 3
  },
  {
    "question": "Warum können schwarze Löcher nicht direkt gesehen werden?",
    "answer_1": "Sie existieren nicht",
    "answer_2": "Sie reflektieren Licht",
    "answer_3": "Licht kann ihnen nicht entkommen",
    "answer_4": "Sie sind zu klein",
    "correctAnswer": 3
  },
  {
    "question": "Was ist kosmische Hintergrundstrahlung?",
    "answer_1": "Strahlung von der Sonne",
    "answer_2": "Reststrahlung des Urknalls",
    "answer_3": "Licht von schwarzen Löchern",
    "answer_4": "Radiowellen von Planeten",
    "correctAnswer": 2
  },
  {
    "question": "Wie alt ist das Universum ungefähr?",
    "answer_1": "4,5 Milliarden Jahre",
    "answer_2": "10 Millionen Jahre",
    "answer_3": "13,8 Milliarden Jahre",
    "answer_4": "Unendlich alt",
    "correctAnswer": 3
  }
];
let currentQuestion = 0;
let rightAnsweredQuestions = 0;
let AUDIO_right = new Audio('audio/right.mp3');
let AUDIO_wrong = new Audio('audio/wrong.mp3');

function init() {
  document.getElementById('all_questions').innerHTML = questions_hard.length;
  showQuestion();
}

function showQuestion() {

  if (currentQuestion >= questions_hard.length) {
    document.getElementById('endScreen').style = '';
    document.getElementById('questionBody').style = 'display: none';

    document.getElementById('amount-of-questions').innerHTML = questions_hard.length;
    document.getElementById('amount-of-right-questions').innerHTML = rightAnsweredQuestions;
    document.getElementById('header-img').src = 'img/milky-way.jpg';
  } else {

    let question = questions_hard[currentQuestion];
    let percent = (currentQuestion + 1) / questions_hard.length;
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
  let question = questions_hard[currentQuestion]; // damit wir wissen um welche Frage es geht oben
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

