import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import QuizPage from "./QuizPage";

function GamePage() {
  const [quizData, setQuizData] = useState([]);
  const [newQuiz, setNewQuiz] = useState(false);

  useEffect(() => {
    async function getQuiz() {
      const res = await fetch(
        "https://opentdb.com/api.php?amount=5&category=31&encode=base64"
      );
      const data = await res.json();
      setQuizData(data.results);
    }
    getQuiz();
  }, [newQuiz]);

  // Shuffle array
  let arrayShuffle = function (arr) {
    let newPos, temp;

    for (let i = arr.length - 1; i > 0; i--) {
      newPos = Math.floor(Math.random() * (i + 1));
      temp = arr[i];
      arr[i] = arr[newPos];
      arr[newPos] = temp;
    }
    return arr;
  };

  // Create array with de data you will use
  function creatQuestions() {
    let array = [];
    quizData.forEach(item => {
      let answersArray = [item.correct_answer, ...item.incorrect_answers];

      answersArray = arrayShuffle(answersArray);
      answersArray = answersArray.map(answer => ({
        id: nanoid(),
        answer: answer,
        selected: false,
      }));

      const question = {
        id: nanoid(),
        question: item.question,
        answers: answersArray,
        correct_answer: item.correct_answer,
      };
      array.push(question);
    });

    return array;
  }

  function newGame() {
    setNewQuiz(prev => !prev);
    setQuizData([]);
  }

  return (
    <>
      {quizData[0] ? (
        <QuizPage quizData={creatQuestions()} newGame={newGame} />
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
}

export default GamePage;
