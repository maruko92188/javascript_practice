// https://www.freecodecamp.org/learn/javascript-v9/lab-quiz-game/lab-quiz-game

const questions = [
  {category: "Geography", question: "What is the capital of France?", choices: ["London", "Berlin", "Paris"], answer: "Paris"},
  {category: "Science", question: "Which planet is known as the Red Planet?", choices: ["Mars", "Venus", "Jupiter"], answer: "Mars"},
  {category: "Animals", question: "Which is the largest mammal in the world?", choices: ["African Elephant", "Blue Whale", "Giraffe"], answer: "Blue Whale"},
  {category: "General Knowledge", question: "How many days are there in a leap year?", choices: ["365", "366", "364"], answer: "366"},
  {category: "Food & Drink", question: "Which fruit is traditionally used to make guacamole?", choices: ["Tomato", "Avocado", "Lime"], answer: "Avocado"}
];

function getRandomQuestion(questions) {
  const selectedNumber = Math.floor(Math.random() * questions.length);
  return questions[selectedNumber];
}

function getRandomComputerChoice(choices) {
  const selectedAnswer = Math.floor(Math.random() * choices.length);
  return choices[selectedAnswer];
}

function getResults(question, choice) {
  if(question.answer === choice) {
    return "The computer's choice is correct!";
  } else {
    return `The computer's choice is wrong. The correct answer is: ${question.answer}`;
  };
}
