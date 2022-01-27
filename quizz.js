/*Comment sont construitent les question*/
class Question {
    constructor(text, choices, answer) {
      this.text = text;
      this.choices = choices;
      this.answer = answer;
    }
    isCorrectAnswer(choice) {
      return this.answer === choice;
    }
  }



  /* Les quetions et les réponses */
  let questions = [
    new Question("Qui est le sélectioneur actuel de l'équipe de France ?", ["Antonio COMTE","Laurent BLANC","Didier DESCHAPMS","Antoine KOUMBOIRE"],
    "Didier DESCHAPMS"),
    new Question("Qui est le meilleur buteur en 2021 ?", ["Kylian MBAPPE", "Robert LEWANDOWSKI", "Neymar da Silva Santos Júnior","Lionel MESSI"],
    "Robert LEWANDOWSKI"),
    new Question("Qui a gagné le Ballon d'or en 2021 ?", ["Robert LEWANDOWSKI","Cristiano RONALDO", "Lionel MESSI", "Karim BENZEMA"], 
    "Lionel MESSI"),
    new Question("Quel est le joueur le plus petit de l'équipe de France ?", ["Paul POGBA","Antoine GRIEZMAN", "N'golo KANTE", "Adrien RABIOT"], 
    "N'golo KANTE"),
    new Question("Qui a gagné la Ligue des Champion en 2021 ?" ,["Chelsea","Barcelone","Bayern Munich","Real Madrid"],
    "Chelsea"),
    new Question("De quel nationalité Ronaldinho ?",["Portutais","Colombien","Brésilien","Américain"],
    "Brésilien"),
    new Question("Qui a marqué le but vainqueur en finale de la Coupe du Monde 2010 ?" ,["Andres INIESTA","David VILLA","Xavi", "Xavi ALONSO"],
    "Andres INIESTA"),
    new Question("Qui a le plus de buts en carrière ?",["Messi","Ronaldo", "Karim BENZEMA","Luis SUAREZ"],
    "Ronaldo"),
    new Question("Dans quel club Ricardo Quaresma n'a-t-il jamais joué ?" ,["Inter Milan","Manchester United","Chelsea","FC Barcelone"],
    "Manchester United"),
    new Question("Dans quel club Philippe Coutinho a-t-il déjà joué ?" ,["Inter Milan","Bruges","Benfica","Flamengo"],
    "Inter Milan"),    
  ];
  
  console.log(questions);


  /* Le socre du quizz qui s'affiche a la fin */
  class Quiz {
    constructor(questions) {
      this.score = 0;
      this.questions = questions;
      this.currentQuestionIndex = 0;
    }
    getCurrentQuestion() {
      return this.questions[this.currentQuestionIndex];
    }
    guess(answer) {
      if (this.getCurrentQuestion().isCorrectAnswer(answer)) {
        this.score++;
      }
      this.currentQuestionIndex++;
    }
    hasEnded() {
      return this.currentQuestionIndex >= this.questions.length;
    }
  }
  const display = {
    elementShown: function(id, text) {
      let element = document.getElementById(id);
      element.innerHTML = text;
    },



    /* La page de fin du quizz*/
    endQuiz: function() {
      endQuizHTML = `
        <h1>Bravo,<br>Merci d'avoir fini le My Quizz  !</h1>
        <h3>Ton résultat est de : ${quiz.score} / ${quiz.questions.length}</h3>
        <p> Nous te disons à bientot pour un nouveau MyQuizz  !!</p> <br>
        <a href="index.html" class="btn btn-primary">Accueil</a>`;
      this.elementShown("quiz", endQuizHTML);
    },
    question: function() {
      this.elementShown("question", quiz.getCurrentQuestion().text);
    },
    choices: function() {
      let choices = quiz.getCurrentQuestion().choices;
  
      guessHandler = (id, guess) => {
        document.getElementById(id).onclick = function() {
          quiz.guess(guess);
          quizApp();
        }
      }
      for(let i = 0; i < choices.length; i++) {
        this.elementShown("choice" + i, choices[i]);
        guessHandler("guess" + i, choices[i]);
      }
    },

    progress: function() {
      let currentQuestionNumber = quiz.currentQuestionIndex + 1;
      this.elementShown("progress", "Question " + currentQuestionNumber + " sur " + quiz.questions.length);
    },
  };

  quizApp = () => {
    if (quiz.hasEnded()) {
      display.endQuiz();
    } else {
      display.question();
      display.choices();
      display.progress();
    } 
  }


  let quiz = new Quiz(questions);
  quizApp();
  
  console.log(quiz);